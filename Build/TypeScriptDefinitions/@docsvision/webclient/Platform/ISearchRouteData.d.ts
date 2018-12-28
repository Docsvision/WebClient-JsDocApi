import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ISearchRouteData {
    searchContextOption?: string;
    searchText?: string;
    fullTextFilter?: string;
    deviceType?: GenModels.DeviceType;
    oldStoreId?: string;
    currentPage?: any;
    sortingColumn?: any;
    sortIsDesc?: any;
    gridModel?: GenModels.CardListViewModel;
}
