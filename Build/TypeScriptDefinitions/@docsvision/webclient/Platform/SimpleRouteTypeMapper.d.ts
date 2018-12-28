import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { RouteParameters } from "@docsvision/webclient/System/RouteParameters";
import { ISimpleRouteData } from "@docsvision/webclient/Platform/ISimpleRouteData";
export declare class SimpleRouteTypeMapper implements IRouteTypeMapper<ISimpleRouteData> {
    private routeType;
    private requestDataUrlResolver;
    private requestPayloadResolver;
    hashPattern: string;
    constructor(hashPattern: string, routeType: string, requestDataUrlResolver: (parameters: RouteParameters) => any, requestPayloadResolver: (parameters: RouteParameters) => any);
    resolve(path: string, parameters: RouteParameters): JQueryDeferred<IRouteInfo<ISimpleRouteData>>;
    tryGetUrl(route: IRouteInfo<ISimpleRouteData>): string | undefined;
}
