/** Состояние отменяемого события. */
export declare enum CancelableEventState {
    /** В процессе вызова обработчиков. */
    Pending = 0,
    /** Событие одобрено. */
    Accepted = 1,
    /** Событие отменено. */
    Canceled = 2
}
