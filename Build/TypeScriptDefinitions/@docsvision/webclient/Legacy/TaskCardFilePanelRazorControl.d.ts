import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { BaseRazorControl, BaseRazorControlParams, BaseRazorControlState } from "@docsvision/webclient/Legacy/BaseRazorControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export declare class TaskCardFilePanelParams extends BaseRazorControlParams {
    services?: $LayoutCardController & $Layout;
}
/** @internal */
export interface TaskCardFilePanelState extends TaskCardFilePanelParams, BaseRazorControlState {
    documents: string[];
    requestHelper: RequestHelper;
}
/** @internal */
export declare class TaskCardFilePanelRazorControl extends BaseRazorControl<TaskCardFilePanelParams, TaskCardFilePanelState> {
    constructor(props: TaskCardFilePanelParams);
    loadFilesAsync(): Promise<void>;
    protected createParams(): TaskCardFilePanelParams;
    init(): void;
    mountRazorContent(razorContainer: HTMLElement): void;
    protected getBindings(): IBindingResult<any>[];
    getDisclosureHeader(): string;
    renderControl(): JSX.Element;
}
