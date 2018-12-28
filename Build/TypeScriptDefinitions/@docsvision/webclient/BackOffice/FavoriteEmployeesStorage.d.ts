import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/** @internal */
export declare class FavoriteEmployeesStorage {
    private storageName;
    private services;
    constructor(storageName: string, services: $LocalStorage);
    getFavorites(query: ITypeaheadSearchQuery): GenModels.EmployeeDataModel[];
    favoriteEmployees: GenModels.EmployeeDataModel[];
    addToFavorite(item: GenModels.EmployeeDataModel): void;
    private arrayUnique;
}
