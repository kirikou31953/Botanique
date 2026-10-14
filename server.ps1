param(
    [int]$Port = 8000
)

$HostAddress = "http://localhost:$Port/"
$RootPath = $PSScriptRoot
if (-not $RootPath) {
    $RootPath = (Get-Location).Path
}

$MimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".webp" = "image/webp"
    ".ico"  = "image/x-icon"
}

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($HostAddress)

try {
    $Listener.Start()
} catch {
    Write-Host "Le port $Port est deja utilise ou indisponible. Tentative avec le port 8080..." -ForegroundColor Yellow
    $Port = 8080
    $HostAddress = "http://localhost:$Port/"
    $Listener = New-Object System.Net.HttpListener
    $Listener.Prefixes.Add($HostAddress)
    $Listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Serveur local pour 'Mon Herbier' actif !" -ForegroundColor Green
Write-Host " Lien accessible : $HostAddress" -ForegroundColor Cyan
Write-Host " Dossier racine : $RootPath" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

try {
    while ($Listener.IsListening) {
        $Context = $Listener.GetContext()
        $Request = $Context.Request
        $Response = $Context.Response

        $UrlPath = $Request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($UrlPath)) {
            $UrlPath = "index.html"
        }

        $DecodedPath = [System.Uri]::UnescapeDataString($UrlPath).Replace('/', '\')
        $FilePath = Join-Path $RootPath $DecodedPath

        if (Test-Path $FilePath -PathType Leaf) {
            $Ext = [System.IO.Path]::GetExtension($FilePath).ToLower()
            $ContentType = $MimeTypes[$Ext]
            if (-not $ContentType) {
                $ContentType = "application/octet-stream"
            }

            try {
                $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
                $Response.ContentType = $ContentType
                $Response.ContentLength64 = $Bytes.Length
                $Response.StatusCode = 200
                $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
            } catch {
                $Response.StatusCode = 500
            }
        } else {
            $Response.StatusCode = 404
            $NotFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - Fichier non trouve</h1><p>Impossible de trouver : $UrlPath</p>")
            $Response.ContentType = "text/html; charset=utf-8"
            $Response.ContentLength64 = $NotFoundMsg.Length
            $Response.OutputStream.Write($NotFoundMsg, 0, $NotFoundMsg.Length)
        }

        $TimeNow = [System.DateTime]::Now.ToString("HH:mm:ss")
        $Status = $Response.StatusCode
        $Verb = $Request.HttpMethod
        Write-Host "[$TimeNow] $Status - $Verb $UrlPath"

        $Response.OutputStream.Close()
    }
} finally {
    $Listener.Stop()
    $Listener.Close()
}
