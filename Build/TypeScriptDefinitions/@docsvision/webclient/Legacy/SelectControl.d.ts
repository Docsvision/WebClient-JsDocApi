import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class SelectControl extends Control {
    selectElement: HTMLSelectElement;
    constructor(root: HTMLElement, value?: string);
    Value(value?: string): string;
    Init(onComplete?: () => void): void;
    OnValueChange: Function;
}
