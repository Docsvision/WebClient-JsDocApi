import { ITasksTreeImplState } from "@docsvision/webclient/BackOffice/TasksTreeImpl";
/** @internal */
export interface ITasksTreeContainerProps extends ITasksTreeImplState {
    /** @internal Vis.js instance */
    vis: typeof import('vis');
}
