import { NavigatorFolderType } from "@docsvision/webclient/Legacy/NavigatorFolderType";
/** @internal */
export declare class FolderViewRequestViewModel {
    private folderId;
    private folderUri;
    private queryId;
    private viewid;
    private searchId;
    private sourceType;
    private viewSourceId;
    private folderType;
    private searchContextOption;
    private fullTextFilter;
    private querySearchId;
    private filters;
    hasSearchParametrs: boolean;
    parameters: any;
    PageNumber: string;
    SortedColumnName: string;
    IsDescending: string;
    oldStoreId: string;
    RefreshView: boolean;
    folderRefreshTimeout: number;
    forceVirtualFolderSearch: boolean;
    constructor();
    Filters: any;
    readonly FolderType: NavigatorFolderType;
    FolderId: string;
    ViewId: string;
    SearchContextOption: string;
    FullTextFilter: string;
    ViewSourceId: string;
    QuerySearchId: string;
    SearchId: string;
    GetFolderData(element: HTMLElement): void;
}
