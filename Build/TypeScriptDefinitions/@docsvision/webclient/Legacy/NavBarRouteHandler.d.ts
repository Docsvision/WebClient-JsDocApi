import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class NavBarRouteHandler implements IRouteHandler<any> {
    name: string;
    mountRoute?(data: any, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
}
