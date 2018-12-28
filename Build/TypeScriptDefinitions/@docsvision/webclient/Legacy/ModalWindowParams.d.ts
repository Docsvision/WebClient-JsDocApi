import { ModalWindowType } from "@docsvision/webclient/Legacy/ModalWindowType";
/** @internal */
export declare class ModalWindowEvents {
    beforeShowCallback?: Function;
    afterShowCallback?: Function;
    beforeCloseCallback?: Function;
    closingCallback?: () => JQueryDeferred<any>;
    afterCloseCallback?: Function;
    beforeDestroyCallback?: Function;
    afterDestroyCallback?: Function;
}
/** @internal */
export declare class ModalWindowParams extends ModalWindowEvents {
    modalType: ModalWindowType;
    modalClassName: string;
    content: string;
    contentClassName: string;
    headerText: string;
    buttonsClassName?: string;
    buttonsReverse: boolean;
    buttonOkClassName: string;
    buttonOkShow: boolean;
    buttonOkText: string;
    buttonOkFunction: Function;
    buttonCancelClassName: string;
    buttonCancelShow: boolean;
    buttonCancelText: string;
    buttonCancelFunction: Function;
    buttons: Array<ModalButton>;
    replaceDefaultButtons: boolean;
}
/** @internal */
export declare class ModalButton {
    buttonClassName: string;
    buttonShow: boolean;
    buttonText: string;
    buttonFunction: Function;
    constructor(text: string, callback: Function, className?: string, visible?: boolean);
    Visible: boolean;
    Text: string;
    CssClassName: string;
    Callback: Function;
    static DefaultButtonOK(text: string, callback: Function): ModalButton;
    static DefaultButtonCancel(text: string, callback: Function): ModalButton;
}
