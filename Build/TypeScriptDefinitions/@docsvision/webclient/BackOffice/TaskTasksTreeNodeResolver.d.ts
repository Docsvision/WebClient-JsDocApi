import { ITasksTreeColor } from "@docsvision/webclient/BackOffice/ITasksTreeColor";
import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { ITasksTreeNodeResolver } from "@docsvision/webclient/BackOffice/ITasksTreeNodeResolver";
import { ITasksTreeContainerProps } from "@docsvision/webclient/BackOffice/ITasksTreeContainerProps";
import { ITasksTreeContainerState } from "@docsvision/webclient/BackOffice/ITasksTreeContainerState";
import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import React from "react";
/** @internal */
export declare class TaskTasksTreeNodeResolver implements ITasksTreeNodeResolver {
    private services;
    private readonly moreDots;
    constructor(services: () => $FileController & $LayoutFileController);
    resolveNode(treeNodeModel: GenModels.TreeNodeModel, props: ITasksTreeContainerProps, state: ITasksTreeContainerState): ITasksTreeNodeContainer[];
    resolveRenderHelpBox(props: ITasksTreeContainerProps, state: ITasksTreeContainerState): React.ReactNode;
    readonly selectionAllowed: boolean;
    protected renderDelegateList(taskNodeHelpModel: GenModels.TaskTreeNodeHelpModel, color: ITasksTreeColor, state: ITasksTreeContainerState): JSX.Element;
    protected getIndicatorNodes(nodeModel: GenModels.TaskTreeNodeModel): ITasksTreeNodeContainer[];
    protected getGroup(nodeModel: GenModels.TaskTreeNodeModel): string;
    protected getHelpBoxHeaderIcon(groupName: any): string;
    protected getLabel(nodeModel: GenModels.TaskTreeNodeModel): string;
    protected getImage(nodeModel: GenModels.TaskTreeNodeModel): string;
    protected prepareView(node: ITasksTreeNodeContainer, nodeModel: GenModels.TaskTreeNodeModel, props: ITasksTreeContainerProps): any;
    protected getTitle(node: ITasksTreeNodeContainer, nodeModel: GenModels.TaskTreeNodeModel, props: ITasksTreeContainerProps): string;
    protected getDelegationLabel(delegationRecord: GenModels.DelegationRecord): string;
    protected getDelegationHistory(delegationRecords: GenModels.DelegationRecord[]): string[];
    protected showFilePreview(linkItemData: GenModels.LayoutLinkModel): void;
}
