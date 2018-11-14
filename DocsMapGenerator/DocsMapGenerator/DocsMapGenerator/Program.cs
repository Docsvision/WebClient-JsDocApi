using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocsMapGenerator
{
    static class Program
    {
        static string[] ignores = new string[]
        {
            "App\\Approval",
            "App\\Routes",
            "App\\Models",
            "App\\Interfaces",
            "App\\Core\\Legacy",
            "App\\Core\\Legacy",
            "App\\Core\\ActiveXObject",
            "App\\Core\\Array",
            "App\\Core\\String",
            "App\\Controllers",
            "App\\Core\\JQueryDeferred"
        };

        public static void AddItem(string pathp, string href, string type, string name, DocDir root)
        {
            var path = pathp.Replace("~Navigator/", "").Replace("~Layout/", "");
            if (!ignores.Any(x => path.StartsWith(x)))
            {
                if (name.StartsWith("$"))
                {
                    path = path.Replace("App", "App\\Services");
                }

                var pathItems = path.Split('\\');
                var currentDir = root;
                var currentDirPath = root.name;
                for (var i = 1; i < pathItems.Length - 1; i++)
                {
                    var item = pathItems[i];
                    var dir = currentDir.subdirs.Find(x => x.name == item);
                    if (dir == null)
                    {
                        dir = new DocDir() { name = item };
                        currentDir.subdirs.Add(dir);
                    }
                    currentDir = dir;
                    currentDirPath += "/" + dir.name;
                    dir.path = currentDirPath;
                }
                if (!currentDir.items.Any(x => x.href == href))
                {
                    currentDir.items.Add(new DocItem() { name = name, href = href, type = type, logicPath = path });
                }
            }
        }

        static void Main(string[] args)
        {

            string docsRoot = args[0];
            string srcRoot = args[1];

            Console.WriteLine("Generating documentation map from source folder {0} and docs folder {1}", Path.GetFullPath(srcRoot), Path.GetFullPath(docsRoot));

            Dictionary<string, string> srcFiles = new Dictionary<string, string>();
            Dictionary<string, string> srcFilesOriginal = new Dictionary<string, string>();
            var srcDir = srcRoot + "/WebClient/WebClient/Content/Layout/Scripts/";
            foreach (string file in Directory.EnumerateFiles(srcDir, "*.ts?", SearchOption.AllDirectories))
            {
                var nicePath = file.Replace(srcDir, "~Layout/").Replace(Path.GetExtension(file), "");
                var fileText = File.ReadAllText(file);
                srcFiles.Add(nicePath, fileText.ToLower());
                srcFilesOriginal.Add(nicePath, fileText);
            }
            var srcNavigator = srcRoot + "/WebClient/WebClient/Content/Navigator/Scripts/";
            foreach (string file in Directory.EnumerateFiles(srcNavigator, "*.ts?", SearchOption.AllDirectories))
            {
                var nicePath = file.Replace(srcNavigator, "~Navigator/").Replace(Path.GetExtension(file), "");
                if (!srcFiles.ContainsKey(nicePath))
                {
                    var fileText = File.ReadAllText(file);
                    srcFiles.Add(nicePath, fileText.ToLower());
                    srcFilesOriginal.Add(nicePath, fileText);
                }
            }

            DocDir root = new DocDir() { name = "App" } ;
            var webDocsRoot = docsRoot + "/docs";

            
            var globals = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "globals.html"));
            foreach(var glob in globals)
            {
                HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, glob, "");
            }
            Console.WriteLine("Global items processed");

            var webclient = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "modules", "webclient.html"));
            foreach (var w in webclient)
            {
                HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, w, "modules");
            }
            Console.WriteLine("WebClient items processed");

            var genModels = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "modules", "webclient.genmodels.html"));
            foreach (var w in genModels)
            {
                HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, w, "modules");
            }
            Console.WriteLine("GenModels items processed");

            var genControllers = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "modules", "webclient.gencontrollers.html"));
            foreach (var w in genControllers)
            {
                HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, w, "modules");
            }
            Console.WriteLine("GenControllers items processed");

            var outputFile = docsRoot + "/Build/WebClientTypedocTheme/partials/nicenav.hbs";
            using (var fileStream = new FileStream(outputFile, FileMode.Create))
            {
                using (var writer = new StreamWriter(fileStream))
                {
                    writer.WriteLine(@"<ul id=""tree_root"" class=""loading"">");
                    PrintTree(writer, root, 0);
                    writer.WriteLine(@"</ul>");
                    writer.WriteLine(@"<script>document.addEventListener(""DOMContentLoaded"", " +
                            "function() { " +
                                "JSLists.applyToList('tree_root', 'ALL');" +
                               @"document.getElementById(""tree_root"").classList.remove(""loading"");" +
                            " })</script>");
                }
            }
            Console.WriteLine("Ouput written to " + outputFile);


            Console.WriteLine("Complete!");
        }


        static void PrintTree(StreamWriter stream, DocDir currentDir, int level)
        {
            var ident = new string(' ', level);            
            stream.Write(ident + "<li>");
            stream.Write(ident + "<span class=dir-name>" + currentDir.name + "</span>");
            stream.WriteLine(ident + @"<ul class=""docs-dir"" data-dir-path=""" +  currentDir.path + @""">");
            
            foreach(var dir in currentDir.subdirs)
            {
                PrintTree(stream, dir, level + 1);
            }

            foreach(var item in currentDir.items)
            {
                stream.Write(ident + "<li class='" + item.type + "'>");
                stream.Write(@"<span class=""tsd-kind-icon"">");
                stream.Write("<a href=\"{{relativeURL " + "\"" + item.href.Replace("\\", "/") + "\"}}\" class=doc-link data-path=\"" + item.logicPath  + "\" >" + item.name + "</a>");
                stream.Write("</span>");
                stream.Write("</li>");
            }
            stream.WriteLine(ident + @"</ul>");
        }
        
    }
}
