export declare class NotyDef {
    constructor(options?: NotyDef.Options);
    /**
     * Show a NOTY
     */
    show: () => void;
    /**
     * Close a NOTY
     */
    close: () => void;
    /**
     * Notification text updater. Important: .noty_body class is required for setText API method
     */
    setText: (text: string, overrideConstructorOption?: true) => void;
    /**
     * Notification type updater
     */
    setType: (type: NotyDef.NotyType, overrideConstructorOption?: true) => void;
    /**
     * Notification theme updater
     */
    setTheme: (theme: NotyDef.NotyTheme, overrideConstructorOption?: true) => void;
    /**
     * false (clears timeout) or integer (clears timer, starts for given value)
     */
    setTimeout: (option: false | number) => void;
    /**
     * Clears the timeout
     */
    stop: () => void;
    /**
     * Restarts the timeout
     */
    resume: () => void;
    /**
     * Register event handlers for Noty outside of constructior options
     * Important: You need to call on() methods before the show() method
     */
    on: (eventName: NotyDef.NotyEvent, callback: Function) => void;
    /**
     * Without queue name: Closes all notifications
     * With queue name: Closes all notifications for the named queue
     */
    static closeAll: (queueName?: string) => void;
    /**
     * Without queue name: Sets the maxVisible notification count for global queue
     * With parameter: Sets the maxVisible notification count for the named queue
     */
    static setMaxVisible: (max: number, queueName?: string) => void;
    /**
     * Change default values for new instances of NOTY
     */
    static overrideDefaults: (obj: {
        [i: string]: any;
    }) => NotyDef;
    static button: (text: string, classNames: string, cb: Function, attributes?: any) => NotyDef.Button;
}
export declare namespace NotyDef {
    type NotyType = 'alert' | 'success' | 'warning' | 'error' | 'info' | 'information';
    type NotyTheme = 'mint' | 'sunset' | 'relax' | 'metroui' | 'bootstrap-v3' | 'bootstrap-v4' | 'semanticui' | 'nest';
    type NotyLayout = 'top' | 'topLeft' | 'topCenter' | 'topRight' | 'center' | 'centerLeft' | 'centerRight' | 'bottom' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    type NotyEvent = 'beforeShow' | 'onShow' | 'afterShow' | 'onClose' | 'afterClose' | 'onHover' | 'onTemplate';
    interface Button {
        new (text: string, classNames: string, cb: Function, attributes: any): NotyDef.Button;
    }
    interface Options {
        type?: NotyDef.NotyType;
        layout?: NotyDef.NotyLayout;
        theme?: NotyDef.NotyTheme;
        text?: string;
        timeout?: false | number;
        progressBar?: boolean;
        closeWith?: ('click' | 'button')[];
        animation?: {
            open?: string | null | Function;
            close?: string | null | Function;
        };
        id?: false | string;
        force?: boolean;
        killer?: boolean | string;
        queue?: string;
        container?: false | string;
        buttons?: NotyDef.Button[];
        callbacks?: {
            beforeShow?: () => void;
            onShow?: () => void;
            afterShow?: () => void;
            onClose?: () => void;
            afterClose?: () => void;
            onHover?: () => void;
            onTemplate?: () => void;
        };
        sounds?: {
            sources?: string[];
            volume?: number;
            conditions?: string[];
        };
        docTitle?: {
            conditions?: string[];
        };
        modal?: boolean;
    }
}
/** Вспомогательный класс для создания всплывающих уведомлений */
export declare class PopupNotification {
    static getDefaultOptions: () => NotyDef.Options;
    /**
     * Создаёт уведомление
     * @param options Список опций
     * @param show Показывать ли уведомление сразу же
     */
    static create(options: NotyDef.Options, show?: boolean): NotyDef;
}
