/** Результат работы обработчика роута. */
export declare enum RouteHandleResults {
    /** Обработчик ожидает новых данных, которые должны быть поставлены другими обработчиками. */
    MissingRequiredData = 0,
    /** Обработчик завершил работу. */
    Done = 1
}
/** Возвращаемый тип обработчика роута. */
export declare type RouteHandleResult = RouteHandleResults | void;
