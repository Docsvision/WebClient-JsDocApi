import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { ITasksTreeNodeResolver } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolver";
import { ITasksTreeContainerProps } from "@docsvision/webclient/BackOffice/ITasksTreeContainerProps";
import { ITasksTreeContainerState } from "@docsvision/webclient/BackOffice/ITasksTreeContainerState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export declare class GroupTaskTasksTreeNodeResolver implements ITasksTreeNodeResolver {
    resolveNode(treeNodeModel: GenModels.TreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
    resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): React.ReactNode;
    readonly selectionAllowed: boolean;
    protected getIndicatorNodes(nodeModel: GenModels.TaskGroupTreeNodeModel): ITasksTreeNodeContainer[];
    protected getGroup(nodeModel: GenModels.TaskGroupTreeNodeModel): string;
    protected getHelpBoxHeaderIcon(groupName: any): string;
    protected getLabel(nodeModel: GenModels.TaskGroupTreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): string;
    protected getImage(nodeModel: GenModels.TaskGroupTreeNodeModel): string;
    protected prepareView(node: ITasksTreeNodeContainer, nodeModel: GenModels.TaskGroupTreeNodeModel, props: ITasksTreeContainerProps): any;
    protected getTitle(node: ITasksTreeNodeContainer, nodeModel: GenModels.TaskGroupTreeNodeModel, props: ITasksTreeContainerProps): string;
    private getExecutionTypeResourceKey;
}
