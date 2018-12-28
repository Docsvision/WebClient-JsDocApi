import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class SearchPanelRouteHandler implements IRouteHandler<any> {
    name: string;
    prepareRouteDataLoad(routeData: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute(data: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: any, routeType: RouteType): JQueryDeferred<{}>;
}
/** @internal Временная функция, перестраивающая панель поиска в обход стандартного механизма роутинга. Функция будет удалена в следующих релизах. */
export declare function __DangerRemountSearchPanel(): void;
