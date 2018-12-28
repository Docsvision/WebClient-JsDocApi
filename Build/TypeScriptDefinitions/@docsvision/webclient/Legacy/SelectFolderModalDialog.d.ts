import { FolderTree } from "@docsvision/webclient/Legacy/FolderTree";
/** @internal */
export declare class SelectFolderModalDialog extends FolderTree {
    private static DialogContainerClassName;
    private onClose;
    private dialog;
    constructor(onClose?: (folders: string[]) => void);
    ShowDialog(): void;
    private AttachFolder;
    protected ClearSelectedFolders(): void;
}
