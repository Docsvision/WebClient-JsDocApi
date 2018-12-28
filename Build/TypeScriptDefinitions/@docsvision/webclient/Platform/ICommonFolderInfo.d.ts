import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { NavigatorFolderType } from "@docsvision/webclient/Legacy/NavigatorFolderType";
/** @internal */
export interface ICommonFolderInfo {
    folderId?: string;
    folderName?: string;
    folderColor?: string;
    hasSubfolders?: boolean;
    folderType?: GenModels.FolderNodeType;
    defaultStyle?: GenModels.FolderNodeStyle;
    defaultViewId?: string;
    url?: string;
    parentFolders?: string[];
    refreshTimeout?: number;
    forceVirtualFolderSearch?: boolean;
    folderUri?: string;
    navigatorFolderType?: NavigatorFolderType;
    sourceType?: string;
    queryId?: string;
}
