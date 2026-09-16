@echo off
title Push Neelam's Digital Canvas to GitHub
color 0B
echo ============================================================
echo   NEELAM'S DIGITAL CANVAS - PUSH TO GITHUB REPOSITORY
echo ============================================================
echo Target Repository: https://github.com/bittusharma6148-dev/neelams-digital-canvas.git
echo.
echo [1/2] Pushing master branch to GitHub...
git push -u origin master
echo.
echo [2/2] Pushing main branch to GitHub...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    color 0A
    echo ============================================================
    echo [SUCCESS] Sabhi files aur commits GitHub par upload ho gaye hain!
    echo ============================================================
    echo Repository Link: https://github.com/bittusharma6148-dev/neelams-digital-canvas
) else (
    color 0C
    echo ============================================================
    echo [NOTE] Agar upload fail hua ya popup aaya:
    echo 1. Browser me 'Authorize git-ecosystem' popup ko approve karein.
    echo 2. Check karein ki GitHub par 'neelams-digital-canvas' repo banaya hua hai.
    echo ============================================================
)
echo.
pause
