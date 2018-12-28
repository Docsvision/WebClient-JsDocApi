import { LayoutIconButtonParams } from "@docsvision/webclient/Platform/LayoutIconButton";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
/** @internal */
export interface LayoutIconButtonState extends LayoutIconButtonParams, BaseControlState {
    loading: boolean;
}
/** @internal */
export declare type LayoutIconButtonImplState = LayoutIconButtonState;
/** @internal */
export declare class LayoutIconButtonImpl extends BaseControlImpl<LayoutIconButtonParams, LayoutIconButtonState> {
    constructor(props: LayoutIconButtonParams, state: LayoutIconButtonState);
    performClick(event?: React.MouseEvent<any>): void;
    /** Переопределяет базовый метод, отменяя его логику (для данного контрола она отлична от базовой версии). */
    protected handleClick(event: React.MouseEvent<any>): void;
    renderControl(): JSX.Element;
}
