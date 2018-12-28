import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { TextBox, TextBoxParams } from "@docsvision/webclient/Platform/TextBox";
import { TextControlBaseImpl, TextControlBaseState } from "@docsvision/webclient/Platform/TextControlBaseImpl";
/** @internal */
export interface TextBoxState extends TextBoxParams, TextControlBaseState {
}
/** @internal */
export declare type TextBoxImplState = TextBoxState;
/** @internal */
export declare class TextBoxImpl extends TextControlBaseImpl<TextBoxParams, TextBoxState> {
    constructor(props: TextBoxParams, state: TextBoxState);
    protected renderInto(props: TextBoxParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<TextBox>;
}
