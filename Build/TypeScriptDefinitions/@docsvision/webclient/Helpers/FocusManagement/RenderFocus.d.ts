import React from "react";
export interface IRenderFocusProps {
    focused: boolean;
    /** CSS-селектор элемента среди props.children, на котором нужно делать фокус. Если не задан, то ищется первый фокусируемый элемент */
    selectorToFocus?: string;
}
/** После отрисовки передает фокус первому дочернему элементу, который может принять фокус. */
export declare class RenderFocus extends React.Component<IRenderFocusProps, {}> {
    focusTarget: HTMLElement;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IRenderFocusProps): void;
    render(): React.ReactNode;
}
