import React from "react";
/** Свойства для  {@link Popover} */
export interface IInlineDropdownPopoverProps {
    /** Дополнительный класс */
    className?: string;
    innerElementRef?: (elem: HTMLElement) => void;
    topPlacementShift?: string;
}
/** @internal */
export interface IInlineDropdownPopoverState {
    locatedTop?: boolean;
    updateCount: number;
}
/**
 * Компонент, который обеспечивает абсолютное позиционирование всплывающего выпадающего списка снизу так, что левый край выровнен по левому краю родителя.
 * Если снизу оказывается недостаточно места, то панель показывается сверху.
 */
export declare class InlineDropdownPopover extends React.Component<IInlineDropdownPopoverProps, IInlineDropdownPopoverState> {
    private static mPopoversContainer;
    private static getPopoversContainer;
    private root;
    /** @internal */
    state: IInlineDropdownPopoverState;
    constructor(props: IInlineDropdownPopoverProps);
    componentWillReceiveProps(): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribeGlobalEvents;
    private unsubscribeGlobalEvents;
    private onPageScroll;
    private onWindowResize;
    /**
     * Перессчитать позицию всплывающего окна.
     */
    updatePositions(): void;
    attachRoot: (elem: HTMLElement) => void;
    static Wrapper: import("styled-components").StyledComponent<"div", any, Partial<IInlineDropdownPopoverState & IInlineDropdownPopoverProps>, never>;
    /** @internal */
    render(): JSX.Element;
}
