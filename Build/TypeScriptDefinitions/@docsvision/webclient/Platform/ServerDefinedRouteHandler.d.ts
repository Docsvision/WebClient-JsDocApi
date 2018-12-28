import { IServerDefinedRouteData } from "@docsvision/webclient/Platform/IServerDefinedRouteData";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { $UrlStore } from "@docsvision/webclient/System/$UrlStore";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $Router } from "@docsvision/webclient/System/$Router";
export declare class ServerDefinedRouteHandler implements IRouteHandler<IServerDefinedRouteData> {
    private services;
    private static NewCardRoutePartName;
    private static CardViewRoutePartName;
    private static CardEditRoutePartName;
    private static ExtendedLayoutRoutePartName;
    constructor(services: $UrlStore & $RequestManager & $Router & $LayoutManager);
    name: string;
    prepareRouteDataLoad?(routeData: Partial<IServerDefinedRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    loadRouteData?(routeData: Partial<IServerDefinedRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute?(routeData: IServerDefinedRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    private LayoutUrlCheck;
}
