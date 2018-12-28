export interface IFolderViews {
    Build(folderId: string, viewSourceId: string, searchId: string, currentViewId: string, currentViewName: string): void;
    Destroy(): void;
}
export declare type $FolderViews = {
    folderViews: IFolderViews;
};
