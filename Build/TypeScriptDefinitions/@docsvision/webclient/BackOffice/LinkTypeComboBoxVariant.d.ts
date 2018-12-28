import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IComboBoxVariant } from "@docsvision/webclient/Platform/IComboBoxVariant";
/** @internal */
export declare class LinkTypeComboBoxVariant implements IComboBoxVariant {
    data: GenModels.LinkTypeModel;
    constructor(val: GenModels.LinkTypeModel);
    readonly displayName: any;
    readonly uniqueId: string;
}
