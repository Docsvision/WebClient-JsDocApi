import { FolderTree } from "@docsvision/webclient/Legacy/FolderTree";
/** @internal */
export declare class SelectUserFolderModalDialog extends FolderTree {
    private dialog;
    private rootElement;
    private input;
    private button;
    private clearBtn;
    constructor(element: HTMLElement);
    private Initialize;
    ShowDialog(): void;
    private SelectFolder;
    private UpdateFolder;
    private AddExpandOverride;
    private AddOpenOverride;
    private AddShowDialogButtonEventClick;
    private AddClearButtonEventClick;
}
