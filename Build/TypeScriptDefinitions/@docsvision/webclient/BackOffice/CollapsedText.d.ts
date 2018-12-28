import React from "react";
/** @internal */
export interface ICollapsedTextProps {
    text: string;
    maxLength: number;
}
/** @internal */
export interface ICollapsedTextState {
    expanded: boolean;
}
/** @internal */
export declare class CollapsedText extends React.Component<ICollapsedTextProps, ICollapsedTextState> {
    constructor(props: ICollapsedTextProps);
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: ICollapsedTextProps, nextContext: any): void;
    onClick(): void;
    private isShowFullText;
    render(): JSX.Element;
}
