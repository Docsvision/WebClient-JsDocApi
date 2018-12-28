import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { IFileSignOldInteractionModel } from "@docsvision/webclient/Legacy/IFileSignInteractionModel";
/** @internal */
export declare class FileSignOld {
    private static SignAllButton;
    private static SignLogButton;
    private filePanel;
    private crypto;
    private traceProvider;
    private interactionModel;
    constructor(filePanel: Element, interactionModel?: IFileSignOldInteractionModel);
    private Initialize;
    ShowSignDialog(item: HTMLElement, url: any, requestData: any): void;
    private AddSelectedSignatureRowEventHandler;
    private ProcessSigns;
    private ShowSignLogDialog;
    private GetDialogParams;
    private ShowDialog;
    protected SignData(selectedThumbprint: string, dialog: ModalWindow): Promise<any>;
    private static AttachSign;
    static ShowSignWarningDialog(okFunction: Function): void;
}
