import { Control } from "@docsvision/webclient/Legacy/Control";
export declare class BooleanControl extends Control {
    selectElement: HTMLSelectElement;
    constructor(root: HTMLElement, value?: boolean);
    Value(value?: boolean): string;
    Init(onComplete?: () => void): void;
    OnValueChange: Function;
}
