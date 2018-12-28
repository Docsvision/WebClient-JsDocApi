import { ILegacyRouter } from "@docsvision/webclient/Legacy/ILegacyRouter";
import { ICancelableEvent } from '@docsvision/webclient/System/ICancelableEvent';
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { RouteType } from "@docsvision/webclient/System/RouteType";
export interface IRouter {
    /**
     * Please, don't use it. Really.
     */
    readonly dangerouslyUrl: string;
    addHandler<T>(routeType: RouteType, handler: IRouteHandler<T>): any;
    removeHandler<T>(routeType: RouteType, handler: IRouteHandler<T>): any;
    getHandlers<T>(routeType: RouteType): IRouteHandler<T>[];
    addRouteTypeMapper(mapper: IRouteTypeMapper<any>): any;
    getCurrentRoute<T>(): IRouteInfo<T>;
    setCurrentRoute<T>(info: IRouteInfo<T>): any;
    readonly currentRouteInfoChanged: ICancelableEvent<IRouteInfo<any>>;
    /**
     * Меняет URL без оповещения об этом (т.е. привязанные на адреса обработчики не сработают)
     * @param url URL
     */
    replaceUrlWithoutNotification(url: string): any;
    initialize(): void;
}
export interface IRouterNavigation {
    refresh(callback?: Function): JQueryDeferred<void>;
    goTo(route: string, refresh?: boolean, callback?: Function): JQueryDeferred<void>;
}
export declare type $Router = {
    router: IRouter & ILegacyRouter & IRouterNavigation;
};
export declare type $RouterNavigation = {
    routerNavigation: IRouterNavigation;
};
