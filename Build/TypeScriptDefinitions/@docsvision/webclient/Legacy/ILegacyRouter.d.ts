export interface ILegacyRouter {
    GetLocation(): string;
    getLocationFromRoute(route: string): any;
    /** @deprecated */
    goToRoute(context: any): void;
    /** @deprecated Используйте {@link DashboardRouteHelpers.goToDashboard} */
    goToDashboard(context: any): void;
    LoadContent(url: string, requestData: any, contentElement: HTMLElement, showOverlay?: boolean, callback?: Function): void;
    LoadMainContent(url: string, requestData: any, showOverlay?: boolean, get?: boolean, callback?: (isError?: boolean) => void): void;
    LoadContnentFromRoute(cardId: any): JQueryDeferred<any>;
    /**
     * Try set main content element.
     * @param elem
     * @param doneCallback
     */
    SetMainContentElement(elem: HTMLElement, doneCallback?: Function, newContentCssClass?: string): JQueryDeferred<void>;
    SetMainContentHtml(html: string, doneCallback?: Function, newContentCssClass?: string): JQueryDeferred<any>;
    PrepareMainContentChange(): JQueryDeferred<any>;
    AddMainContentChangingListener(listener: () => JQueryDeferred<any>): any;
    RemoveMainContentChangingListener(listener: () => JQueryDeferred<any>): any;
    /** Calls addEventListener for main content html element. */
    AddMainContentEventListener(eventType: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): any;
    /** Calls removeEventListener for main content html element. */
    RemoveMainContentEventListener(eventType: string, listener?: EventListenerOrEventListenerObject, useCapture?: boolean): any;
    LoadCardContent(uri: string): void;
    SetTopPanelCardStyle(cardTypeWeb: any): void;
}
