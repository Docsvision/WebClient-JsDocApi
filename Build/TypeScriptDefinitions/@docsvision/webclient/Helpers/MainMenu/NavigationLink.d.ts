import React from "react";
/** @internal */
export interface INavigationLinkProps {
    /**
     * Значение атрибута href для html-элемента `<a>`.
     * Для указания страницы Web-клиента используйте путь, начинающийся с `#`. Например, `#/Dashboard`.
     */
    href: string;
    /** Значение атрибута hreflang для html-элемента `<a>` */
    hrefLang?: string;
    /** Значение атрибута target для html-элемента `<a>` */
    target?: string;
    /** Значение атрибута accesskey для html-элемента `<a>` */
    accessKey?: string;
    /** Значение атрибута download для html-элемента `<a>` */
    download?: boolean;
    /** Значение атрибута type для html-элемента `<a>` */
    type?: string;
    tabIndex?: number;
    children?: any;
    onClick?: (ev: MouseEvent) => void;
    disabled?: boolean;
    className?: string;
}
/** @internal */
export declare class NavigationLink extends React.Component<INavigationLinkProps, any> {
    lastRouteTimestamp: number;
    static CHANGE_ROUTE_MAX_TIMEOUT: number;
    constructor(props: INavigationLinkProps);
    onNavigationLinkClick: (ev: MouseEvent, force: boolean) => void;
    attachRoot: (elem: HTMLElement) => void;
    render(): JSX.Element;
}
