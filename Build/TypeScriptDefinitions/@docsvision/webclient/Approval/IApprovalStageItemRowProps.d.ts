import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
/** @internal */
export interface IApprovalStageItemRowProps {
    stageItem: GenModels.ApprovalHistoryStageItemModel;
    ownerCardId: string;
    services: $FileController & $LayoutFileController;
}
