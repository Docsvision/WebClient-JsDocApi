/** @internal */
export declare class FolderTree {
    static DefaultContainerClassName: string;
    protected TreeContainerClassName: string;
    protected url: string;
    protected ExpandFolderFunction: Function;
    protected OpenFolderFunction: Function;
    protected AfterFolderSelect: Function;
    protected ExludeSearchParamFoldes: boolean;
    private lastSelectedFolder;
    constructor();
    protected SelectTreeFolder(element: HTMLElement, expand: boolean): void;
    protected UnselectTreeFolder(element: HTMLElement): void;
    protected TreeFolderSelected(element: HTMLElement): Boolean;
    protected ExpandFolder(element: HTMLElement): void;
    protected LoadData(requestData: any, callback: Function): void;
    protected ClearSelectedFolders(): void;
    protected GetSelectedFolders(): NodeListOf<Element>;
    protected GetAllVisibleFolders(): NodeListOf<Element>;
    protected AddExpandFolderButtonEventClick(elements: NodeListOf<Element>): void;
    protected AddOpenFolderButtonEventClick(elements: NodeListOf<Element>): void;
}
