import { TextControlBaseParams } from "@docsvision/webclient/Platform/TextControlBase";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/** @internal */
export interface TextControlBaseState extends TextControlBaseParams, InputBasedControlState<string> {
    binding: IBindingResult<string>;
}
export declare type TextControlBaseImplState = TextControlBaseState;
export declare abstract class TextControlBaseImpl<PropsT extends TextControlBaseParams, StateT extends TextControlBaseState> extends InputBasedControlImpl<string, PropsT, StateT> {
    constructor(props: PropsT, state: StateT);
    protected abstract renderInto(props: TextControlBaseParams, container: HTMLElement): void;
    protected onInputChange(event: any): void;
    /** @internal */
    protected binding: IBindingResult<string>;
    protected getTextValue(): string;
    protected getCssClass(): string;
}
