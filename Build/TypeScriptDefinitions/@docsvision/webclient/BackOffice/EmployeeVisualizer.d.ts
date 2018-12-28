import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class EmployeeVisualizer {
    tipMode: GenModels.PartnerTipModeItems;
    viewMode: GenModels.EmployeeViewMode;
    constructor(tipMode: GenModels.PartnerTipModeItems, viewMode?: GenModels.EmployeeViewMode);
    getTooltip(employeeData: GenModels.EmployeeDataModel | GenModels.EmployeeModel): string;
    getDisplayName(employee: GenModels.EmployeeDataModel | GenModels.EmployeeModel): string;
}
