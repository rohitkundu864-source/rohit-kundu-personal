@echo off
title Portfolio Server
cd /d "%~dp0"
echo =======================================================
echo  Starting Portfolio Server on http://localhost:3000 ...
echo =======================================================
timeout /t 1 /nobreak >nul
start http://localhost:3000
node server.js
pause
