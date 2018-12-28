import { IControl } from "@docsvision/webclient/Legacy/IControl";
/** @internal */
export interface ITextareaControl extends IControl {
    /** Fired when the text is changed. */
    OnTextChange: Function;
    OnKeyPress: Function;
    Text(value?: string): string;
}
