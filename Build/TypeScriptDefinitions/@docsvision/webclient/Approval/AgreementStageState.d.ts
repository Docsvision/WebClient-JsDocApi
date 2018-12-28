import { StageModelWithChange } from "@docsvision/webclient/Approval/StageModelWithChange";
import { ReconcileDurationType } from "@docsvision/webclient/Approval/ReconcileDurationType";
import { Employee } from "@docsvision/webclient/BackOffice/Employee";
/** @internal */
export declare class AgreementStageState {
    stageExpanded: boolean;
    approversOrder: string[];
    approverSelect: Employee;
    durationType: ReconcileDurationType;
    stage: StageModelWithChange;
}
