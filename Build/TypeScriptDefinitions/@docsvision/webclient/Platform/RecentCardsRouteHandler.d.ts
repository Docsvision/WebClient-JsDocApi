import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IRecentCardsRouteData } from "@docsvision/webclient/Platform/IRecentCardsRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class RecentCardsRouteHandler implements IRouteHandler<IRecentCardsRouteData> {
    name: string;
    protected gridModelLoader: (requestData: any, isMobile: boolean) => JQueryDeferred<GenModels.GridViewModel>;
    loadRouteData(knownRouteData: Partial<IRecentCardsRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute(data: IRecentCardsRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IRecentCardsRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
