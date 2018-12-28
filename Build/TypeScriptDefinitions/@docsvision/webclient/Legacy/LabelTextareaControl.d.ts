import { Control } from "@docsvision/webclient/Legacy/Control";
import { ILabelControl } from "@docsvision/webclient/Legacy/ILabelControl";
import { ILabelTextareaControl } from "@docsvision/webclient/Legacy/ILabelTextareaControl";
import { ITextareaControl } from "@docsvision/webclient/Legacy/ITextareaConrtol";
/** @internal */
export declare class LabelTextareaControl extends Control implements ILabelTextareaControl {
    Label: ILabelControl;
    Textarea: ITextareaControl;
    private r;
    constructor(root: HTMLElement, labelText?: string, textValue?: string);
    Init(onComplete?: () => void): void;
}
