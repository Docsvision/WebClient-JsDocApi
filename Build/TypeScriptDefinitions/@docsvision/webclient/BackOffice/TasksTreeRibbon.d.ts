import { ITasksTreeImplState } from "@docsvision/webclient/BackOffice/TasksTreeImpl";
/** @internal */
export interface ITasksTreeRibbon extends ITasksTreeImplState {
    onLoadFullTreeClick: () => void;
    onLoadCurrentTaskTreeClick: () => void;
    onCurrentTaskFocusClick: () => void;
    onOverdueClick: () => void;
    onImportantClick: () => void;
    onControlClick: () => void;
    onShowBranchClick: () => void;
    onCollapseAllClick: () => void;
    onExpandAllClick: () => void;
    onRefreshClick: () => void;
}
/** @internal */
export declare const TasksTreeRibbon: (props: ITasksTreeRibbon) => JSX.Element;
