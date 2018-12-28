/** Статус длительной операции. */
export declare enum LoadingStatus {
    /** Операция не была начата. */
    None = 1,
    /** Операция находится в процессе выполнения. */
    Loading = 2,
    /** Операция завершилась успешно. */
    Done = 3,
    /** Операция завершилась с ошибкой. */
    Error = 4
}
/** Состояние длительной операции. */
export declare class LoadingState {
    /** Экземпляр {@link LoadingState} со статусом {@link LoadingStatus.Loading}. */
    static Loading: LoadingState;
    /** Экземпляр {@link LoadingState} со статусом {@link LoadingStatus.None}. */
    static None: LoadingState;
    constructor(status?: LoadingStatus, message?: string);
    /** Операция выполняется. */
    readonly loading: boolean;
    /** Операция завершилась с ошибкой. */
    readonly error: boolean;
    /** Операция завершилась успешно. */
    readonly done: boolean;
    /** Операция не была начата. */
    readonly none: boolean;
    /** Обновить значение статуса. */
    update(status: LoadingStatus, message?: string): void;
    /** Статус выполнения операции. */
    status: LoadingStatus;
    /** Сообщение об ошибке или предупреждение. */
    message: string;
}
