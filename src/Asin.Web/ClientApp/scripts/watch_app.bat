set current_dir=%~dp0

cd ..\src

call ng build --watch --aot

cd %current_dir%
