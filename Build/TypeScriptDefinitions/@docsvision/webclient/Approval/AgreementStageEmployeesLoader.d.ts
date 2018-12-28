import { $LayoutStaffController, GenControllers } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RequestOptions } from "@docsvision/webclient/Legacy/Utils";
/** @internal */
export declare class AgreementStageEmployeesLoader extends GenControllers.LayoutStaffController {
    private employeesToFilter;
    protected loaderServices: $LayoutStaffController;
    constructor(employeesToFilter: string[], services: $LayoutStaffController);
    findEmployees(request: GenModels.FindEmployeesRequest, options?: RequestOptions): JQueryDeferred<GenModels.FindEmployeesResponse>;
}
