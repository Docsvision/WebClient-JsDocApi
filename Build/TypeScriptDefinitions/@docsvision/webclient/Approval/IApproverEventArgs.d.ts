import { StageModelWithChange } from "@docsvision/webclient/Approval/StageModelWithChange";
import { IEmployeeItemData } from "@docsvision/webclient/Legacy/IEmployeeItemData";
export interface IApproverEventArgs {
    employeeInfo: IEmployeeItemData;
    stage: StageModelWithChange;
}
