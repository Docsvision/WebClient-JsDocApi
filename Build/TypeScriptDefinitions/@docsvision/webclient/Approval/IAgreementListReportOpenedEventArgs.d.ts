import { AgreementListContent } from "@docsvision/webclient/Approval/AgreementListContent";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IAgreementListReportOpenedEventArgs {
    model: GenModels.AgreementListModel;
    contentControl: AgreementListContent;
}
