import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class PartnerDirectoryItemVisualiser {
    employeeVisualiser: EmployeeVisualizer;
    constructor(employeeVisualiser: EmployeeVisualizer);
    getDisplayName(item: GenModels.PartnerDirectoryItem): string;
    getTooltip(item: GenModels.PartnerDirectoryItem): string;
    getIconClassName(item: GenModels.PartnerDirectoryItem): string;
}
