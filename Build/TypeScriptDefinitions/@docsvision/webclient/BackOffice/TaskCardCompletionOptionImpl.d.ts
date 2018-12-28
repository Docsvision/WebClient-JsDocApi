import { TaskCardCompletionOptionParams } from "@docsvision/webclient/BackOffice/TaskCardCompletionOption";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface TaskCardCompletionOptionState extends TaskCardCompletionOptionParams, BaseControlState {
}
/** @internal */
export declare type TaskCardCompletionOptionImplState = TaskCardCompletionOptionState;
/** @internal */
export declare class TaskCardCompletionOptionImpl extends BaseControlImpl<TaskCardCompletionOptionParams, TaskCardCompletionOptionState> {
    renderControl(): JSX.Element;
}
