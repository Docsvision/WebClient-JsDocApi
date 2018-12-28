import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
/**
 * Содержит публичные свойства элемента управления {@link TaskDelegationInfo}.
 */
export declare class TaskDelegationInfoParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Данные контрола */
    delegationInfo: GenModels.TaskDelegationInfoModel;
}
/** @internal */
export interface TaskDelegationInfoState extends TaskDelegationInfoParams, BaseControlState {
    employeeVisualizer: EmployeeVisualizer;
}
/**
 * Класс элемента управления, отображающего информацию о делегировании задания.
 */
export declare class TaskDelegationInfo extends BaseControl<TaskDelegationInfoParams, TaskDelegationInfoState> {
    constructor(props: any);
    /** @internal */
    protected createParams(): TaskDelegationInfoParams;
    private binding;
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    renderControl(): JSX.Element;
}
