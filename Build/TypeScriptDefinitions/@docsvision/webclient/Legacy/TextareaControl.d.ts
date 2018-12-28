import { Control } from "@docsvision/webclient/Legacy/Control";
import { ITextareaControl } from "@docsvision/webclient/Legacy/ITextareaConrtol";
/** @internal */
export declare class TextareaControl extends Control implements ITextareaControl {
    textInput: HTMLInputElement;
    constructor(root: HTMLElement, value?: string);
    Text(value?: string): string;
    Init(onComplete?: () => void): void;
    OnTextChange: Function;
    OnKeyPress: Function;
}
