:: For TypeDoc installation see http://typedoc.org/guides/installation/#command-line-interface
typedoc --theme WebClientTypedocTheme  --name "Docsvision 5 Web-client 5.4.11. JavaScript API"  --readme ..\README.md --includeDeclarations --excludePrivate --mode file --excludeExternals --logger none --ignoreCompilerErrors --out ../docs TypeScriptDefinitions/

xcopy /E /I /Y /R ../docs-webclient9 ../docs/docs-webclient9
xcopy /E /I /Y /R ../docs-webclient10 ../docs/docs-webclient10