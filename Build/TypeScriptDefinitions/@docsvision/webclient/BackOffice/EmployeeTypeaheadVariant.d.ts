import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
/** @internal */
export declare class EmployeeTypeaheadVariant implements ITypeaheadVariant {
    data: GenModels.EmployeeDataModel;
    mTitle: string;
    mFavored: boolean;
    constructor(data: GenModels.EmployeeDataModel, title: string, favored?: boolean);
    readonly name: string;
    readonly value: string;
    readonly iconCssClass: string;
    readonly title: string;
    readonly favored: boolean;
}
