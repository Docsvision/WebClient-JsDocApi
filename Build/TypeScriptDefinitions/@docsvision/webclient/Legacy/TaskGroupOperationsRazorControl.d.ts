import { GenModels } from '@docsvision/webclient/Generated/DocsVision.WebClient.Models';
import { BaseRazorControl, BaseRazorControlParams, BaseRazorControlState } from "@docsvision/webclient/Legacy/BaseRazorControl";
import { $Layout } from '@docsvision/webclient/System/$Layout';
import { $EditOperationStore, $LayoutInfo } from '@docsvision/webclient/System/LayoutServices';
export declare class Params extends BaseRazorControlParams {
    /** Список операций. */
    operations: GenModels.OperationDataModel[];
    services: $LayoutInfo & $Layout & $EditOperationStore;
}
export interface State extends Params, BaseRazorControlState {
}
/** @internal */
export declare class TaskGroupOperationsRazorControl extends BaseRazorControl<Params, State> {
    private operationBuitins;
    protected razorContainer: HTMLElement;
    protected createParams(): Params;
    private bindingStateButtons;
    mountRazorContent(razorContainer: HTMLElement): void;
    private hideAndRenameOperations;
    /** @internal */
    private processEditOperations;
    /** @internal */
    private saveCardIfNeeded;
}
