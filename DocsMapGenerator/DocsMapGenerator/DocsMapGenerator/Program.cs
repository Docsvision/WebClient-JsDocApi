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
            var path = pathp.Replace("~App/", "");
            if (!ignores.Any(x => path.StartsWith(x)))
            {
                var pathItems = path.Split('\\').ToList();
                if (name.StartsWith("$"))
                {
                    pathItems = pathItems.Where(x => x != "Services").ToList();
                    root = root.servicesRoot;
                }
                var currentDir = root;
                var currentDirPath = root.name;
                for (var i = 1; i < pathItems.Count - 1; i++)
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
            var srcDir = srcRoot + "/WebClient/WebClient/Content/";
            foreach (string file in Directory.EnumerateFiles(srcDir, "*.ts?", SearchOption.AllDirectories))
            {
                var nicePath = file.Replace(srcDir, "~App/").Replace(Path.GetExtension(file), "");
                var fileText = File.ReadAllText(file);
                srcFiles.Add(nicePath, fileText.ToLower());
                srcFilesOriginal.Add(nicePath, fileText);
            }

            DocDir root = new DocDir() { name = "App" };
            root.servicesRoot = new DocDir() { name = "Services" };
            var webDocsRoot = docsRoot + "/docs";

            foreach (var file in Directory.GetFiles((Path.Combine(webDocsRoot, "modules")), "*.html"))
            {
                var items = HtmlBasedGenerator.FindNodes(file);
                foreach (var item in items)
                {
                    HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, item, "modules");
                }
                Console.WriteLine(file + " items processed");
            }

            //var globals = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "globals.html"));
            //foreach(var glob in globals)
            //{
            //    HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, glob, "");
            //}
            //Console.WriteLine("Global items processed");

            //var genModels = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "modules", "genmodels.html"));
            //foreach (var w in genModels)
            //{
            //    HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, w, "modules");
            //}
            //Console.WriteLine("GenModels items processed");

            //var genControllers = HtmlBasedGenerator.FindNodes(Path.Combine(webDocsRoot, "modules", "gencontrollers.html"));
            //foreach (var w in genControllers)
            //{
            //    HtmlBasedGenerator.BuildTree(srcFilesOriginal, root, w, "modules");
            //}
            //Console.WriteLine("GenControllers items processed");

            var outputFile = docsRoot + "/docs/navPrimaryContent.html";
            PrintTreeToFile(root, outputFile, "");
            var outputFile2 = docsRoot + "/docs/navSecondaryContent.html";
            PrintTreeToFile(root, outputFile2, "../");

            Console.WriteLine("Complete!");
        }

        private static void PrintTreeToFile(DocDir root, string outputFile, string hrefPrefix)
        {
            using (var fileStream = new FileStream(outputFile, FileMode.Create))
            {
                using (var writer = new StreamWriter(fileStream))
                {
                    writer.WriteLine(@"<ul id=""tree_root"" class=""loading"">");
                    PrintTree(writer, root.servicesRoot, hrefPrefix, 0);
                    PrintTree(writer, root, hrefPrefix, 0);
                    writer.WriteLine(@"</ul>");
                    writer.WriteLine(@"<script>document.addEventListener(""DOMContentLoaded"", " +
                            "function() { " +
                                "JSLists.applyToList('tree_root', 'ALL');" +
                               @"document.getElementById(""tree_root"").classList.remove(""loading"");" +
                            " })</script>");
                }
            }
            Console.WriteLine("Output written to " + outputFile);
        }

        static void PrintTree(StreamWriter stream, DocDir currentDir, string hrefPrefix, int level)
        {
            var ident = new string(' ', level);            
            stream.Write(ident + "<li>");
            stream.Write(ident + "<span class=dir-name>" + currentDir.name + "</span>");
            stream.WriteLine(ident + @"<ul class=""docs-dir"" data-dir-path=""" +  currentDir.path + @""">");
            
            foreach(var dir in currentDir.subdirs)
            {
                PrintTree(stream, dir, hrefPrefix, level + 1);
            }

            foreach(var item in currentDir.items)
            {
                stream.Write(ident + "<li class='" + item.type + "'>");
                stream.Write(@"<span class=""tsd-kind-icon"">");
                stream.Write("<a href=\"" + hrefPrefix + item.href.Replace("\\", "/") + "\" class=doc-link data-path=\"" + item.logicPath  + "\" >" + item.name + "</a>");
                stream.Write("</span>");
                stream.Write("</li>");
            }
            stream.WriteLine(ident + @"</ul>");
        }
        
    }
}
