import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseRazorControl, BaseRazorControlParams, BaseRazorControlState } from "@docsvision/webclient/Legacy/BaseRazorControl";
import { $Layout } from '@docsvision/webclient/System/$Layout';
import { $EditOperationStore, $LayoutInfo } from '@docsvision/webclient/System/LayoutServices';
import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { ICardStateChangingEventArgs } from "@docsvision/webclient/System/ICardStateChangingEventArgs";
/** @internal */
export declare class TaskCardOperationButtonsRazorControlParams extends BaseRazorControlParams {
    standardCssClass?: string;
    /** Определяет расположение кнопок - в строку (true) или в столбик (false). */
    horizontalLayout: boolean;
    /** Список операций. */
    operations: GenModels.OperationDataModel[];
    cardStateChanged?: BasicApiEvent<ICardStateChangingEventArgs>;
    services: $Layout & $LayoutInfo & $EditOperationStore;
}
/** @internal */
export interface TaskCardOperationButtonsRazorControlState extends TaskCardOperationButtonsRazorControlParams, BaseRazorControlState {
}
/** @internal */
export declare class TaskCardOperationButtonsRazorControl extends BaseRazorControl<TaskCardOperationButtonsRazorControlParams, TaskCardOperationButtonsRazorControlState> {
    protected razorContainer: HTMLElement;
    private operationBuitins;
    constructor(props: any);
    protected createParams(): TaskCardOperationButtonsRazorControlParams;
    disableOperations(operations: GenModels.TaskOperationKind[]): void;
    private bindingStateButtons;
    mountRazorContent(razorContainer: HTMLElement): void;
    private hideAndRenameOperations;
    /** @internal */
    private triggerCardStateChanging;
    /** @internal */
    private processEditOperations;
    /** @internal */
    renderControl(): JSX.Element;
}
