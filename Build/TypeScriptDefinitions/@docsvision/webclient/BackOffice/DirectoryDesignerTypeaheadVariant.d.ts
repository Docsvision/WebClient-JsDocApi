import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class DirectoryDesignerTypeaheadVariant implements ITypeaheadVariant {
    data: GenModels.DirectoryDesignerRowModel;
    constructor(data: GenModels.DirectoryDesignerRowModel);
    readonly name: string;
    readonly value: string;
    readonly iconCssClass: string;
    readonly title: string;
}
