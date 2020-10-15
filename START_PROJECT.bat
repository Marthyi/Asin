set current_dir=%~dp0

cd src\Asin.Web\ClientApp\scripts

CALL build_app.bat

cd ..\..


start dotnet run --configuration=Release --after-init "start http://localhost"

explorer https://localhost:5001/

cd %current_dir%
