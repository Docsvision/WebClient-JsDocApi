import { ISortableItem } from "@docsvision/webclient/Helpers/Sortable/Data/ClientModels/ISortableItem";
import React from "react";
/** @internal Свойства для {@link Sortable} */
export interface ISortableProps {
    /** дочерние элементы {@link SortableItem}, которые необходимо перемещать */
    items: ISortableItem<any>[];
    /** Вызывается при изменении порядка дочерних элементов */
    onReorder: (newOrder: string[], sortedItems: ISortableItem<any>[]) => void;
    /** Порядок следования элементов в виде упорядоченного массива их идентификаторов (идентификаторы элементов, отсортированные в нужном порядке) */
    order: string[];
    /** Ось сортировки {@link http://api.jqueryui.com/sortable/#option-axis} */
    axis?: 'x' | 'y';
    /** Указывает, какой блок выступает границами сортировки {@link http://api.jqueryui.com/sortable/#option-containment} */
    containment?: HTMLElement | JQuery | 'parent' | 'document' | 'window' | string;
    /** Стиль курсора во время изменения порядка элементов {@link http://api.jqueryui.com/sortable/#option-cursor} */
    cursor?: string;
    /** Стиль курсора во время изменения порядка элементов {@link http://api.jqueryui.com/sortable/#option-disabled} */
    disabled?: boolean;
    /** Должен ли хелпер иметь размер {@link http://api.jqueryui.com/sortable/#option-forceHelperSize} */
    forceHelperSize?: boolean;
    /** Должен ли плейсхолдер иметь размер {@link http://api.jqueryui.com/sortable/#option-forcePlaceholderSize} */
    forcePlaceholderSize?: boolean;
    /**
     * Указывает селектор внутри дочернего элемента, за который можно будет его таскать (по умолчанию таскается весь дочерний элемент)
     * {@link http://api.jqueryui.com/sortable/#option-handle}
     */
    handle?: string;
    /** Прозрачность перетаскиваемого элемента {@link http://api.jqueryui.com/sortable/#option-opacity} */
    opacity?: number;
    /** Если true, то страница скроллится, когда перетаскиваемый элемент на её краю {@link http://api.jqueryui.com/sortable/#option-scroll} */
    scroll?: boolean;
    /**
     * Как далеко должна быть мышка от края (в пикселях), чтобы при перетаскивании страница скролилась бы (см. scroll)
     * {@link http://api.jqueryui.com/sortable/#option-scrollSensitivity}
     */
    scrollSensitivity?: number;
    /** Скорость скролла окна при перетаскивании (см. scroll) {@link http://api.jqueryui.com/sortable/#option-scrollSpeed} */
    scrollSpeed?: number;
    /**
     * Указывает режим, который регулирует, передвинулся ли перетаскиваемый элемент за другой элемент или нет
     * {@link http://api.jqueryui.com/sortable/#option-tolerance}
     */
    tolerance?: 'intersect' | 'pointer';
    /** ZIndex перетаскиваемого элемента {@link http://api.jqueryui.com/sortable/#option-zIndex} */
    zIndex?: number;
}
/**
 * @review
 * @internal Помогает с сортировкой дочерних элементов, путём их перетаскивания.
 *
 * Пример использования:
 *
 *     interface IMyItem {
 *         id: string;
 *         value: string;
 *     }
 *
 *     ...
 *
 *     constructor() {
 *         this.state.myItems = [
 *             {id: '1', value: 'Первый элемент'},
 *             {id: '2', value: 'Второй элемент'}
 *         ];
 *         this.state.myOrder = undefined;
 *     }
 *
 *     render() {
 *         return <Sortable order={this.state.myOrder}
 *             onReorder={(newOrder: string[], sortedItems: ISortableItem<IMyValue>[]) => {
 *                 this.state.myOrder = newOrder;
 *                 this.forceUpdate();
 *             }} items={this.state.myItems.map(item => ({
 *                 id: item.id,
 *                 data: item,
 *                 render: (data) => <div>{data.value}</div>
 *             }))} />
 *     }
 *
 */
export declare class Sortable extends React.Component<ISortableProps, undefined> {
    /** Контейнер для элементов. */
    el: HTMLElement;
    /** Была ли отменена сортировка. */
    protected wasCancelled: boolean;
    /** Идентификатор элемента для JQuery-sortable */
    static readonly ITEM_ID = "data-sortable-id";
    /** Значение по умолчанию для свойства {@link ISortableProps.axis} */
    static readonly DEFAULT_AXIS = "y";
    /** Значение по умолчанию для свойства {@link ISortableProps.containment} */
    static readonly DEFAULT_CONTAINMENT = "parent";
    /** Значение по умолчанию для свойства {@link ISortableProps.cursor} */
    static readonly DEFAULT_CURSOR = "auto";
    /** Значение по умолчанию для свойства {@link ISortableProps.forceHelperSize} */
    static readonly DEFAULT_FORCE_HELPER_SIZE = false;
    /** Значение по умолчанию для свойства {@link ISortableProps.forcePlaceholderSize} */
    static readonly DEFAULT_FORCE_PLACEHOLDER_SIZE = false;
    /** Значение по умолчанию для свойства {@link ISortableProps.handle} */
    static readonly DEFAULT_HANDLE = false;
    /** Значение по умолчанию для свойства {@link ISortableProps.opacity} */
    static readonly DEFAULT_OPACITY = 1;
    /** Значение по умолчанию для свойства {@link ISortableProps.scroll} */
    static readonly DEFAULT_SCROLL = true;
    /** Значение по умолчанию для свойства {@link ISortableProps.scrollSensitivity} */
    static readonly DEFAULT_SCROLL_SENSITIVITY = 20;
    /** Значение по умолчанию для свойства {@link ISortableProps.scrollSpeed} */
    static readonly DEFAULT_SCROLL_SPEED = 20;
    /** Значение по умолчанию для свойства {@link ISortableProps.tolerance} */
    static readonly DEFAULT_TOLERANCE = "pointer";
    /** Значение по умолчанию для свойства {@link ISortableProps.zIndex} */
    static readonly DEFAULT_ZINDEX = 1000;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: ISortableProps): void;
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    componentWillUpdate(nextProps: ISortableProps): void;
    /** @internal */
    componentDidUpdate(): void;
    /**
     * Эквивалентны ли списки элементов SortableItem
     * @param items1 Первый список
     * @param items2 Второй список
     * @returns Равны или нет
     */
    protected isItemsEqual(items1: ISortableItem<any>[], items2: ISortableItem<any>[]): boolean;
    /**
     * Заставляет пересчитать размер this.props.containment
     */
    protected updateContainmentSize(): void;
    /**
     * Получить опции для плагина
     * @param props Свойства компонента
     */
    protected getSortablePluginOptions(props: ISortableProps): {
        axis: "y" | "x";
        containment: string | HTMLElement | JQuery<HTMLElement>;
        cursor: string;
        disabled: boolean;
        forceHelperSize: boolean;
        forcePlaceholderSize: boolean;
        handle: string | boolean;
        opacity: number;
        scroll: boolean;
        scrollSensitivity: number;
        scrollSpeed: number;
        tolerance: "intersect" | "pointer";
        zIndex: number;
    };
    /**
     * Сортирует элементы по порядку
     * @param items Элементы
     * @param order Идентификаторы элементов, отсортированные в нужном порядке
     */
    protected sortItems(items: ISortableItem<any>[], order?: string[]): ISortableItem<any>[];
    /**
     * Возвращает отсортированных потомков
     */
    protected getChildren(): JSX.Element[];
    /** @internal */
    render(): JSX.Element;
}
