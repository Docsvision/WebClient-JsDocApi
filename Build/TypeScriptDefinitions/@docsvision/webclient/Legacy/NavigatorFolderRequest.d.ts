import { NavigatorFolderType } from "@docsvision/webclient/Legacy/NavigatorFolderType";
/** @internal */
export declare class NavigatorFolderRequest {
    private folderId;
    private folderType;
    constructor(id: string, folderType: NavigatorFolderType);
    readonly FolderId: string;
    readonly FolderType: NavigatorFolderType;
}
