/**
 * @internal Реализация Debouncer (пример использования см. в {@link QuickSearchLogic}).
 * Позволяет откладывать вызов функции на определённое время.
 */
export declare class Debouncer {
    /** Хранит идентификатор таймера */
    private timerHandle;
    /** Сохранённая функция для последующего отложенного вызова */
    private callback;
    /** Таймаут в мс */
    private timeout;
    constructor(callback: Function, timeout?: number);
    /**
     * Старт нового вызова хранимой функции после определённого промежутка времени.
     *
     * Переданные аргументы, будут использованы при вызове хранимой функции.
     */
    trigger(...params: any[]): void;
    /**
     * Очистка таймера для вызова хранимой функции.
     */
    clear(): void;
}
