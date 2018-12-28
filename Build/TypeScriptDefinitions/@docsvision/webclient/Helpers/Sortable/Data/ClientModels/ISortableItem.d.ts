/**
 * @internal Интерфейс для элемента списка перетаскиваемых элементов для {@link Sortable}
 */
export interface ISortableItem<T> {
    /** Уникальный идентификатор среди соседних элементов */
    id: string | number;
    /** Данные элемента, который будет использоваться для рендеринга */
    data: T;
    /** Компонент, который нужно отрендерить */
    render: (data: T) => React.ReactNode;
}
