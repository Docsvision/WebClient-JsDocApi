import { CustomButtonParams } from "@docsvision/webclient/Platform/CustomButton";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
/** @internal */
export interface CustomButtonState extends CustomButtonParams, BaseControlState {
    loading: boolean;
}
/** @internal */
export declare type CustomButtonImplState = CustomButtonState;
/** @internal */
export declare class CustomButtonImpl extends BaseControlImpl<CustomButtonParams, CustomButtonState> {
    constructor(props: CustomButtonParams, state: CustomButtonState);
    /** @notest */
    /** @notest */
    loading: boolean;
    performClick(event?: React.MouseEvent<any>): void;
    protected getCssClass(): string;
    /** Переопределяет базовый метод, отменяя его логику (для данного контрола она отлична от базовой версии). */
    protected handleClick(event: React.MouseEvent<any>): void;
    renderControl(): JSX.Element;
}
