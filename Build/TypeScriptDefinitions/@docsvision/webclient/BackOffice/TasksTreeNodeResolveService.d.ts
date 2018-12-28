import { ITasksTreeNodeResolver } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolver";
import { ITasksTreeNodeResolverMap } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolverMap";
/** @internal */
export declare class TasksTreeNodeResolveService {
    resolvers: ITasksTreeNodeResolverMap;
    defaultResolver: ITasksTreeNodeResolver;
    register(cardTypeId: string, resolver: ITasksTreeNodeResolver, override?: boolean): void;
    get(cardTypeId: string): ITasksTreeNodeResolver;
}
