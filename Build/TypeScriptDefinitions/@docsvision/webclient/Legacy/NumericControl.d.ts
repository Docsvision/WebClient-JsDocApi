import { Control } from "@docsvision/webclient/Legacy/Control";
export declare class NumericControl extends Control {
    textInput: HTMLInputElement;
    constructor(root: HTMLElement, value?: string);
    Text(value?: string): string;
    Init(onComplete?: () => void): void;
    OnTextChange: Function;
    SetNumericControl(control: HTMLElement, callback?: Function): void;
}
