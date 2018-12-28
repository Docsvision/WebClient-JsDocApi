import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ICommonFolderViewInfo {
    viewId?: string;
    searchContextOption?: string;
    fullTextFilter?: string;
    filter?: any;
    currentPage?: any;
    sortingColumn?: any;
    sortIsDesc?: any;
    parameters?: any;
    deviceType?: GenModels.DeviceType;
    oldStoreId?: string;
    viewSourceId?: string;
    querySearchId?: string;
    searchId?: string;
}
