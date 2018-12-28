/** Интерфейс аргумента отменяемого события. */
export interface ICancelableEventArgs<T> {
    /** Отменить действие. */
    cancel(): void;
    /** Разрешить выполнение действия. Вызывается автоматически если {@link wait} не был вызван. */
    accept(): void;
    /** Задержать выполнение действия до явного вызова {@link accept}. */
    wait(): void;
    /** Данные события. */
    data: T | undefined;
    /** Если значение true, то действие будет выполнено после вызова всех обработчиков. */
    autoAcceptEnabled: boolean;
}
