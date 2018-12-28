import { CheckBoxParams } from "@docsvision/webclient/Platform/CheckBox";
import { ImageModel } from "@docsvision/webclient/Platform/ImageModel";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface CheckBoxState extends CheckBoxParams, InputBasedControlState<boolean> {
    binding: IBindingResult<boolean>;
    saveHelper: RequestHelper;
    yesText: string;
    noText: string;
}
/** @internal */
export declare type CheckBoxImplState = CheckBoxState;
/** @internal */
export declare class CheckBoxImpl extends InputBasedControlImpl<boolean, CheckBoxParams, CheckBoxState> {
    constructor(props: CheckBoxParams, state: CheckBoxState);
    protected getTextValue(): string;
    protected getImageValue(): string;
    protected getImageSrcString(imageItem: ImageModel): string;
    protected renderInto(props: CheckBoxParams, container: HTMLElement): void;
    protected onInputChange(event: any): void;
    protected editInPlaceModeRender(): JSX.Element;
    protected renderWithText(): JSX.Element;
    protected renderInput(): React.ReactNode;
}
