using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocsMapGenerator
{
    class Program
    {
        class DocItem
        {
            public string path;
            public string name;
            public string type;
        } 
        
        class DocDir
        {
            public string name;
            public List<DocDir> subdirs = new List<DocDir>();
            public List<DocItem> items = new List<DocItem>();
        }

        static void AddItem(string path, string docFilepath, string type, string name, DocDir root)
        {
            var pathItems = path.Split('\\');
            var currentDir = root;
            for(var i = 1; i< pathItems.Length-1; i++)
            {
                var item = pathItems[i];
                var dir = currentDir.subdirs.Find(x => x.name == item);
                if (dir == null)
                {
                    dir = new DocDir() { name = item };
                    currentDir.subdirs.Add(dir);
                }
                currentDir = dir;
            }
            currentDir.items.Add(new DocItem() { name = name, path = docFilepath, type = type });
        }

        static void Main(string[] args)
        {

            string docsRoot = args[0];
            string srcRoot = args[1];
            string output = args[2];

            Dictionary<string, string> srcFiles = new Dictionary<string, string>();
            Dictionary<string, string> srcFilesOriginal = new Dictionary<string, string>();
            var srcDir = srcRoot + "/WebClient/WebClient/Content/Layout/Scripts/";
            foreach (string file in Directory.EnumerateFiles(srcDir, "*.ts?", SearchOption.AllDirectories))
            {
                var nicePath = file.Replace(srcDir, "").Replace(Path.GetExtension(file), "");
                var fileText = File.ReadAllText(file);
                srcFiles.Add(nicePath, fileText.ToLower());
                srcFilesOriginal.Add(nicePath, fileText);
            }
            var srcNavigator = srcRoot + "/WebClient/WebClient/Content/Navigator/Scripts/";
            foreach (string file in Directory.EnumerateFiles(srcNavigator, "*.ts?", SearchOption.AllDirectories))
            {
                var nicePath = file.Replace(srcNavigator, "").Replace(Path.GetExtension(file), "");
                if (!srcFiles.ContainsKey(nicePath))
                {
                    var fileText = File.ReadAllText(file);
                    srcFiles.Add(nicePath, fileText.ToLower());
                    srcFilesOriginal.Add(nicePath, fileText);
                }
            }

            DocDir root = new DocDir() { name = "App" } ;
            foreach (string file in Directory.EnumerateFiles(docsRoot + "/classes"))
            {
                BuildTree(srcFiles, srcFilesOriginal, root, file, docsRoot);
            }
            foreach (string file in Directory.EnumerateFiles(docsRoot + "/interfaces"))
            {
                BuildTree(srcFiles, srcFilesOriginal, root, file, docsRoot);
            }
            foreach (string file in Directory.EnumerateFiles(docsRoot + "/enums"))
            {
                BuildTree(srcFiles, srcFilesOriginal, root, file, docsRoot);
            }


            using (var fileStream = new FileStream(output, FileMode.Create))
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


            Console.WriteLine("Complete!");
        }

        private static void BuildTree(Dictionary<string, string> srcFiles, Dictionary<string, string> srcFilesOriginal, DocDir root, string file, string docsRoot)
        {
            var className = Path.GetFileNameWithoutExtension(file).Replace("webclient.", "").ToLower();
            className = className.Split('.').Last();
            string resultNicePath = "";
            string resultName = "";
            string resultType = "";

            const string classMath = "export class ";
            const string classAbstractMath = "export abstract class ";
            const string interfaceMath = "export interface ";
            const string enumMath = "export enum ";


            for (var i = 0; i< srcFiles.Count && resultNicePath == ""; i++)
            {
                var fileTextLower = srcFiles.ElementAt(i);
                var index = -1;
                var classIndex = fileTextLower.Value.IndexOf(classMath + className);
                if (classIndex >= 0)
                {
                    resultType = "tsd-kind-class";
                    index = classIndex + classMath.Length;
                }
                else
                {
                    var abstractClassIndex = fileTextLower.Value.IndexOf(classAbstractMath + className);
                    if (abstractClassIndex >= 0)
                    {
                        resultType = "tsd-kind-class";
                        index = abstractClassIndex + classAbstractMath.Length;
                    }
                    else
                    {
                        var interfaceIndex = fileTextLower.Value.IndexOf(interfaceMath + className);
                        if (interfaceIndex >= 0)
                        {
                            resultType = "tsd-kind-interface";
                            index = interfaceIndex + interfaceMath.Length;
                        }
                        else
                        {
                            var enumIndex = fileTextLower.Value.IndexOf(enumMath + className);
                            if (enumIndex >= 0)
                            {
                                resultType = "tsd-kind-enum";
                                index = enumIndex + enumMath.Length;
                            }
                        }
                    }
                }
                if (index >= 0)
                {
                    var originalText = srcFilesOriginal.ElementAt(i).Value;
                    resultName = originalText.Substring(index, className.Length);
                    resultNicePath = fileTextLower.Key;
                }
               
            }
            if (!String.IsNullOrEmpty(resultNicePath))
            {
                AddItem(resultNicePath, file.Replace(docsRoot + "/", ""), resultType, resultName, root);
            }
            else
            {
                Console.WriteLine("Fail on " + file);
            }
        }

        static void PrintTree(StreamWriter stream, DocDir currentDir, int level)
        {
            var ident = new string(' ', level);            
            stream.Write(ident + "<li>");
            stream.Write(ident + "<b>" + currentDir.name + "</b>");
            stream.WriteLine(ident + @"<ul class=""docs-dir"">");
            
            foreach(var dir in currentDir.subdirs)
            {
                PrintTree(stream, dir, level + 1);
            }

            foreach(var item in currentDir.items)
            {
                stream.Write(ident + "<li class='" + item.type + "'>");
                stream.Write(@"<span class=""tsd-kind-icon"">");
                stream.Write("<a href=\"" + item.path + "\" class=doc-link>" + item.name + "</a>");
                stream.Write("</span>");
                stream.Write("</li>");
            }
            stream.WriteLine(ident + @"</ul>");
        }
        
    }
}
