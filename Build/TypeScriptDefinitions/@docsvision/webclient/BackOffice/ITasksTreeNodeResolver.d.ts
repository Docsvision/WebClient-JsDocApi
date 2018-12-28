import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { ITasksTreeContainerProps } from "@docsvision/webclient/BackOffice/ITasksTreeContainerProps";
import { ITasksTreeContainerState } from "@docsvision/webclient/BackOffice/ITasksTreeContainerState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ITasksTreeNodeResolver {
    resolveNode(treeNodeModel: GenModels.TreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
    resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): React.ReactNode;
    selectionAllowed: boolean;
}
