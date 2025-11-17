@echo off
echo ========================================
echo    VIBRA MOTOS - SERVIDOR LOCAL
echo ========================================
echo.
echo Iniciando servidor local...
echo Aguarde alguns segundos...
echo.

cd /d "%~dp0"

REM Verifica se o Node.js está instalado
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERRO: Node.js nao encontrado!
    echo.
    echo Por favor, instale o Node.js em: https://nodejs.org/
    echo Depois execute este arquivo novamente.
    pause
    exit /b 1
)

REM Instala dependências se necessário
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
)

echo.
echo ========================================
echo  ABRINDO VIBRA MOTOS NO NAVEGADOR...
echo ========================================
echo.
echo URL: http://localhost:4173
echo.
echo Para parar o servidor: pressione Ctrl+C
echo.

REM Abre o navegador automaticamente
timeout /t 3 >nul
start http://localhost:4173

REM Inicia o servidor
npm run preview