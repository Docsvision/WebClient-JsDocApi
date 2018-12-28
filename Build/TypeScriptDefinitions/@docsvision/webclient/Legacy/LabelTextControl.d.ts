import { Control } from "@docsvision/webclient/Legacy/Control";
import { ILabelControl } from "@docsvision/webclient/Legacy/ILabelControl";
import { ILabelTextControl } from "@docsvision/webclient/Legacy/ILabelTextControl";
import { ITextControl } from "@docsvision/webclient/Legacy/ITextControl";
/** @internal */
export declare class LabelTextControl extends Control implements ILabelTextControl {
    Label: ILabelControl;
    Text: ITextControl;
    constructor(root: HTMLElement, labelText?: string, textValue?: string);
    Init(onComplete?: () => void): void;
}
