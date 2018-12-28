import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/**
 * Закрывает боковую панель главного меню при переходе на другой роут.
 */
export declare class MainMenuRouteHandler implements IRouteHandler<any> {
    name: string;
    mountRoute?(data: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: any, routeType: RouteType): JQueryDeferred<{}>;
}
