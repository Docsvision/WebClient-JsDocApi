import { TasksTreeParams } from "@docsvision/webclient/BackOffice/TasksTree";
import { TasksTreeContainer } from "@docsvision/webclient/BackOffice/TasksTreeContainer";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { RequestHelper } from '@docsvision/webclient/System/RequestHelper';
/** @internal */
export interface ITasksTreeState extends TasksTreeParams, BaseControlState {
    isTreeVisible: boolean;
    isFullTreeLoaded: boolean;
    isCurrentTaskFocused: boolean;
    isOverdueFiltered: boolean;
    isImportantFiltered: boolean;
    isOnControlFiltered: boolean;
    isShowBranchFiltered: boolean;
    tasksTreeModel: GenModels.TasksTreeModel;
    loadVisJsHelper: RequestHelper;
    showFullTreeBindingAvailable: boolean;
}
/** @internal */
export declare type ITasksTreeImplState = ITasksTreeState;
/** @internal */
export declare class TasksTreeImpl extends BaseControlImpl<TasksTreeParams, ITasksTreeState> {
    tasksTreeContainer: TasksTreeContainer;
    constructor(props: TasksTreeParams, state: ITasksTreeState);
    private loadFullTreeHandler;
    private loadCurrentTaskTreeHandler;
    componentDidMount(): void;
    private сurrentTaskFocusHandler;
    private overdueHandler;
    private importantHandler;
    private onControlHandler;
    private showBranchHandler;
    private collapseAllHandler;
    private expandAllHandler;
    private refreshHandler;
    private loadVisJS;
    private loadTasksTree;
    private getTasksTree;
    private onTasksTreeClick;
    private showTreeModal;
    private hideTreeModal;
    private hasParentCard;
    renderControl(): JSX.Element;
    private renderTreeModal;
    private renderTreeContent;
}
