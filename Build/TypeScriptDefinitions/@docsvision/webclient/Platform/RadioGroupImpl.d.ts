import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { RadioGroup, RadioGroupParams } from "@docsvision/webclient/Platform/RadioGroup";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import React from "react";
/** @internal */
export interface RadioGroupState extends RadioGroupParams, InputBasedControlState<string> {
    binding: IBindingResult<string>;
}
/** @internal */
export declare type RadioGroupImplState = RadioGroupState;
/** @internal */
export declare class RadioGroupImpl extends InputBasedControlImpl<string, RadioGroupParams, RadioGroupState> {
    constructor(props: any, state: RadioGroupState);
    protected getTextValue(): string;
    protected renderInto(props: RadioGroupParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<RadioGroup>;
    protected onElementChange(element: GenModels.BindingMetadata, ev: React.FormEvent<any>): void;
    protected renderPlaceholder(): JSX.Element;
    protected renderLabel(element: GenModels.BindingMetadata): JSX.Element;
    protected getColumns(): Array<Array<GenModels.BindingMetadata>>;
    protected renderInput(): React.ReactNode;
}
