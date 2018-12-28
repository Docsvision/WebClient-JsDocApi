import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ICommonFolderInfo } from "@docsvision/webclient/Platform/ICommonFolderInfo";
import { ICommonFolderViewInfo } from "@docsvision/webclient/Platform/ICommonFolderViewInfo";
/** @internal */
export interface IFolderRouteData {
    gridModel?: GenModels.CardListViewModel;
    folderInfo?: ICommonFolderInfo;
    folderViewInfo?: ICommonFolderViewInfo;
}
