@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required to run this project.
  echo Install the current LTS version from https://nodejs.org/ and run this file again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Reinstall Node.js with npm enabled, then run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing project dependencies. This can take a minute...
  call npm ci
  if errorlevel 1 (
    echo Dependency installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)

echo Starting Sol Naciente. Keep this window open while you browse the site.
call npm run dev -- --host 127.0.0.1 --open
pause