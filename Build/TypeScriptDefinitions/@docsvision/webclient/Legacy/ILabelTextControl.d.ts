import { IControl } from "@docsvision/webclient/Legacy/IControl";
import { ILabelControl } from "@docsvision/webclient/Legacy/ILabelControl";
import { ITextControl } from "@docsvision/webclient/Legacy/ITextControl";
/** @internal */
export interface ILabelTextControl extends IControl {
    Label: ILabelControl;
    Text: ITextControl;
}
