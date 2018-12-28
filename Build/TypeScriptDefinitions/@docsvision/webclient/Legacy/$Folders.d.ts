import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IFolders {
    registerFolderInfo(folderId: string, info: GenModels.FolderNode): void;
    unregisterFolderInfo(folderId: string, info: GenModels.FolderNode): void;
    getCachedFolderInfo(folderId: string): GenModels.FolderNode;
    getFolderInfo(folderId: string): JQueryDeferred<GenModels.FolderNode>;
    getCurrentFolderId(): string | undefined;
}
export declare type $Folders = {
    folders: IFolders;
};
