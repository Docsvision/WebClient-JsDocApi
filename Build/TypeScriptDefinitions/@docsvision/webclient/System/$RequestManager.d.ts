import { RequestOptions } from '@docsvision/webclient/Legacy/Utils';
import { ICommonResponse } from "@docsvision/webclient/System/ICommonResponse";
import { INotificationModel } from "@docsvision/webclient/System/INotificationModel";
import { RequestMethods } from "@docsvision/webclient/System/IRequestInfo";
export interface IRequestManager {
    get<TResponse>(url: string, options?: RequestOptions): JQueryDeferred<TResponse>;
    post<TResponse>(url: string, data: any, options?: RequestOptions): JQueryDeferred<TResponse>;
    rawRequest(url: string, data: any, method: RequestMethods, routeChangeProtection?: boolean): JQueryDeferred<XMLHttpRequest>;
    readonly busy: boolean;
    processRawResponse<T>(rawResponse: any, showSuccessNotification?: boolean): ICommonResponse<T>;
    processResponse<T>(response: ICommonResponse<T>, showSuccessNotification?: boolean): void;
    showNotification(notification: INotificationModel | any, showSuccess?: boolean): any;
    processErrorResponse(httpRequest: XMLHttpRequest): any;
    processRequestComplete(httpRequest: any, successCallback: any, routeTimestamp?: number): boolean;
}
export declare type $RequestManager = {
    requestManager: IRequestManager;
};
