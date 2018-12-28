import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IComboBoxVariant } from "@docsvision/webclient/Platform/IComboBoxVariant";
/** @internal */
export declare class TemplateComboVariant implements IComboBoxVariant {
    template: GenModels.AgreementTemplateModel;
    constructor(val: GenModels.AgreementTemplateModel);
    readonly displayName: any;
    readonly uniqueId: string;
}
