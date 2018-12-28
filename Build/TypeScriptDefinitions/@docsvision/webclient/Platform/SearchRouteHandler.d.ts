import { ISearchRouteData } from "@docsvision/webclient/Platform/ISearchRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class SearchRouteHandler implements IRouteHandler<ISearchRouteData> {
    name: string;
    prepareRouteDataLoad(routeData: Partial<ISearchRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    loadRouteData(routeData: Partial<ISearchRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute(data: ISearchRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: ISearchRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
