import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class DepartmentTypeaheadVariant implements ITypeaheadVariant {
    data: GenModels.DepartmentModel;
    constructor(data: GenModels.DepartmentModel);
    readonly name: string;
    readonly value: string;
    readonly iconCssClass: string;
    readonly title: string;
}
