import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $Router } from "@docsvision/webclient/System/$Router";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { IExistingCardRouteData } from "@docsvision/webclient/Platform/IExistingCardRouteData";
export declare class ExistingCardRouteHandler implements IRouteHandler<IExistingCardRouteData> {
    private services;
    constructor(services: $LayoutManager & $LayoutCardController & $Router);
    name: string;
    prepareRouteDataLoad?(routeData: Partial<IExistingCardRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    loadRouteData?(routeData: Partial<IExistingCardRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute?(routeData: IExistingCardRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IExistingCardRouteData, routeType: RouteType): JQueryDeferred<{}>;
}
