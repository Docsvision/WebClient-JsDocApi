import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class FolderAsWebPageRouteHandler implements IRouteHandler<IFolderRouteData> {
    name: string;
    mountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
