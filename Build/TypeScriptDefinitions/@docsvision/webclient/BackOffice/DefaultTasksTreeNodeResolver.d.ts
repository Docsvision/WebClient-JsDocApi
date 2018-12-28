import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { ITasksTreeNodeResolver } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolver";
import { ITasksTreeContainerProps } from "@docsvision/webclient/BackOffice/ITasksTreeContainerProps";
import { ITasksTreeContainerState } from "@docsvision/webclient/BackOffice/ITasksTreeContainerState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class DefaultTasksTreeNodeResolver implements ITasksTreeNodeResolver {
    resolveNode(treeNodeModel: GenModels.TreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
    resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): React.ReactNode;
    readonly selectionAllowed: boolean;
}
