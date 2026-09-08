@echo off
title Neelam's Digital Canvas - Localhost Server
echo ========================================================
echo   Starting Neelam's Digital Canvas on localhost:3000...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
