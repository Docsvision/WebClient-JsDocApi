import { RequestOptions } from "@docsvision/webclient/Legacy/Utils";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
/** @internal */
export declare enum HttpMethods {
    Get = 0,
    Post = 1
}
/** @internal */
export declare class BaseController {
    protected services: $RequestManager;
    constructor(services?: $RequestManager);
    protected basePostRequest(url: string, data: any, options?: RequestOptions): JQueryDeferred<any>;
    protected baseGetRequest(url: string, options?: RequestOptions): JQueryDeferred<any>;
    protected doRequest({ controller, action, isApi, method, data, options }: {
        controller: string;
        action: string;
        isApi: boolean;
        method: HttpMethods;
        data?: any;
        options?: RequestOptions;
    }): JQueryDeferred<any>;
    protected getUrl({ controller, action, isApi, method, data }: {
        controller: string;
        action: string;
        isApi: boolean;
        method: HttpMethods;
        data: any;
    }): string;
}
