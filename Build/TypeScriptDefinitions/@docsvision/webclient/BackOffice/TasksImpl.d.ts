import { TaskListComponent } from "@docsvision/webclient/BackOffice/TaskListComponent";
import { TasksParams } from "@docsvision/webclient/BackOffice/Tasks";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export interface TasksState extends TasksParams, BaseControlState {
    availableKinds: string[];
    taskID: string;
    totalTasksCount: number;
    tasksLoadingHelper: RequestHelper;
    inAnimation: boolean;
    currentKindName: string;
}
/** @internal */
export declare type TasksImplState = TasksState;
/** @internal */
export declare class TasksImpl extends BaseControlImpl<TasksParams, TasksState> {
    protected taskList: TaskListComponent;
    constructor(props: TasksParams, state: TasksState);
    componentDidMount(): void;
    private loadTasks;
    canAddTask(): boolean;
    addTask(taskCreateInfoId: string): void;
    getCssClass(): string;
    protected handleHeaderClick(): void;
    protected handleCreateTask(item: GenModels.CreateKindDataModel): Promise<void>;
    private onTaskOpen;
    private prepareWindowForOpenUrl;
    private openUrl;
    renderControl(): JSX.Element;
    isExpanded: boolean;
}
