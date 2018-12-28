import { TaskReportPanel } from "@docsvision/webclient/Legacy/TaskCardView";
import { BaseRazorControl, BaseRazorControlParams } from "@docsvision/webclient/Legacy/BaseRazorControl";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
/** @internal */
export interface TaskReportPanelRazorControlState extends TaskReportPanelRazorControlParams, BaseControlState {
    reportPanel: TaskReportPanel;
}
export declare class TaskReportPanelRazorControlParams extends BaseRazorControlParams {
    services?: $Layout;
}
/** @internal */
export declare class TaskReportPanelRazorControl extends BaseRazorControl<TaskReportPanelRazorControlParams, TaskReportPanelRazorControlState> {
    protected createParams(): BaseRazorControlParams;
    mountRazorContent(razorContainer: HTMLElement): void;
}
