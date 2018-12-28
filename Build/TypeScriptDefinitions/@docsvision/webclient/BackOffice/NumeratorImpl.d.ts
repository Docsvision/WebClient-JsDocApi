import { INumberInfo } from "@docsvision/webclient/BackOffice/INumberInfo";
import { NumeratorParams } from "@docsvision/webclient/BackOffice/Numerator";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IBoxWithButtonsButtonInfo } from "@docsvision/webclient/Helpers/BoxWithButtons";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import React from "react";
/** @internal */
export interface NumeratorState extends NumeratorParams, InputBasedControlState<INumberInfo> {
    numeratorBinding: IBindingResult<INumberInfo>;
    bindingInfo: GenModels.BindingInfo;
    requestHelper: RequestHelper;
    currentValueGeneratedNumber: string;
    disableRequiredCheck: boolean;
}
/** @internal */
export declare type NumeratorImplState = NumeratorState;
/** @internal */
export declare class NumeratorImpl extends InputBasedControlImpl<INumberInfo, NumeratorParams, NumeratorState> {
    constructor(props: NumeratorParams, state: NumeratorState);
    generateNewNumber(saveToTheCard: boolean, prepareAction: () => JQueryDeferred<any>): JQueryDeferred<INumberInfo>;
    componentDidMount(): void;
    protected getTextValue(): string;
    protected onInputChange(event: any): void;
    validate(params: any): IValidationResult;
    clearNumber(): JQueryDeferred<any>;
    protected renderInto(props: NumeratorParams, container: HTMLElement): void;
    protected readonly editAvailable: boolean;
    protected readonly withInputMode: boolean;
    protected getCssClass(): string;
    protected onGenerateClick(): void;
    protected onClearClick(): void;
    protected onValueClick(event: any): void;
    protected getButtons(): IBoxWithButtonsButtonInfo[];
    protected renderWithText(): JSX.Element;
    protected renderInputWithPlaceholder(): React.ReactNode;
}
