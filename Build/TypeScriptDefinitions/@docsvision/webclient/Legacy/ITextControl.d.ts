import { IControl } from "@docsvision/webclient/Legacy/IControl";
/** @internal */
export interface ITextControl extends IControl {
    /** Fired when the text is changed. */
    OnTextChange: Function;
    Text(value?: string): string;
}
