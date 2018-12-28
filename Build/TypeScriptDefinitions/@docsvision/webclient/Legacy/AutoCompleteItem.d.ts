import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class AutoCompleteItem {
    constructor(label: string, value: string, isFav: boolean, data: GenModels.EmployeeDataModel);
    label: string;
    value: string;
    isFavorite: boolean;
    data: GenModels.EmployeeDataModel;
}
