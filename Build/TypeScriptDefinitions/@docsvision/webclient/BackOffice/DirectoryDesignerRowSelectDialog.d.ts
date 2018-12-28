import { DirectoryDesignerTreeNode } from "@docsvision/webclient/BackOffice/DirectoryDesignerTreeNode";
import { $LayoutDirectoryDesignerController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { DynamicTree } from "@docsvision/webclient/Helpers/DynamicTree/DynamicTree";
import { IDynamicTreeNodeData } from "@docsvision/webclient/Helpers/DynamicTree/IDynamicTreeNodeData";
import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface IDirectoryDesignerRowSelectDialogProps {
    nodeSelected: (node: DirectoryDesignerTreeNode) => void;
    nodeAccepted: (node: DirectoryDesignerTreeNode) => void;
    searchDelay: number;
    rootNodeId: string;
    selectedNodeId?: string;
    selectionArea: GenModels.DirectoryDesignerSearchArea;
    services: $LayoutDirectoryDesignerController;
}
/** @internal */
export interface IDirectoryDesignerRowSelectDialogState {
    requestHelper: RequestHelper;
    searchRequestHelper: RequestHelper;
    selectedNode: DirectoryDesignerTreeNode;
    treeWrapper: HTMLElement;
    searchResultCount: number;
    searchResultNumber: number;
    showingSearchResults: boolean;
    searchText: string;
    tree: DynamicTree;
    searchInput: HTMLInputElement;
    searchTimerHandle: any;
}
/** @internal */
export declare class DirectoryDesignerRowSelectDialog extends React.Component<IDirectoryDesignerRowSelectDialogProps, IDirectoryDesignerRowSelectDialogState> {
    static LoadTreeLevelDown: number;
    static LevelsToExapndByDefault: number;
    /** @internal */
    state: IDirectoryDesignerRowSelectDialogState;
    constructor(props: IDirectoryDesignerRowSelectDialogProps);
    readonly selectedDepartment: DirectoryDesignerTreeNode;
    protected loadTree(parentNode?: ITreeNodeData): JQueryDeferred<IDynamicTreeNodeData[]>;
    protected searchTree(searchText: string, resultNumber: number, searchMode?: GenModels.DirectoryDesignerSearchMode): JQueryDeferred<GenModels.DirectoryDesignerSearchTreeResult>;
    protected expandFirstLevels(nodes: DirectoryDesignerTreeNode[], currentLevel: number, expandLevel?: number): void;
    protected onNodeSelected(node: TreeNode): void;
    protected onNodeAccepted(node: TreeNode): void;
    componentDidMount(): void;
    protected onNextResultClick(): void;
    protected onPrevResultClick(): void;
    protected onInputChange(ev: React.ChangeEvent<any>): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onTreeFocusOut(directionUp: boolean): void;
    protected attachSearchInput(el: HTMLInputElement): void;
    protected getSearchResultLabel(): string;
    renderSearchResult(nodeName: string, searchText: string, matchedPropertyName: string, matchedPropertyValue: string): JSX.Element;
    render(): React.ReactNode;
}
