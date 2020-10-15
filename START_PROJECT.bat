set current_dir=%~dp0

cd src\Asin.Web\ClientApp\scripts

CALL build_app.bat

cd ..\..


start dotnet run --configuration=Release

explorer https://localhost:5001/

cd %current_dir%
