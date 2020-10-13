set current_dir=%~dp0

cd ..\src

call ng serve --open --watch --aot

cd %current_dir%
