import React from "react";
/** @internal */
export interface ISimpleItemViewContentProps {
    className?: string;
    /** Is disabled */
    disabled?: boolean;
    tabIndex?: number;
    /** Current element's id */
    id?: string;
    /** Focused element's id */
    focusedId?: string;
    /** Get wrapper of el (e.g. to find siblings) */
    getNodeEl?: (el: HTMLElement) => HTMLElement;
    /** Finds el in wrapper */
    findElInNode?: (node: HTMLElement) => HTMLElement;
    /** On move to component children */
    onMoveForward?: () => void;
    onSelectSibling?: (mode: 'prev' | 'next') => void;
    onSelect?: () => void;
    onClick?: (ev: React.MouseEvent<any>) => void;
    primaryAction: "moveForward" | "select";
}
/** @internal */
export declare class SimpleItemViewContent extends React.Component<ISimpleItemViewContentProps, undefined> {
    protected el: HTMLElement;
    protected getNodeEl: () => HTMLElement;
    protected findElInNode: (node: HTMLElement) => HTMLElement;
    protected onKeyDown: (ev: any) => void;
    protected onClick: (ev: any) => void;
    protected onDoubleClick: (ev: any) => void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ISimpleItemViewContentProps): void;
    render(): JSX.Element;
}
