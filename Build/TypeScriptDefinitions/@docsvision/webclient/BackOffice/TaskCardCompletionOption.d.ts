import { TaskCardCompletionOptionImpl, TaskCardCompletionOptionState } from "@docsvision/webclient/BackOffice/TaskCardCompletionOptionImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства элемента управления [Отображение варианта завершения]{@link TaskCardCompletionOption}.
 */
export declare class TaskCardCompletionOptionParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Текст метки. Метка - текст отображаемый рядом (слева или вверху) с элементом управления. */
    labelText?: string;
    /** Значение элемента управления. */
    value?: GenModels.CompletionOption;
    services?: $EditOperationStore;
}
/**
 * Класс элемента управления Отображение варианта завершения.
 */
export declare class TaskCardCompletionOption extends BaseControl<TaskCardCompletionOptionParams, TaskCardCompletionOptionState> {
    /** @internal */
    protected createParams(): TaskCardCompletionOptionParams;
    private completionOptionBinding;
    private readonly myControlImpl;
    /** @internal */
    protected createImpl(): TaskCardCompletionOptionImpl;
}
