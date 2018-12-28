import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
/** @internal */
export declare type DocumentKindSelectedCallback = (window: ModalWindow, cardTypeId: string, kindId: string) => void;
/** @internal */
export declare class SelectNewDocumentDialog {
    private createDocumentModal;
    private container;
    private selectedNode;
    private dialogOkButton;
    private ExpadedToggleMarkerClass;
    private CollapsedToggleMarkerClass;
    constructor();
    readonly SelectedKindId: string | undefined;
    readonly SelectedCardTypeId: string | undefined;
    ShowDialog(title: string, okCallback: DocumentKindSelectedCallback, shownCallback?: (window: ModalWindow) => void, closedCallback?: Function): void;
    private InitDialog;
    private onOkButtonClick;
    private selectNode;
}
