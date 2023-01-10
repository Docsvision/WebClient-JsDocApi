:: For TypeDoc installation see http://typedoc.org/guides/installation/#command-line-interface
typedoc --theme WebClientTypedocTheme  --name "Docsvision 5 Web-client 5.5.17. JavaScript API"  --readme ..\README.md --includeDeclarations --excludePrivate --mode modules --excludeExternals --ignoreCompilerErrors --out ../docs TypeScriptDefinitions/

call node build-index.js