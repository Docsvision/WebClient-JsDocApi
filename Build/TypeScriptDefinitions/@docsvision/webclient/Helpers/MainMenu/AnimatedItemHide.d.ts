import React from "react";
/** @internal */
export interface IAnimatedItemHideProps {
    level: number;
    children?: any;
}
export interface IAnimatedItemHideState {
    hide: boolean;
    animatedHide: boolean;
    timeout: any;
}
/** @internal */
export declare class AnimatedItemHide extends React.Component<IAnimatedItemHideProps, IAnimatedItemHideState> {
    /** @internal */
    state: IAnimatedItemHideState;
    constructor(props: IAnimatedItemHideProps);
    componentWillReceiveProps(newProps: IAnimatedItemHideProps): void;
    render(): JSX.Element;
}
