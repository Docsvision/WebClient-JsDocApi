import { ILayoutPageRouteData } from "@docsvision/webclient/Platform/ILayoutPageRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class LayoutPageRouteHandler implements IRouteHandler<ILayoutPageRouteData> {
    name: string;
    loadRouteData(knownRouteData: Partial<ILayoutPageRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute(data: ILayoutPageRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: ILayoutPageRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
