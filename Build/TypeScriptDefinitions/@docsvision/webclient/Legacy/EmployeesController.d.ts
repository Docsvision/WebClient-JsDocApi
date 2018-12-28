import { IFindEmployeeResult } from "@docsvision/webclient/Legacy/IFindEmployeeResult";
import { ServerController } from "@docsvision/webclient/System/ServerController";
/** @deprecated */
export declare class EmployeesController extends ServerController {
    /** @deprecated */
    Find(term: string, kindId: string, count?: number, unitId?: string): JQueryDeferred<IFindEmployeeResult>;
}
export declare type $EmployeesController = {
    employeesController: EmployeesController;
};
