import { ITasksTreeNodeResolver } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolver";
/** @internal */
export interface ITasksTreeNodeResolverMap {
    [cardTypeId: string]: ITasksTreeNodeResolver;
}
