import { PartnerDirectoryItemVisualiser } from "@docsvision/webclient/BackOffice/PartnerDirectoryItemVisualiser";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class PartnerTypeaheadVariant implements ITypeaheadVariant {
    item: GenModels.PartnerDirectoryItem;
    visualiser: PartnerDirectoryItemVisualiser;
    constructor(item: GenModels.PartnerDirectoryItem, visualiser: PartnerDirectoryItemVisualiser);
    readonly name: string;
    readonly value: string;
    readonly iconCssClass: string;
    readonly title: string;
}
