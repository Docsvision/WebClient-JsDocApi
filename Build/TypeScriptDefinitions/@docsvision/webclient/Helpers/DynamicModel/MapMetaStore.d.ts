import { IAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IAccessor";
/**
 * @review Реализация {@link IAccessor}, которая хранит значение свойства во внурреннем объекте по строковому ключу.
 * Значение ключа получается через специальную функцию, передаваемую в конструкторе.
 */
export declare class MapMetaStore<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
    getId: (node: NodeT) => string;
    private store;
    /**
     * @param getId Функция, возвращающая уникальный ключ для указанного объекта.
     */
    constructor(getId: (node: NodeT) => string);
    /**
     * Получить значение свойства для указанного объекта.
     * @param node Объект.
     */
    get(node: NodeT): ValueT;
    /**
     * Установить значение свойства для указанного объекта.
     * @param node Объект.
     * @param value Значение.
     */
    set(node: NodeT, value: ValueT): void;
}
