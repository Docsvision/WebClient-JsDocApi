import { BaseRazorControl, BaseRazorControlParams, BaseRazorControlState } from "@docsvision/webclient/Legacy/BaseRazorControl";
import { TaskGroupCardCreatePerformers } from "@docsvision/webclient/Legacy/TaskGroupCardCreatePerformers";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/** @internal */
export declare class GroupTaskCardPerformersPanelParams extends BaseRazorControlParams {
}
/** @internal */
export interface GroupTaskCardPerformersPanelState extends BaseRazorControlState {
    performersLogic: TaskGroupCardCreatePerformers;
}
/** @internal */
export declare class GroupTaskCardPerformersPanelRazorControl extends BaseRazorControl<GroupTaskCardPerformersPanelParams, GroupTaskCardPerformersPanelState> {
    protected createParams(): GroupTaskCardPerformersPanelParams;
    setTaskGroupInterval(startDate: Date, endDate: Date, duration: number): void;
    mountRazorContent(razorContainer: HTMLElement): void;
    protected getBindings(): IBindingResult<any>[];
}
