import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class DisclosureHeader extends Control {
    private id;
    private arrow;
    private content;
    constructor(root: HTMLElement);
    Init(): void;
    private onHeaderClick;
    private onHeaderKeyDown;
    private AddHeaderClickFunction;
    Destroy(): void;
}
