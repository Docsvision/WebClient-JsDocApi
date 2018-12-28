import { ModalWindowEvents, ModalWindowParams } from "@docsvision/webclient/Legacy/ModalWindowParams";
/** @internal */
export interface IModalWindowCreatorOptions {
    withoutAnimation?: boolean;
}
/** @deprecated Используйте {@link ModalDialog} или {@link MessageBox}. */
export declare class ModalWindow {
    private traceProvider;
    private params;
    private overlay;
    private modal;
    private modalHeader;
    private modalContent;
    private modalOkButton;
    private modalCancelButton;
    private modalCloseButton;
    private buttonsDiv;
    private content;
    private isOpened;
    events: ModalWindowEvents;
    static lastError?: ModalWindow;
    constructor(params: ModalWindowParams);
    readonly IsOpened: boolean;
    readonly ModalElement: HTMLElement;
    readonly ModalContentElement: HTMLElement;
    readonly OkButtonElement: HTMLButtonElement;
    readonly CancelButtonElement: HTMLButtonElement;
    Show(withoutAnimation?: boolean): void;
    Hide(whithCallbacks?: boolean, withoutAnimation?: boolean): void;
    HideOverlay(): void;
    private Initialize;
    private CreateOverlay;
    private CreateModal;
    private CreateModalContent;
    private CreateModalCloseButton;
    private CreateModalHeader;
    private CreateModalButtonsDiv;
    private CreateModalOkButton;
    private CreateModalButton;
    private CreateModalCancelButton;
    private Destroy;
    static ShowErorDialog(message: string, options?: IModalWindowCreatorOptions): ModalWindow;
    static ShowConfirmDialog(message: string, yesButton?: Function, cancelButton?: Function, options?: IModalWindowCreatorOptions): ModalWindow;
    static ShowInformationDialog(message: string, headerText?: string, options?: IModalWindowCreatorOptions): ModalWindow;
    static ShowWarningDialog(message: string, headerText?: string, okButton?: Function, cancelButton?: Function, options?: IModalWindowCreatorOptions): ModalWindow;
}
