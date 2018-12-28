import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class RadioListControl extends Control {
    radioControls: NodeListOf<Element>;
    constructor(root: HTMLElement, selectedValue?: string);
    Value(value?: string): string;
    private SetValue;
    private GetValue;
}
