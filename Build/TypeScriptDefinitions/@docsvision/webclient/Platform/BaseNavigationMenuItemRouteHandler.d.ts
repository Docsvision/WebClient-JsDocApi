import { BaseNavigationMainMenuItem, BaseNavigationMainMenuItemParams } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItem";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
export declare type BaseNavigationItem = BaseNavigationMainMenuItem<BaseNavigationMainMenuItemParams, any>;
export declare class BaseNavigationMenuItemRouteHandler implements IRouteHandler<any> {
    private static Components;
    name: string;
    mountRoute?(routedata: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute?(data: any, routeType: RouteType): JQueryDeferred<{}>;
    private static unselectAllComponents;
    private static select;
    static register(control: BaseNavigationItem): void;
}
