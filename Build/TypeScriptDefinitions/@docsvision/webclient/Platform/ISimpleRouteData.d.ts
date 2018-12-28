import { RequestMethods } from "@docsvision/webclient/System/IRequestInfo";
export interface ISimpleRouteData {
    routeUrl: string;
    requestDataUrl: string;
    requestDataPayload: any;
    requestMethod?: RequestMethods;
    parameters: {
        [id: string]: string;
    };
    response?: string;
    loadingError?: string | XMLHttpRequest;
}
