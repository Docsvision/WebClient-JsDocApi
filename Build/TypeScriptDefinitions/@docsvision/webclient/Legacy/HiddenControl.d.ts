import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class HiddenControl extends Control {
    textInput: HTMLInputElement;
    constructor(root: HTMLElement, value?: string);
    Text(value?: string): string;
    Init(onComplete?: () => void): void;
}
