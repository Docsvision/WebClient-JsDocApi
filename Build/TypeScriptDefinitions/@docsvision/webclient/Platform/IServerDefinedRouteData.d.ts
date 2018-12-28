import { NavigationRoute } from "@docsvision/webclient/Platform/NavigationRoute";
export interface IServerDefinedRouteData {
    serverDefinedRouteInfo?: NavigationRoute;
    parameters?: {
        [id: string]: string;
    };
    path?: string;
    resolvedUrl?: string;
    invalidUrlError?: boolean;
    response?: any;
    success?: boolean;
}
