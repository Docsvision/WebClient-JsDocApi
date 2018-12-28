import { IAgreementParams } from "@docsvision/webclient/Legacy/IAgreementParams";
import { IEmployeeItemData } from "@docsvision/webclient/Legacy/IEmployeeItemData";
/** @internal */
export interface IAgreementSidebarCallbacks {
    approvingPathChanging: (newAgreementTemplateId: string, newAgreementTemplateDisplayName: string) => JQueryDeferred<any>;
    approverAdding: (selectingEmployeeData: IEmployeeItemData) => JQueryDeferred<any>;
    approverDeleting: (deletingEmployeeId: string) => JQueryDeferred<any>;
    approvingStartCancelling: () => JQueryDeferred<any>;
    approvingStarting: (params: IAgreementParams) => JQueryDeferred<any>;
    approvingPanelOpening: () => JQueryDeferred<any>;
    approvingPathChanged: (agreementTemplateId: string, agreementTemplateDisplayName: string) => void;
    approverAdded: (addedEmployeeId: IEmployeeItemData) => void;
    approverDeleted: (deletedEmployeeId: string) => void;
    approvingStartCancelled: () => void;
    approvingPanelOpened: () => void;
}
