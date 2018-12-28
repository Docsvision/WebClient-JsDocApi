import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { RequestMethods } from "@docsvision/webclient/System/IRequestInfo";
import { IRequestInfo } from "@docsvision/webclient/System/RequestMethods";
/** @internal */
export declare class ServerController {
    protected services: $RequestManager;
    constructor(services?: $RequestManager);
    /** @notest */
    protected getServices(): $RequestManager;
    protected postAction(args: IArguments): JQueryDeferred<any>;
    protected getAction(args: IArguments): JQueryDeferred<any>;
    protected prepareRequest(args: IArguments, method: RequestMethods): IRequestInfo;
    protected sendRequest(requestInfo: IRequestInfo): JQueryDeferred<any>;
    private findMetadataObject;
    private isMetadataObject;
}
export declare function controllerFactory<T>(ctor: {
    new (services: $RequestManager): T;
}): (services: any) => T;
