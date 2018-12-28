/**
 * @internal Предоставляет логику для отправки поисковых запросов после того как пользователь закончил ввод в текстовом поле.
 */
export declare class QuickSearchLogic {
    private debouncer;
    private searchIndex;
    constructor(searchCallback: Function, searchIndex?: number, searchTimeout?: number);
    /**
     * Обработка содержимого текстового поля и установка таймера для отправки поискового запроса с задержкой в случае успеха.
     * @param newText Содержимое текстового поля.
     */
    processInput(newText: string): void;
    /**
     * Очистка таймера для отправки поискового запроса
     */
    clear(): void;
}
