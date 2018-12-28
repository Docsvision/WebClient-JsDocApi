import { ICustomHtmlPageRouteData } from "@docsvision/webclient/Platform/ICustomHtmlPageRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class CustomHtmlPageRouteHandler implements IRouteHandler<ICustomHtmlPageRouteData> {
    name: string;
    mountRoute(data: ICustomHtmlPageRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: ICustomHtmlPageRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
