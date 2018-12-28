import { ITasksTreeColorMap } from "@docsvision/webclient/BackOffice/ITasksTreeColorMap";
import { ITasksTreeGroupMap } from "@docsvision/webclient/BackOffice/ITasksTreeGroupMap";
import { TasksTreeNodeResolveService } from "@docsvision/webclient/BackOffice/TasksTreeNodeResolveService";
import { ITasksTreeState, TasksTreeImpl } from "@docsvision/webclient/BackOffice/TasksTreeImpl";
import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardInfo, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
/**
 * Содержит публичные свойства элемента управления [Дерево исполнения]{@link TasksTree}.
 */
export declare class TasksTreeParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Идентификатор списка заданий. */
    taskCardId?: string;
    /** Идентификатор карточки документа или задания */
    cardId?: string;
    /** Текст кнопки. */
    buttonText?: string;
    /** Операция показа полного дерева */
    showFullTreeBinding?: string;
    /** Режим отображения. */
    displayMode?: GenModels.TasksTreeDisplayMode;
    /** Максимальное количество заданий группы */
    maxGroupTaskNumber: number;
    /** Режим отображения группы из одного задания. */
    taskGroupWithOneTaskDisplayMode: GenModels.TaskGroupWithOneTaskDisplayMode;
    /** Виды заданий для отображения. */
    viewKinds: string[];
    /** Сервис для управления резолверами задач. */
    nodeResolveService: TasksTreeNodeResolveService;
    /** Цвета. */
    colors: ITasksTreeColorMap;
    /** Группы. */
    groups: ITasksTreeGroupMap;
    /** Список опций для VIS.js. */
    options: import("vis").Options;
    services?: $FileController & $LayoutFileController & $RequestManager & $CardInfo & $EditOperationStore & $Layout;
}
/**
 * Класс элемента управления Дерево исполнения
 *
 * Добавляет в web-разметку элемент управления для работы с деревом исполнения.
 */
export declare class TasksTree extends BaseControl<TasksTreeParams, ITasksTreeState> {
    constructor(props: TasksTreeParams);
    private binding;
    private showFullTreeBinding;
    private viewKindsBinding;
    /** @internal */
    protected createParams(): TasksTreeParams;
    private getDefaultVisOptions;
    /** @internal */
    protected createImpl(): TasksTreeImpl;
}
