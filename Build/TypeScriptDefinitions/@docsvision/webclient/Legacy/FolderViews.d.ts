import { IFolderViews } from "@docsvision/webclient/Legacy/$FolderViews";
/** @internal */
export declare class FolderViews implements IFolderViews {
    private selectViewBtnId;
    private viewsContainerId;
    private selectViewListId;
    private folderId;
    private viewSourceId;
    private searchId;
    private currentViewId;
    private currentViewName;
    private views;
    private viewFolderId;
    private isListOpened;
    private traceProvider;
    private readonly SelectViewBtn;
    private readonly SelectViewList;
    private readonly SelectViewContainer;
    constructor(viewsContainerId: string, selectViewsBtnId: string, selectViewListId: string);
    readonly HasViews: boolean;
    Build(folderId: string, viewSourceId: string, searchId: string, currentViewId?: string, currentViewName?: string): void;
    Destroy(): void;
    private Initialize;
    private BuildViewsList;
    private static GetViewsListForFolder;
    private SetCurrentView;
    private selectView;
    private checkExternalClick;
}
