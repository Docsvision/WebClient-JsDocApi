import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { IServerDefinedRouteData } from "@docsvision/webclient/Platform/IServerDefinedRouteData";
import { NavigationRoute } from "@docsvision/webclient/Platform/NavigationRoute";
export declare class ServerDefinedRouteTypeMapper implements IRouteTypeMapper<IServerDefinedRouteData> {
    private routeInfo;
    readonly hashPattern: string;
    constructor(routeInfo: NavigationRoute);
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<IServerDefinedRouteData>>;
    tryGetUrl(route: IRouteInfo<IServerDefinedRouteData>): string | undefined;
}
