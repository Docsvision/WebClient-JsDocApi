import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { $Router } from "@docsvision/webclient/System/$Router";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { ISimpleRouteData } from "@docsvision/webclient/Platform/ISimpleRouteData";
export declare class SimpleRouteHandler implements IRouteHandler<ISimpleRouteData> {
    private services;
    private customMount;
    constructor(services: $RequestManager & $Router, customMount: (data: ISimpleRouteData) => JQueryDeferred<any>);
    name: string;
    loadRouteData?(routeData: Partial<ISimpleRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute?(routeData: ISimpleRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
}
