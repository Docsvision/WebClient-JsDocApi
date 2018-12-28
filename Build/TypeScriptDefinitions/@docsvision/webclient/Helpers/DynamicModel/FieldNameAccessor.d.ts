import { IAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IAccessor";
import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
/**
 * @review Реализация {@link IAccessor} через обращение к свойству объекта по имени. Имя задается в конструкторе, при создании акссессора.
 */
export declare class FieldNameAccessor<NodeT, ValueT> implements IAccessor<NodeT, ValueT> {
    /**
     * Название свойства.
     */
    fieldName: string;
    /**
     * @param key Имя свойства. Может быть задано строкой (например, `myProperty`) или выржанием вида `() => obj.myProperty`.
     */
    constructor(key: FieldSpec<NodeT, ValueT>);
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
