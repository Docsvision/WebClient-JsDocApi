import { IEditOperation } from "@docsvision/webclient/System/IEditOperation";
/**
 * Содержит данные и методы хранилища операций редактирования.
 */
export interface IEditOperationStore {
    /**
     * Проверяет доступность операции редактирования.
     * @param operation ИД операции редактирования / ИД встроенной операции редактирования / Наименование операции редактирования по умолчанию.
     * @returns true - операция доступна, false - операция не доступна.
     */
    available(operation: string): boolean;
    /**
     * Проверяет доступность встроенной операции редактирования.
     * @param builtInOperationId Идентификатор встроенной операции редактирования.
     * @returns true - операция доступна, false - операция не доступна.
     * @deprecated Используйте метод available(operation: string) вместо него.
     */
    availableBuiltIn(builtInOperationId: string): boolean;
    /**
     * Возвращает операцию редактирования с указанным идентификатором.
     * @param id Идентификатор операции редактирования.
     * @returns Операция редактирования.
     * @deprecated Используйте метод resolve(editOperation: string) вместо него.
     */
    get(id: string): IEditOperation;
    /**
     * Возвращает все операции редактирования, зарегистрированные в *Конструкторе состояний* для текущего вида карточки.
     * @returns Массив операций редактирования.
     */
    getAll(): IEditOperation[];
    /**
     * Возвращает операцию редактирования по значению, полученному с сервера
     * @param editOperation Строковое обозначение операции редактирования, будь то operationId, builtInOperationId или alias
     */
    resolve(editOperation: string): IEditOperation;
}
