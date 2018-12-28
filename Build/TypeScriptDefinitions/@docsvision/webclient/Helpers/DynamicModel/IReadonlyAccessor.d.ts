/** @review Версия {@link IAccessor} с доступом только на чтение. */
export interface IReadonlyAccessor<NodeT, ValueT> {
    /**
     * Получить значение свойства для указанного объекта.
     * @param node Объект.
     */
    get(node: NodeT): ValueT;
}
