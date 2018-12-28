import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { FavoriteEmployeesStorage } from "@docsvision/webclient/BackOffice/FavoriteEmployeesStorage";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITypeaheadSearchQuery } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchQuery";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
/** @internal */
export declare class EmployeeLoader {
    private employeeVisualizer;
    private favoritesStorage?;
    private mUnitId?;
    private mKindId?;
    services: $LayoutStaffController;
    constructor(employeeVisualizer: EmployeeVisualizer, favoritesStorage?: FavoriteEmployeesStorage, mUnitId?: string, mKindId?: string, services?: $LayoutStaffController);
    unitId: string;
    readonly kindId: string;
    findItems(query: ITypeaheadSearchQuery, skipEmployees?: string[]): JQueryDeferred<ITypeaheadSearchResult>;
    protected convertFindResultItem(data: GenModels.EmployeeModel): GenModels.EmployeeDataModel;
}
