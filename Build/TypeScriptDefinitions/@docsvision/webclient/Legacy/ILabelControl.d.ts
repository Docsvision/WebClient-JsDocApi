import { IControl } from "@docsvision/webclient/Legacy/IControl";
/** @internal */
export interface ILabelControl extends IControl {
    Text(value?: string): string;
    HTML(value?: string): string;
}
