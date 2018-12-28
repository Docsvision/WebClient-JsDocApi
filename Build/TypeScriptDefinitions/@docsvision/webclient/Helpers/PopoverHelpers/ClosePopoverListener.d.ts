import React from "react";
/** @internal Свойства для {@link ClosePopoverListener} */
export interface IClosePopoverListenerProps {
    /** Дополнительный класс */
    className?: string;
    /** Используется при закрытии по клику мышкой снаружи, разрешает клики внутри переданного контейнера (по умолчанию - корень этого компонента) */
    boundaryTarget?: HTMLElement | string;
    /** При закрытии выпадающего списка */
    onClose?: () => void;
}
/**
 * @internal Панель, которая отслеживает события клика вне себя и нажатия клавиши Esc.
 */
export declare class ClosePopoverListener extends React.PureComponent<IClosePopoverListenerProps> {
    el: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Закрытие выпадающего меню при клике снаружи
     */
    protected onDocumentClick: (event: MouseEvent) => void;
    protected onDocumentKeyDown: (e: any) => void;
    render(): JSX.Element;
}
