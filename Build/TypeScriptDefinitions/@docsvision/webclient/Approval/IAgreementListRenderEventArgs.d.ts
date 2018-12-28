import { IAgreementListTableColumn } from "@docsvision/webclient/Approval/IAgreementListTableColumn";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IAgreementListRenderEventArgs {
    model: GenModels.AgreementListModel;
    columns: IAgreementListTableColumn[];
}
