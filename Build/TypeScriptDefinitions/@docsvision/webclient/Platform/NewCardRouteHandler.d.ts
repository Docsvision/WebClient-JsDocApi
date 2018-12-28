import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $Router } from "@docsvision/webclient/System/$Router";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { INewCardRouteData } from "@docsvision/webclient/Platform/INewCardRouteData";
export declare class NewCardRouteHandler implements IRouteHandler<INewCardRouteData> {
    private services;
    constructor(services: $LayoutManager & $LayoutCardController & $Router);
    name: string;
    loadRouteData?(routeData: Partial<INewCardRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute?(routeData: INewCardRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
}
