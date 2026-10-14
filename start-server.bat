@echo off
title Mon Herbier - Serveur Local
echo ====================================================
echo    Lancement du serveur web pour Mon Herbier
echo    Ouverture sur http://localhost:8000
echo ====================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
