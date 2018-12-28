import { TaskDecision } from "@docsvision/webclient/Legacy/TaskCardView";
import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export interface IDecisionControlOptions {
    buttonsCount?: number;
}
/** @internal */
export declare class DecisionControl extends Control {
    private buttons;
    private moreButton;
    private moreButtonInnerText;
    private sidebar;
    private taskDecision;
    constructor(root: HTMLElement, options?: IDecisionControlOptions);
    private Initialize;
    protected InitDecision(): void;
    protected TaskDecision: TaskDecision;
    private AddMoreButton;
}
