import { ITaskCreatingEventArgs } from "@docsvision/webclient/BackOffice/ITaskCreatingEventArgs";
import { TasksImpl, TasksState } from "@docsvision/webclient/BackOffice/TasksImpl";
import { $LayoutController, $LayoutTasksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardInfo, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
/**
 * Содержит публичные свойства элемента управления [Задания]{@link Tasks}.
 */
export declare class TasksParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Список заданий. */
    tasks: GenModels.TaskDataModel[];
    /** Виды заданий для отображения. */
    viewKinds?: any;
    /** Виды заданий для создания. */
    tasksCreateInfo?: GenModels.CreateKindDataModel[];
    /** Можно ли создавать задания. */
    canCreateTask?: boolean;
    /** Можно ли создавать группы заданий. */
    canCreateTaskGroup?: boolean;
    /** Заголовок. */
    header?: string;
    /** Показывать ли дайджест представления заданий, когда контрол свёрнут. */
    digestView?: boolean;
    /** Развёрнут ли контрол с заданиями. */
    isExpanded: boolean;
    /** Разрешено ли добавление заданий. */
    addTaskAllowed?: boolean;
    /** Загружены ли задания. */
    tasksLoaded: boolean;
    /** Идентификатор карточки. */
    cardId: string;
    /** Режим. */
    mode: GenModels.TasksDisplayMode;
    /** Режим открытия заданий. */
    openMode: GenModels.TasksOpenMode;
    approvingChildTaskCreateLayoutPositionName?: string;
    /** Событие, возникающее перед сворачиванием. */
    collapsing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее при сворачивании. */
    collapsed?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед разворачиванием. */
    expanding?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее при разворачивании. */
    expanded?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед созданием задачи. */
    taskCreating?: CancelableApiEvent<ITaskCreatingEventArgs>;
    services?: $LayoutTasksController & $EditOperationStore & $Layout & $CardInfo & $LayoutController & $LayoutManager;
}
/**
 * Класс элемента управления Задания
 *
 * Добавляет в web-разметку элемент управления для работы с заданиями.
 */
export declare class Tasks extends BaseControl<TasksParams, TasksState> {
    /** @internal */
    protected createParams(): TasksParams;
    private readonly tasksImpl;
    private binding;
    private createKindsBinding;
    /**
     * Добавление задания.
     * @param taskCreateInfoId Идентификатор добавляемого задания
     */
    addTask(taskCreateInfoId: string): void;
    /** @internal */
    protected createImpl(): TasksImpl;
}
