@echo off
setlocal enabledelayedexpansion
title Publication GitHub - Mon Herbier
echo ================================================================
echo        PUBLICATION DU PROJET SUR GITHUB (Botanique)
echo ================================================================
echo.

set "GIT_PATH=%LOCALAPPDATA%\Programs\Git\cmd"
if exist "%GIT_PATH%\git.exe" (
    set "PATH=%GIT_PATH%;%PATH%"
)

echo Verification de Git...
git --version
if errorlevel 1 (
    echo [ERREUR] Git n'a pas pu etre execute.
    pause
    exit /b 1
)

echo.
echo Depot cible : https://github.com/kirikou31953/Botanique.git
echo Branche     : main
echo.
echo Choisissez votre methode d'authentification :
echo  [1] Utiliser un Personal Access Token GitHub (Recommande)
echo  [2] Pousser via SSH (apres avoir ajoute la cle a GitHub)
echo  [3] Pousser normalement (git push standard)
echo.
set /p "CHOIX=Votre choix (1, 2 ou 3) : "

if "%CHOIX%"=="1" (
    echo.
    echo Rendez-vous sur : https://github.com/settings/tokens
    echo Generez un token (Classic) avec la case 'repo' cochee.
    echo.
    set /p "TOKEN=Collez votre token GitHub ici (ex: ghp_...): "
    if "!TOKEN!"=="" (
        echo [ERREUR] Aucun token saisi.
        pause
        exit /b 1
    )
    echo Envoi vers GitHub en cours...
    git push "https://!TOKEN!@github.com/kirikou31953/Botanique.git" main
    if errorlevel 1 (
        echo [ERREUR] L'envoi a echoue. Verifiez votre token et vos droits sur le depot.
    ) else (
        echo [SUCCES] Tous les fichiers ont ete publies avec succes sur GitHub !
        echo Consultez votre depot : https://github.com/kirikou31953/Botanique
    )
    pause
    exit /b 0
)

if "%CHOIX%"=="2" (
    echo.
    echo Configuration de l'URL distante en SSH...
    git remote set-url origin git@github.com:kirikou31953/Botanique.git
    echo Envoi vers GitHub via SSH...
    git push origin main
    if errorlevel 1 (
        echo [ERREUR] L'authentification SSH a echoue.
        echo Assurez-vous d'avoir colle la cle publique sur https://github.com/settings/ssh/new
    ) else (
        echo [SUCCES] Tous les fichiers ont ete publies sur GitHub via SSH !
    )
    pause
    exit /b 0
)

if "%CHOIX%"=="3" (
    echo.
    echo Envoi direct via Git...
    git push origin main
    pause
    exit /b 0
)

echo Choix invalide.
pause
