import { StageModelWithChange } from "@docsvision/webclient/Approval/StageModelWithChange";
import { IApproverDeletionEventArgs } from "@docsvision/webclient/Approval/IApproverDeletionEventArgs";
import { IApproverEventArgs } from "@docsvision/webclient/Approval/IApproverEventArgs";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/** @internal */
export declare class AgreementStageProps {
    stage: StageModelWithChange;
    approverViewType: GenModels.ApproverViewType;
    className?: string;
    editMode?: boolean;
    getButtonName?: (operationKind: GenModels.AgreementManagementOperations) => string;
    canIterruptCurrent?: boolean;
    onInterruptClick?: Function;
    services: $LayoutStaffController & $EditOperationStore & $LayoutInfo & $LocalStorage;
    /** Событие возникает при добавлении нового согласующего. */
    approverAdding: CancelableApiEvent<IApproverEventArgs>;
    /** Событие возникает при удалении согласующего. */
    approverDeleting: CancelableApiEvent<IApproverDeletionEventArgs>;
    /** Событие возникает после добавления нового согласующего. */
    approverAdded: BasicApiEvent<IApproverEventArgs>;
    /** Событие возникает после удаления согласующего. */
    approverDeleted: BasicApiEvent<IApproverDeletionEventArgs>;
}
