import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IApprovingPathEventArgs {
    /** @deprecated */
    agreementTemplateId: string;
    /** @deprecated */
    agreementTemplateDisplayName: string;
    /** Информация о маршруте согласования. */
    template: GenModels.AgreementTemplateModel;
}
