/** @internal */
export declare class GridOptions {
    tableClass: string;
    wrapRow: boolean;
    currentPage: number;
    enablePaging: boolean;
    enableSorting: boolean;
    enableGrouping: boolean;
    enableFiltering: boolean;
    enableItemDetails: boolean;
    enableMobileFormat: boolean;
    isMobileFormat: boolean;
    currentMobilePage: number;
    urlGetItemsList: string;
    urlGetItemsListSilent: string;
    cardSourceId: string;
    folderId: string;
    searchFilter: string;
    folderHeader: string;
    dataLoader: (requestData: any, isMobile: boolean) => JQueryDeferred<any>;
}
