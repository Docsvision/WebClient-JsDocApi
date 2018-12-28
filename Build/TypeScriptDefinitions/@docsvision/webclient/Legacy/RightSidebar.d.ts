/** @internal */
export declare class RightSidebar {
    rootElement: HTMLElement;
    private closeButton;
    private content;
    private overlay;
    private useOverlay;
    private destroyOnClose;
    private title;
    private onCloseCallback;
    private onClosingCallback;
    constructor(title?: string);
    OnCloseCallback: Function;
    OnClosingCallback: () => JQueryDeferred<any>;
    UseOverlay: boolean;
    DestroyOnClose: boolean;
    Content: string;
    readonly IsOpened: boolean;
    AppendToContent(element: HTMLElement): void;
    SetClassName(className: string): void;
    Open(callback?: Function): void;
    Close(): void;
    private Initialize;
}
