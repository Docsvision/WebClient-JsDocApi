import { NumberParams } from "@docsvision/webclient/Platform/Number";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import React from "react";
/** @internal */
export interface NumberState extends NumberParams, InputBasedControlState<number> {
    binding: IBindingResult<number>;
}
/** @internal */
export declare type NumberImplState = NumberState;
/** @internal */
export declare class NumberImpl extends InputBasedControlImpl<number, NumberParams, NumberState> {
    protected static readonly INFINITY_FRACTION_DIGITS = -1;
    constructor(props: NumberParams, state: NumberState);
    protected trimFractionDigits(value: number): number;
    protected numberToString(value: number, useGrouping: boolean): string;
    protected prepareValueForSettingToInput(value: number): string;
    protected getTextValue(): string;
    protected renderInto(props: NumberParams, container: HTMLElement): void;
    protected onInputChange(event: React.ChangeEvent<any>): void;
    protected setInputValue(value: string): void;
    setValue(value: number | string, redraw: boolean): void;
    protected attachInput(elem: HTMLInputElement): void;
    protected onInputBlur(event: React.FocusEvent<any>): void;
    protected parseStringValue: (value: string, trim: boolean) => number;
    protected processInputValue(): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected renderInput(): React.ReactNode;
}
