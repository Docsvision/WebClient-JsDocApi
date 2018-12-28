import { IControl } from "@docsvision/webclient/Legacy/IControl";
import { ILabelControl } from "@docsvision/webclient/Legacy/ILabelControl";
import { ITextareaControl } from "@docsvision/webclient/Legacy/ITextareaConrtol";
/** @internal */
export interface ILabelTextareaControl extends IControl {
    Label: ILabelControl;
    Textarea: ITextareaControl;
}
