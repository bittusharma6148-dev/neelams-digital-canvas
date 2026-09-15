@echo off
title Push Latest Changes to GitHub
echo ============================================================
echo   NEELAM'S DIGITAL CANVAS - PUSH LATEST CHANGES TO GITHUB
echo ============================================================
echo Repository: https://github.com/bnkhasha-byte/neelams-digital-canvas.git
echo.
echo Pushing all latest commits (master branch)...
echo.
git push -u origin master
echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================================
    echo [SUCCESS] Sabhi latest changes GitHub par upload ho gaye hain!
    echo ============================================================
) else (
    echo ============================================================
    echo [NOTE] Agar login popup aaya hai to browser se authorize karein.
    echo ============================================================
)
echo.
pause
