import { RequestOptions } from "@docsvision/webclient/Legacy/Utils";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { IRequestManager } from "@docsvision/webclient/System/$RequestManager";
import { ICommonResponse } from "@docsvision/webclient/System/ICommonResponse";
import { INotificationModel } from "@docsvision/webclient/System/INotificationModel";
import { RequestMethods } from "@docsvision/webclient/System/IRequestInfo";
/**
 * Класс для выполнения запросов к серверу.
 * Осуществляет стандартный механизм обработки ошибок, показа прогресса выполнения запроса и обновления timestamp карточки.
 */
export declare class RequestManager implements IRequestManager {
    private services;
    private lastQuery;
    constructor(services: $Layout);
    /**
     *  Выполняет GET запрос по указанному URL.
     *
     * Ожидается, что сервер должен вернуть {@link CommonResponse} модель.
     *
     * Пример использования:
     *
     *    async function load() {
     *         try {
     *             let data = await requestManager.get(url);
     *             this.loadLinksModel(data);
     *         }
     *             catch(err) {
     *             this.setState({ loadingError: true });
     *         }
     *    }
     */
    get<TResponse>(url: string, options?: RequestOptions): JQueryDeferred<TResponse>;
    /**
     * Отправляет POST запрос по указанному адресу.
     * Аналогичен {@link RequestManager.get}.
     */
    post<TResponse>(url: string, data: string, options?: RequestOptions): JQueryDeferred<TResponse>;
    /**
     * Отправляет запрос и представляет доступ к объекту XMLHttpRequest для чтения ответа.
     *
     * Осуществляет базовую обработку ошибок при помощи {@link processRequestComplete}.
     *
     * При необходимости, можно использовать {@link processRawResponse} передав responseText как параметр для выполнения стандартной логики обработки.
     */
    rawRequest(url: string, data: any, method: RequestMethods, routeChangeProtection?: boolean): JQueryDeferred<XMLHttpRequest>;
    /** В настоящий момент выполняется некоторый запрос. */
    readonly busy: boolean;
    /** Распознает {@link ICommonResponse} модель и вызывает and {@link RequestManager.processResponse}. */
    processRawResponse<T>(rawResponse: any, showSuccessNotification?: boolean): ICommonResponse<T>;
    /**
     * Обрабатывает ответ сервера и обновляет значение timestamp карточки в текущей разметке.
     */
    processResponse<T>(response: ICommonResponse<T>, showSuccessNotification?: boolean): void;
    /** @internal */
    showNotification(notification: INotificationModel, showSuccess?: boolean): any;
    /** Логика обработки запроса, завершившегося с ошибкой. */
    processErrorResponse(httpRequest: XMLHttpRequest): void;
    /**
     * Логика обработки ответа сервера.
     * @param routeTimestamp - значение сервиса {@link App.RouteTimestamp}
     * для осуществления защиты от смены роута (после смены роута ответ игнорируется).
     */
    processRequestComplete(httpRequest: any, successCallback: any, routeTimestamp?: number): boolean;
    /**
     * Основной метод, выполняющий отправку запросов.
     */
    protected makeRequest<TResponse>(url: string, data: any, method: RequestMethods, routeChangeProtection?: boolean, options?: RequestOptions): JQueryDeferred<TResponse>;
}
export declare var requestManager: RequestManager;
export declare function setupRequestManager(manager: RequestManager): void;
