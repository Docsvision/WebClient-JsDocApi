copy /Y "..\Bin\layout-extension.d.ts" "TypeScriptDefinitions\layout-extension.d.ts"
copy /Y "..\Bin\TypeScriptDefinitions\web-client-legacy.d.ts" "TypeScriptDefinitions\web-client-legacy.d.ts"

:: For TypeDoc installation see http://typedoc.org/guides/installation/#command-line-interface
typedoc --theme WebClientTypedocTheme  --name "Docsvision 5 Web-client. JavaScript API"  --readme README.md --includeDeclarations --excludePrivate --mode file --entryPoint WebClient --excludeExternals --logger none --ignoreCompilerErrors --out Output/docs TypeScriptDefinitions/


