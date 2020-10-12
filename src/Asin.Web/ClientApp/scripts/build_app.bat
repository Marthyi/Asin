set current_dir=%~dp0

cd ..\src

call npm install
call ng build --prod

cd %current_dir%
