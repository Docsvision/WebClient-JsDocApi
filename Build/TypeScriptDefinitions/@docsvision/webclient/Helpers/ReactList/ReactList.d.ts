import React from "react";
/**
 * @internal Тип ReactList.
 */
export declare const ReactListVirtualization: {
    /**
     * Не будет кэшироваться размеры элементов, также не будут удаляться элементы, расположенные выше ViewPort.
     * Этот тип достаточен для большинства случаев, когда единственным требованием является последовательный рендеринг при прокрутке.
     */
    simple: string;
    /**
     * Этот тип предпочтительнее, при гарантии, что все ваши элементы будут одинакового размера.
     * Преимущество в том, что таким образом размер всего списка можно вычислить заранее,
     * и для работы будет достаточно отрисовать только те элементы, которые видны во ViewPort.
     * Размер первого элемента будет использоваться для определения размера каждого другого элемента.
     * Для этого типа также поддерживается несколько элементов в строке.
     */
    uniform: string;
    /**
     * Этот тип предпочтительнее, если размеры элементов в списке различаются.
     * По возможности поставьте свойство itemSizeGetter так, чтобы вся длина списка могла быть вычислена заранее.
     * В противном случае размеры элементов будут кэшироваться по мере их рендеринга,
     * чтобы элементы, находящиеся над ViewPort, могли быть удалены при прокрутке списка.
     */
    variable: string;
};
/**
 * @internal Свойства для {@link ReactList}
 */
export interface IReactListProps {
    /** Ось, по которой скроллится ReactList */
    axis?: string;
    /** Начальный индекс элемента */
    initialIndex?: number;
    /** Функция, возвращающая содержимое для отрисовки элемента с указанным индексом. */
    itemRenderer?: (index: number, key: number | string) => any;
    /**
     * Функция, которая получает индекс элемента и известные кэшированные размеры элементов и возвращает
     * примерный размер (высоту для вертикальных списков или ширину для горизонтальных) элемента в переданном индексе.
     * Используется только с типом variable, когда свойство itemSizeGetter не определено.
     * Используйте это свойство, если вы не знаете точный размер элемента перед его отрисовкой, но хотите, чтобы он всё-равно занимал место в списке.
     */
    itemSizeEstimator?: (index: number, cache: any) => any;
    /** Возвращает размер элемента с указанным индексом. Используется только с типом variable. */
    itemSizeGetter?: (index: number) => any;
    /**
     * Возвращает обёртку для отрисованных элементов. По умолчанию это обычный <div>.
     *
     * Примечание: вы должны установить ref={ref} на компоненте, который содержит элементы items,
     * чтобы можно было выполнить правильные вычисления размера элемента.
     */
    itemsRenderer?: (items: any, ref: any) => any;
    /** Количество элементов в списке. */
    length: number;
    /** Минимальное количество элементов в списке. Может использоваться для рендеринга элементов по умолчанию при рендеринге HTML на сервере. */
    minSize: number;
    /**
     * Количество элементов в группе для новой отрисовки.
     * Не используется с типом uniform, так как оптимальное количество элементов рассчитывается автоматически.
     */
    pageSize?: number;
    /**
     * Функция, которая возвращает DOM-узел или Window. Возвращённое значение будет рассматриваться как контейнер прокрутки для списка.
     * Может использоваться для тех случаев, когда в контейнере для скроллинга элементов по умолчанию отсутствует свойство overflow, включающее скроллинг;
     */
    scrollParentGetter?: any;
    /** Количество пикселей для буфера в начале и конце списка */
    threshold?: number;
    /** Тип ReactList (см. {@link ReactListVirtualization}). */
    type: string;
    /**
     * Установите в true, если размеры элементов никогда не изменятся (в результате изменения адаптивного макета и т.п.).
     * Используется только с типом uniform.
     * Данная оптимизация приведет к тому, что размер самого первого элемента будет всегда использоваться для всех остальных элементов.
     */
    useStaticSize?: boolean;
    /**
     * Установите в true, чтобы использовать CSS-свойство translate3d для позиционирования в списке.
     * Это может улучшить производительность на мобильных устройствах, но поддерживается меньшим количеством браузеров.
     */
    useTranslate3d?: boolean;
}
/**
 * Удобный список для отображения большого количества элементов.
 *
 * Ссылка на официальный репозиторий {@link https://github.com/orgsync/react-list}.
 */
export declare class ReactList extends React.Component<IReactListProps, any> {
    /** @internal */
    static displayName: string;
    /** @internal */
    cache: any;
    /** @internal */
    prevPrevState: any;
    /** @internal */
    unstable: boolean;
    /** @internal */
    updateCounter: number;
    /** @internal */
    updateCounterTimeoutId: any;
    /** @internal */
    items: any;
    /** @internal */
    scrollParent: any;
    /**
     * Значение свойств по умолчанию.
     */
    static defaultProps: Partial<IReactListProps>;
    constructor(props: any);
    /** @internal */
    componentWillReceiveProps(next: any): void;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    maybeSetState(b: any, cb: any): any;
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    getOffset(el: any): any;
    /** @internal */
    getScrollParent(): any;
    /** @internal */
    getScroll(): number;
    /** @internal */
    setScroll(offset: any): void;
    /** @internal */
    getViewportSize(): any;
    /** @internal */
    getScrollSize(): any;
    /** @internal */
    hasDeterminateSize(): true | ((index: number) => any);
    /** @internal */
    getStartAndEnd(threshold?: number): {
        start: number;
        end: any;
    };
    /** @internal */
    getItemSizeAndItemsPerRow(): {
        itemSize: any;
        itemsPerRow: any;
    } | {
        itemSize?: undefined;
        itemsPerRow?: undefined;
    };
    /** @internal */
    updateFrame(cb: any): any;
    /** @internal */
    updateScrollParent(): void;
    /** @internal */
    updateSimpleFrame(cb: any): any;
    /** @internal */
    updateVariableFrame(cb: any): void;
    /** @internal */
    updateUniformFrame(cb: any): any;
    /** @internal */
    getSpaceBefore(index: any, cache?: {}): any;
    /** @internal */
    cacheSizes(): void;
    /** @internal */
    getSizeOf(index: any): any;
    /** @internal */
    constrain(from: any, size: any, itemsPerRow: any, { length, minSize, type }: {
        length: any;
        minSize: any;
        type: any;
    }): {
        from: any;
        size: any;
    };
    /** @internal */
    scrollTo(index: any): void;
    /** @internal */
    scrollAround(index: any): void;
    /** @internal */
    getVisibleRange(): any[];
    /** @internal */
    renderItems(): any;
    /** @internal */
    render(): any;
}
