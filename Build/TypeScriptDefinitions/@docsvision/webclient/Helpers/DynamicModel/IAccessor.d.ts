import { IReadonlyAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IReadonlyAccessor";
/**
 * @review Представляет инструмент, при помощи которого можно обращаться к некоторому свойству объекта.
 *
 * Акссессоры удобны для реализации универсальных вспомогательных классов, таких как {@link RecursiveVisitor}.
 * То есть, в тех случаях, когда необходимо обращаться к свойству объекта,
 * но имя этого свойства не известно и зависит от контекста использования.
 *
 * @param NodeT Тип объектов, к которым планируется обращаться.
 * @param ValueT Тип значения свойства, к которому планируется обращаться.
 *
 * См. конкретные реализации: {@link FieldNameAccessor}, {@link FuncAccessor}, {@link MapMetaStore}.
 */
export interface IAccessor<NodeT, ValueT> extends IReadonlyAccessor<NodeT, ValueT> {
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
