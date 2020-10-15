set current_dir=%~dp0

cd src\Asin.Web\ClientApp\scripts

CALL build_app.bat

cd ..\..

dotnet run --configuration=Release --after-init "start http://localhost"

cd %current_dir%
