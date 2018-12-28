:: For TypeDoc installation see http://typedoc.org/guides/installation/#command-line-interface
typedoc --theme WebClientTypedocTheme  --name "Docsvision 5 Web-client 5.5.12. JavaScript API"  --readme ..\README.md --includeDeclarations --excludePrivate --mode modules --excludeExternals --ignoreCompilerErrors --out ../docs TypeScriptDefinitions/

call node build-index.js

call xcopy /E /I /Y /R ../docs-webclient9 ../docs/docs-webclient9
call xcopy /E /I /Y /R ../docs-webclient10 ../docs/docs-webclient10
call xcopy /E /I /Y /R ../docs-webclient11 ../docs/docs-webclient11