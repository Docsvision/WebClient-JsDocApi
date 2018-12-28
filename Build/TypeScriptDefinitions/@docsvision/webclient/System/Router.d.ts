import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $SearchPanel } from "@docsvision/webclient/Legacy/$SearchPanel";
import { ILegacyRouter } from "@docsvision/webclient/Legacy/ILegacyRouter";
import { $EnableRouterLogging } from "@docsvision/webclient/StandardServices";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { IRouter, IRouterNavigation } from "@docsvision/webclient/System/$Router";
import { ICancelableEvent } from '@docsvision/webclient/System/ICancelableEvent';
/** Реализация роутинга в Web-клиенте. */
export declare class Router implements IRouter, ILegacyRouter, IRouterNavigation {
    private services;
    private sammy;
    private requestData;
    private searchPanel;
    private currentRouteInfo;
    private currentRouteInfoChangedEvent;
    private traceProvider;
    private routeHandlers;
    private pendingRouteTypeMappers;
    private routeTypeMappers;
    static MainContentElementId: string;
    private static MainContentElementDefaultClasses;
    private mainContentChangingListeners;
    private runHandlersUpdate;
    private runHandlersWorking;
    private internalLocationUpdate;
    private lastRouteProcessing;
    private lastSetMainContentProcessing;
    private currentRouteProcessingMapper;
    private currentUnmountingRoute;
    /**
     * Please, don't use it. Really.
     */
    private currentUrl;
    private isReplacingUrlWithoutNotification;
    static CurrentRouteStoreKey: string;
    static RouterInitialization: IBasicEvent<void>;
    constructor(services: $SearchPanel & $EnableRouterLogging);
    /** @internal */
    readonly dangerouslyUrl: string;
    /** @internal */
    addHandler<T>(routeType: RouteType, handler: IRouteHandler<T>): void;
    /** @internal */
    removeHandler<T>(routeType: RouteType, handler: IRouteHandler<T>): void;
    /** @internal */
    getHandlers<T>(routeType: RouteType): IRouteHandler<T>[];
    /** @internal */
    addRouteTypeMapper(mapper: IRouteTypeMapper<any>): void;
    /** @internal */
    getCurrentRoute<T>(): IRouteInfo<T>;
    /** @internal */
    setCurrentRoute<T>(info: IRouteInfo<T>): Promise<void>;
    /** @internal */
    readonly currentRouteInfoChanged: ICancelableEvent<IRouteInfo<any>>;
    private onCurrentRouteInfoChanged;
    private runHandlers;
    private runHandlersWith;
    private reportError;
    private shutdownCurrentRoute;
    private processRoute;
    private processRouteImpl;
    private unmountCurrentRoute;
    private getPathFromRouteMapper;
    private updateUrl;
    /**
     * Открыть страницу по указанному адресу в Web-клиенте.
     * @param route Адрес, начинающийся с символа решетки.
     */
    goTo(route: string, refresh?: boolean, callback?: Function): JQueryDeferred<void>;
    /** Возвращает текущий адрес (без домена). */
    GetLocation(): string;
    /** Возвращает полный адрес на основе значения, возвращенного {@link GetLocation}. */
    getLocationFromRoute(route: string): string;
    /** @deprecated */
    goToRoute(context: any): void;
    /** @deprecated Используйте {@link DashboardRouteHelpers.goToDashboard} */
    goToDashboard(context: any): void;
    /** Перезагружает текущий роут Web-клиента. */
    refresh(callback?: Function): JQueryDeferred<void>;
    /** @internal */
    LoadContent(url: string, requestData: any, contentElement: HTMLElement, showOverlay?: boolean, callback?: Function): void;
    /** @internal */
    LoadMainContent(url: string, requestData: any, showOverlay?: boolean, get?: boolean, callback?: (isError?: boolean) => void): void;
    /** @internal */
    LoadContnentFromRoute(cardId: any): JQueryDeferred<any>;
    /** Устанавливает основное содержимое Web-клиента. */
    SetMainContentElement(elem: HTMLElement, doneCallback?: Function, newContentCssClass?: string): JQueryDeferred<void>;
    /** Устанавливает основное содержимое Web-клиента. */
    SetMainContentHtml(html: string, doneCallback?: Function, newContentCssClass?: string): JQueryDeferred<any>;
    /** Уведомляет подписчиков об изменении основного содержимого. */
    PrepareMainContentChange(): JQueryDeferred<any>;
    /** Регистрирует подписчика на событие изменения основного содержимого. */
    AddMainContentChangingListener(listener: () => JQueryDeferred<any>): void;
    /** Отменяет регистрацию подписчика на событие изменения основного содержимого. */
    RemoveMainContentChangingListener(listener: () => JQueryDeferred<any>): void;
    /** Вызывает addEventListener для главного элемента содержимого Web-клиента. */
    AddMainContentEventListener(eventType: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    /** Вызывает removeEventListener для главного элемента содержимого Web-клиента. */
    RemoveMainContentEventListener(eventType: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    private LoadData;
    private SetContent;
    private OnMainContentChanging;
    private ClearAndGetMainContent;
    private renderMainContentLoader;
    /** Скрывает загрузчик приложения. */
    static HideMainLoader(): void;
    /** @internal */
    LoadCardContent(url: string): void;
    /** Устанавливает общий стиль Web-клиента на основе настроек типа карточки. */
    SetTopPanelCardStyle(cardTypeWeb: GenModels.CardTypeWeb): void;
    private ClearFromFolderView;
    private showNotFound;
    /**
     * Меняет URL без оповещения об этом (т.е. привязанные на адреса обработчики не сработают)
     */
    replaceUrlWithoutNotification(url: string): void;
    /** @internal */
    initialize(): void;
    private log;
}
/** Синоним {@link Router}. */
export declare type SammyHelper = Router;
/** Синоним {@link Router}. */
export declare const SammyHelper: typeof Router;
