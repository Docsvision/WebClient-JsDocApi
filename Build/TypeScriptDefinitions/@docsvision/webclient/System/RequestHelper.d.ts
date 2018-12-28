import { LoadingState, LoadingStatus } from "@docsvision/webclient/System/LodingState";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
/**
 * Класс для выполнения длительных операций, предотвращающий повторный запуск одной и той же операции.
 * Для каждой операции должен быть создан отдельный экземпляр класса.
 */
export declare class RequestHelper {
    private mLoadingState;
    private mLastQuery;
    private mStateChanged;
    private mLoaderDelay;
    private mPreventConcurentQueries;
    constructor(onStateChanged?: (state?: LoadingState) => void, loaderDelay?: number, preventConcurent?: boolean);
    /**
     * Вызывает sendFunc и обновляет {@link state} по мере выполнения запроса. Если предыдущий запрос не был завершен, вызов будет проигнорирован.
     * @param sendFunc Функция, выполняющая длительную операцию.
     * @param done Функция, которая будет вызвана в случае успешного завершения операции.
     * @param fail Функция, которая будет вызвана в случае ошибки.
     */
    send<T>(sendFunc: () => JQueryDeferred<T>, done?: (data: T) => void, fail?: (err: any) => void): LoadingState;
    /**
     * Перегрузка {@link send}, на основе Promise.
     */
    sendEx<T>(sendFunc: () => Promise<T>, done?: (data: T) => void, fail?: (err: any) => void): LoadingState;
    /** Событие, возникающее при изменении статуса выполнения операции. */
    readonly stateChanged: IBasicEvent<LoadingState>;
    /** Текущее состояние операции. Может быть передано в {@link LoadingIcon} как параметр. */
    readonly state: LoadingState;
    /** Текущее состояние операции (равносильно state.status). */
    readonly status: LoadingStatus;
    /** Операция находится в процессе выполнения. */
    readonly loading: boolean;
    /** Операция завершилась с ошибкой. */
    readonly error: boolean;
    /** Операция завершилась успешно. */
    readonly done: boolean;
    /** @internal */
    readonly defered: JQueryDeferred<any>;
}
