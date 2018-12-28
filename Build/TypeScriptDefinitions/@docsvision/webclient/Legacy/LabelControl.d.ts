import { Control } from "@docsvision/webclient/Legacy/Control";
import { ILabelControl } from "@docsvision/webclient/Legacy/ILabelControl";
/** @internal */
export declare class LabelControl extends Control implements ILabelControl {
    constructor(root: HTMLElement, value?: string);
    Text(value?: string): string;
    HTML(value?: string): string;
}
