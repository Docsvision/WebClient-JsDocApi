import { Control } from "@docsvision/webclient/Legacy/Control";
import { ITextControl } from "@docsvision/webclient/Legacy/ITextControl";
/** @internal */
export declare class TextControl extends Control implements ITextControl {
    textInput: HTMLInputElement;
    constructor(root: HTMLElement, value?: string);
    Text(value?: string): string;
    Init(onComplete?: () => void): void;
    OnTextChange: Function;
}
