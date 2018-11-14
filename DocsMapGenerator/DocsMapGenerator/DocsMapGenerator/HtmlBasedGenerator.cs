using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocsMapGenerator
{
    public class HtmlBasedGenerator
    {
        public static List<HtmlNode> FindNodes(string htmlFile)
        {
            HtmlDocument htmlSnippet = new HtmlDocument();
            htmlSnippet.LoadHtml(File.ReadAllText(htmlFile));

            List<HtmlNode> navLinksTags = new List<HtmlNode>();

            string[] classes = new string[] { "tsd-kind-class", "tsd-kind-interface", "tsd-kind-enum", "tsd-kind-type-alias", "tsd-kind-variable" };


            foreach (HtmlNode listItem in htmlSnippet.DocumentNode.SelectNodes("//li[@class]"))
            {
                var childLink = listItem.ChildNodes?.FirstOrDefault(x => x.Name == "a");
                if (childLink != null && !listItem.GetAttributeValue("class", "").Contains("jslist-li"))
                {
                    HtmlAttribute classAttr = listItem.Attributes["class"];
                    if (classAttr != null && classes.Intersect(classAttr.Value.Split(' ').Select(x => x.Trim())).Count() > 0)
                    {
                        navLinksTags.Add(listItem);
                    }
                }
            }

            return navLinksTags;
        }

        public static void BuildTree(Dictionary<string, string> srcFilesOriginal, DocDir root, HtmlNode node, string linksRelativePath)
        {
            var childLink = node.ChildNodes?.FirstOrDefault(x => x.Name == "a");
            var className = childLink.InnerText;


            className = className.Split('.').Last();
            string resultNicePath = "";
            string resultName = "";
            string resultType = "";

            const string classMath = "class ";
            const string classAbstractMath = "abstract class ";
            const string interfaceMath = "interface ";
            const string enumMath = "enum ";
            const string typeAliasMath = "type ";
            //const string globalTypeAliasMath = "type ";
            const string varMath = "var ";
            const string constMath = "const ";


            for (var i = 0; i < srcFilesOriginal.Count && resultNicePath == ""; i++)
            {
                var fileText = srcFilesOriginal.ElementAt(i);

                var index = -1;
                // Кто бы мог подумать, Contains в несколько раз быстрее IndexOf!
                if (Math(fileText.Value, classMath, className) ||
                    Math(fileText.Value, classAbstractMath, className) ||
                    Math(fileText.Value, interfaceMath, className) ||
                    Math(fileText.Value, enumMath, className) ||
                    Math(fileText.Value, typeAliasMath, className) ||
                    //Math(fileText.Value, globalTypeAliasMath, className) ||
                    Math(fileText.Value, varMath, className) ||
                    Math(fileText.Value, constMath, className))
                {
                    resultType = FindIndex(className, classMath, "tsd-kind-class", fileText, ref index);
                    if (resultType == null)
                    {
                        resultType = FindIndex(className, classAbstractMath, "tsd-kind-class", fileText, ref index);
                        if (resultType == null)
                        {
                            resultType = FindIndex(className, interfaceMath, "tsd-kind-interface", fileText, ref index);
                            if (resultType == null)
                            {
                                resultType = FindIndex(className, enumMath, "tsd-kind-enum", fileText, ref index);
                                if (resultType == null)
                                {
                                    resultType = FindIndex(className, typeAliasMath, "tsd-kind-type-alias", fileText, ref index);
                                    if (resultType == null)
                                    {

                                        resultType = FindIndex(className, constMath, "tsd-kind-variable", fileText, ref index);
                                        if (resultType == null)
                                        {
                                            resultType = FindIndex(className, varMath, "tsd-kind-variable", fileText, ref index);
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                    if (resultType != null)
                    {
                        var originalText = srcFilesOriginal.ElementAt(i).Value;
                        resultName = originalText.Substring(index, className.Length);
                        resultNicePath = fileText.Key;
                    }
                }
            }
            if (!String.IsNullOrEmpty(resultNicePath))
            {
                var href = childLink.GetAttributeValue("href", "");
                if (!String.IsNullOrEmpty(linksRelativePath))
                {
                    href = linksRelativePath + "/" + href;
                }

                Program.AddItem(resultNicePath, href, resultType, resultName, root);
            }
            else
            {
                Console.WriteLine("Fail on " + className);
            }
        }

        

        private static string FindIndex(string className, string math, string kind, KeyValuePair<string, string> fileTextLower, ref int index)
        {
            var mathIndex = fileTextLower.Value.IndexOf(math + className + " ");
            if (mathIndex < 0)
            {
                mathIndex = fileTextLower.Value.IndexOf(math + className + "<");
            }

        
            if (mathIndex >= 0)
            {
                index = mathIndex + math.Length;
                return kind;
            }
            else
            {
                return null;
            }

            
        }

        private static bool Math(string fileTextLower, string classMath, string className)
        {
            return fileTextLower.Contains(classMath + className + " ") ||
                                fileTextLower.Contains(classMath + className + "<");
        }
    }
}
