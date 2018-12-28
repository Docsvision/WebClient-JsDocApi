import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal Свойства для {@link LoadingIcon} */
export interface ILoadingIconProps {
    state: LoadingState;
    className?: string;
    /**
     * Css class, that adds loading icon as background
     * Default value: dv-ico icon-spin loader-animate
     */
    loadingIconClassName?: string;
    /**
     * Css class, that adds error icon as background
     * Default value: dv-ico ico-approval-decision-cancellation
     */
    errorClassName?: string;
    /** Loading icon color */
    color?: LoadincIconColor;
}
/** @internal */
export interface ILoadingIconState {
}
/** @internal */
export declare enum LoadincIconColor {
    Blue = 0,
    White = 1,
    Black = 2
}
/**
 * @internal Показывает иконку загрузки
 *
 * Пример использования:
 *
 *     constructor(props) {
 *         super(props);
 *
 *         this.state.requestHelper = new RequestHelper(() => this.forceUpdate());
 *         this.state.requestHelper.send(() => new JQueryDeferred<{}>().resolve(), () => {
 *             console.log('Результаты загружены.');
 *         });
 *     }
 *
 *     render() {
 *         return <LoadingIcon state={this.state.requestHelper.state} />
 *     }
 *
 */
export declare class LoadingIcon extends React.Component<ILoadingIconProps, ILoadingIconState> {
    constructor(props: ILoadingIconProps);
    getLoadingIconClass(): string;
    render(): JSX.Element;
}
