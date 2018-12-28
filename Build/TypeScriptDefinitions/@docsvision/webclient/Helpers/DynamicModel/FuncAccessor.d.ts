import { IAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IAccessor";
/**
 * @review Реализация {@link IAccessor}, осуществляющая обращение к свойству через заданные функции.
 */
export declare class FuncAccessor<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
    private getter;
    private setter;
    /**
     * @param getter Функция, возвращающая значение свойства для указанного объекта.
     * @param setter Функция, устанавливающая значение свойства для указанного объекта.
     */
    constructor(getter: (node: NodeT) => ValueT, setter: (node: NodeT, value: ValueT) => void);
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
