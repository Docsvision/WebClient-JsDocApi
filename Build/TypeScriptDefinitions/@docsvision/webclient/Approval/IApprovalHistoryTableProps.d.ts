import { IApprovingReportRefreshedEventArgs } from "@docsvision/webclient/Approval/IApprovingReportRefreshedEventArgs";
import { IApprovingReportRefreshingEventArgs } from "@docsvision/webclient/Approval/IApprovingReportRefreshingEventArgs";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { CancelableEvent } from "@docsvision/webclient/System/CancelableEvent";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export interface IApprovalHistoryTableProps {
    data: GenModels.ApprovalHistoryViewModel;
    approvingReportRefreshing: CancelableEvent<IApprovingReportRefreshingEventArgs>;
    approvingReportRefreshed: SimpleEvent<IApprovingReportRefreshedEventArgs>;
    refreshRequested: Function;
    inline?: boolean;
    services: $FileController;
}
