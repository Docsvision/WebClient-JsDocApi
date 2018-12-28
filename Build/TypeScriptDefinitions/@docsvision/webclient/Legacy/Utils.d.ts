import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IFileCommentsModalProps } from "@docsvision/webclient/Helpers/FileComments/FileCommentsModal";
import { IFilePreviewProps } from "@docsvision/webclient/Helpers/FilePreview/FilePreview";
import { DateTimeFormat } from "@docsvision/webclient/Legacy/DateTimeFormat";
import { BasicApiEvent } from '@docsvision/webclient/System/ApiEvent';
/**
 * Ключ для обозначения сервисов, которые должны быть переинициализированы в контексте конкретной разметки.
 *
 * Для применения необходимо передать данное значение третьим параметром в метод {@link ServiceContainer.registerService}
 */
export declare const LAYOUT_SERVICE: {
    isLayoutService: boolean;
};
/** @internal */
export declare class Helpers {
    constructor();
    static GetTarget(event: Event): HTMLElement;
    static GetDateSeparator(): string;
    static HideCaption(): void;
    static ShowCaption(): void;
    static UpdateCaption(headerText?: string, color?: string): void;
    static GetKindNameFromFullString(str: string): string;
    static GetFileExtension(fileName: string): string;
    static SetNumericControl(control: HTMLElement, callback?: Function): void;
    static InsertAfter(newElement: any, targetElement: any): void;
    static CapitalizeFirstLatter(str: string): string;
    private toogle;
    static RunScripts(element: HTMLElement): void;
    private static RunScriptsHelper;
    static LoadAndRunScript(url: string): JQueryDeferred<{}>;
    static DisplayFileSize(fileSize: number): string;
    static CheckCardModified(cardId: string, timestamp: string, callback?: Function): JQueryDeferred<any>;
    static CheckCardLocked(cardId: string, callback?: Function): JQueryDeferred<any>;
    static CheckKindCreatable(cardTypeId: string, cardKindId: string, callback: Function): void;
    /**
     * Показать предпросмотр файла.
     * @param options Список опций.
     */
    static ShowFilePreviewDialog(props: IFilePreviewProps, options?: {
        onClose?: () => void;
        onMount?: () => void;
    }): void;
    /** @deprecated Use {@link ShowFilePreviewDialog} */
    static ShowFilePreview(url: string, title: string, delCommentUrl?: string, editCommentUrl?: string): void;
    /** @deprecated Use {@link ShowFilePreviewDialog} */
    static ShowFilePreviewEx(previewContent: any, title: any, delCommentUrl?: string, editCommentUrl?: string): void;
    /**
     * Показать список комментариев файла.
     * @param options Список опций.
     * @returns Функция, вызов которой закрывает модальное окно
     */
    static ShowFileComments(props: IFileCommentsModalProps, options?: {
        onClose?: () => void;
    }): () => void;
    static ValidateForm(form: HTMLFormElement): boolean;
    static FindParentElement(element: HTMLElement, parentClassName: string): HTMLElement;
    static SupressEvents(e: Event): void;
    static FloatToCultureStr(num: number, precision?: number): string;
    static ParseFloatCultureStr(str: string): number;
    private static LegacyValidation;
    static Base64Encode(arrayBuffer: any): string;
    static Base64ArrayBuffer(arrayBuffer: any): string;
    static IsEdge(): boolean;
    static SetTooltip(element: HTMLElement): void;
    static SetTooltipFor(element: HTMLElement, text: string, extraOptions?: any): void;
    static DestroyTooltips(element: HTMLElement): void;
    static ClearTips(): void;
    static LocationReload(): void;
    static GetCurrentDeviceType(): GenModels.DeviceType;
    static GetOriginalDeviceType(): GenModels.DeviceType;
    static GetIEVersion(): {};
    static CallCancelableIf(callback: Function, ...args: any[]): JQueryDeferred<any>;
    static CallIf(callback: Function, ...args: any[]): any;
    /** @deprecated Use Promise.all */
    static WhenAll(deferreds: JQueryDeferred<any>[]): JQueryDeferred<any>;
    static guidPattern: RegExp;
    static validGuid(guid: string): RegExpMatchArray;
    static iterateAsync<T>(collection: T[], func: (item: T) => JQueryDeferred<any>): JQueryDeferred<any>;
    private static iterateAsyncNext;
    static promiseToDeferred<T>(promise: Promise<T>): JQueryDeferred<T>;
    /** @deprecated Use deferredToPromise instead */
    static deferredtoPromise<T>(def: JQueryDeferred<T>): Promise<T>;
    static deferredToPromise<T>(def: JQueryDeferred<T>): Promise<T>;
    static getHashCode(str: string): number;
}
export declare function setHtmlElementText(elem: HTMLElement, text: string): void;
export declare function getHtmlElementText(elem: HTMLElement): string;
/** @internal */
export declare class Animate {
    static SetEndCallback(htmlElement: HTMLElement, func: any): void;
}
/** @internal */
export declare class SessionStorage {
    static SupportsSessionStorage(): boolean;
    static SaveData(id: string, obj: any): boolean;
    static LoadData(id: string): any;
}
/** @internal */
export declare class ErrorHelper {
    static ThrowIfElementNotFound(htmlElement: HTMLElement): void;
    static ThrowIfElementIdNotFound(elementWithId: string): void;
    static ThrowIfNull(request: XMLHttpRequest): void;
    static RequestNotSupported(): void;
    static RequestError(errorText: string): void;
    static CertificateNotFound(errorText: string): void;
}
/** Затемнение на весь экран с отображением анимации загрузки. */
export declare class ProgressOverlay {
    private progressOverlay;
    private overlayTimeout;
    private static OverlayElementId;
    /** Таймаут показа затемнения. */
    Timeout: number;
    /** Показывает затемнение через {@link Timeout} мс., если к этому моменту не будет вызван {@link HideOverlay}. */
    ShowOverlay(): void;
    /** Скрыть затемнение. */
    HideOverlay(): void;
    private DestroyOverlay;
    private GetOrCreteateOverlay;
}
/** @internal */
export declare type RequestCustomCompleteCallback = (request: XMLHttpRequest, callerCallback?: Function) => void;
/** @internal */
export declare enum LoadingBarValues {
    Start = 1,
    OneFourth = 25,
    Half = 50,
    AfterHalf = 60,
    ThreeFourth = 75,
    Full = 100,
    None = 0
}
/** Опции создания {@link Request}. */
export interface RequestOptions {
    /** Выполнять ли запрос асинхронном режиме (по умолчанию true). */
    isAsync?: boolean;
    /** Отключить кеширование запроса (по умолчанию true). */
    noCache?: boolean;
    /** Показывать ли затемнение на весь экран (по умолчанию false). */
    isShowOverlay?: boolean;
    /** Показывать ли прогресс выполнения запроса в верхней части приложения (по умолчанию true). */
    isShowLoadingBar?: boolean;
}
/** Обертка вокруг XMLHttpRequest с отображением прогресс-бара и обработкой ошибок. */
export declare class Request {
    private static ActiveRequests;
    private static LoadingBarElementId;
    private static LoadingBarWrapperElementId;
    /** @internal */
    static ContentTypeForm: string;
    private isAsync;
    private responseType;
    private contentType;
    private dataType;
    private isShowOverlay;
    private isShowLoadingBar;
    private customErrorCallback;
    private customCriticalErrorCallback;
    private customCompleteCallback;
    private progressOverlay;
    private isForm;
    private noCache;
    /** Инициализирует объект. */
    constructor(options?: RequestOptions);
    /** Режим выполнения запроса. */
    IsAsync: boolean;
    /** Отключено ли кеширование для запроса. */
    NoCache: boolean;
    /** Тип данных, передаваемых с запросом. По умолчанию 'application/json; charset=UTF-8;'. */
    ContentType: string;
    /** Собственный обработчик ситуации, когда запрос завершился с ошибкой. */
    CustomErrorCallback: Function;
    /** Собственный обработчик ситуации, когда запрос завершился с ошибкой. */
    CustomCriticalErrorCallback: Function;
    /** Собственный обработчик успешного завершения запроса. */
    CustomCompleteCallback: RequestCustomCompleteCallback;
    /** Тип данных ответа. */
    ResponseType: XMLHttpRequestResponseType;
    /** Отображать ли затемнение экрана во время выполнения запроса. */
    IsShowOverlay: boolean;
    /** Отображать ли ход выполнения запроса в верхней части приложения. */
    IsShowLoadingBar: boolean;
    /** @internal */
    /** @internal */
    ShowLoadingBar: boolean;
    private SetLoadingBar;
    /** Ожидаемый тип возвращаемых с сервера данных. */
    DataType: string;
    /** Отправляет запрос методом POST. */
    PostData(url: string, requestData: any, callback?: Function): void;
    /** Отправляет запрос методом POST. */
    PostDataEx(url: string, requestData: any): JQueryDeferred<any>;
    /** Отправляет запрос методом POST без обработки ошибок. */
    PostDataSilent(url: string, requestData: any): JQueryDeferred<any>;
    /** Отправляет запрос методом GET. */
    GetData(url: string, requestData: any, callback?: Function): void;
    /** Отправляет запрос методом GET. */
    GetDataEx(url: string, requestData: any): JQueryDeferred<any>;
    private ProcessRequest;
    private ProcessRequestEx;
    private static ParseError;
    private static GetRequestInstance;
}
/** @internal */
export declare class TabsHelper {
    static AddTabEvents(tabElement: HTMLElement): void;
}
/**
 * Утилита для исключения дублирования запуска длительных операций.
 *
 * Для использования необходимо создать экземпляр класса, и запускать операцию
 * через его метод perform. Если на момент вызова операция будет находится в процессе выполнения
 * с предыдущего раза, то вызов будет проигнорирован.
 *
 * Данная логика может быть использована при реализации запросов к серверу при нажатии на кнопку.
 * Использование данной утилиты исключает ситуацию отправки повторного запроса при двойном нажатии
 * кнопки пользователем.
 *
 * Пример использования:
 *
 *      let once = new PerformOnce();
 *      button.addEventListener("click", () => {
 *          once.perform(() => makeServerRequest());
 *      });
 */
export declare class PerformOnce {
    performing: boolean;
    /** Выполняет операцию, если она уже не находится в процессе выполнения. */
    perform(func: () => JQueryDeferred<any> | Promise<any>): JQueryDeferred<any>;
}
/** @internal */
export declare class CardCommandButtonsHelper {
    static AddRefreshButtonEvents(selectorQuery: string): void;
    static AddEditButtonEvents(selectorQuery: string, widgetId?: string): void;
    static AddDeleteButtonEvents(selectorQuery: string, widgetId?: string): Promise<void>;
}
/** @internal */
export declare class DateTimeHelper {
    static GetLocaleFormat(locale: string): DateTimeFormat;
}
/** @internal */
export declare class EventHelper {
    static Change(element: HTMLElement): void;
    static WindowResize(): void;
}
/**
 * @deprecated Заглушка для обратной совместимости.
 * Для доступа к ресурсам используйте {@link resources}, к адресам {@link urls}, к настройкам {@link applicationSettings}.
 */
export declare class ResourcesHelper {
    /** @deprecated См. {@link ResourcesHelper} */
    static ResourcesContainerName: string;
    /** @deprecated См. {@link ResourcesHelper} */
    static GetGlobalResource(resourceName: string): string;
    /** @deprecated См. {@link ResourcesHelper} */
    static SetGlobalResource(resourceName: string, resourceValue: any): void;
    /** @deprecated См. {@link ResourcesHelper} */
    static GetResource(container: HTMLElement, resourceName: string): string;
}
/**
 * @deprecated Используйте новый синтаксис:
 *
 *     interface Props {
 *        ...
 *     }
 *
 *     const MyStyled = styled.div<IColorTextProps>`
 *        ...
 *     `;
 *
 */
export declare function withProps(): (fn: any) => any;
/** @deprecated */
export declare class ComponentBuilder<P, T = any, O = P> {
    static readonly MODIFIER_DELIMITER = "_";
    protected component: any;
    protected mainClassName: string;
    protected additionalClassNames: string;
    protected propsForClasses: {};
    constructor(component: any);
    static createWithProps<CustomInterface = {}>(): <SP, ST, SO>(component: any) => ComponentBuilder<SP & CustomInterface, ST, SO & CustomInterface>;
    setClasses(mainClassName: string, additionalClassNames?: string[] | string): ComponentBuilder<P, T, O>;
    setPropsForClasses(propsForClasses: any): this;
    protected buildClasses: (props: any) => string;
    protected attributeToClassName(attribute: string): string;
    build(): any;
}
/** @deprecated */
export declare function getEvent<T>(event: BasicApiEvent<T>): BasicApiEvent<T>;
