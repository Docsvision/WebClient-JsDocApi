using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocsMapGenerator
{
    public class DocItem
    {
        public string href;
        public string name;
        public string type;
        public string logicPath;
    }

    public class DocDir
    {
        public string name;
        public List<DocDir> subdirs = new List<DocDir>();
        public List<DocItem> items = new List<DocItem>();

        public string path;
    }
}
