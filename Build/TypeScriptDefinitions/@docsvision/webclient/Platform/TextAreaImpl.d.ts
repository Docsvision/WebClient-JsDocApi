import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { TextArea, TextAreaParams } from "@docsvision/webclient/Platform/TextArea";
import { TextControlBaseImpl, TextControlBaseState } from "@docsvision/webclient/Platform/TextControlBaseImpl";
/** @internal */
export interface TextAreaState extends TextAreaParams, TextControlBaseState {
}
/** @internal */
export declare type TextAreaImplState = TextAreaState;
/** @internal */
export declare class TextAreaImpl extends TextControlBaseImpl<TextAreaParams, TextAreaState> {
    constructor(props: TextAreaParams, state: TextAreaState);
    setValue(value: string, redraw: boolean): void;
    protected renderInput(): JSX.Element;
    protected renderInto(props: TextAreaParams, container: HTMLElement): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<TextArea>;
    protected attachInput(inputElem: any): void;
}
