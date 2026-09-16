@echo off
title Neelam's Digital Canvas - Localhost Server
echo ========================================================
echo   Starting Neelam's Digital Canvas on localhost:8080...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
