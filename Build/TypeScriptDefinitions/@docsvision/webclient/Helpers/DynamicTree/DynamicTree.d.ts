import { DynamicTreeNode } from "@docsvision/webclient/Helpers/DynamicTree/DynamicTreeNode";
import { IDynamicTreeNodeData } from "@docsvision/webclient/Helpers/DynamicTree/IDynamicTreeNodeData";
import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
import { ITreeBaseProps } from "@docsvision/webclient/Helpers/Tree/ITreeBaseProps";
import { ITreeBaseState } from "@docsvision/webclient/Helpers/Tree/ITreeBaseState";
import { Tree } from "@docsvision/webclient/Helpers/Tree/Tree";
import { TreeBase } from "@docsvision/webclient/Helpers/Tree/TreeBase";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
/** @internal */
export interface IDynamicTreeProps extends ITreeBaseProps<IDynamicTreeNodeData> {
    /** If parentNode specified, shoudl load child nodes, else root nodes */
    loadNodes: (parentNode?: ITreeNodeData) => JQueryDeferred<IDynamicTreeNodeData[]>;
    className?: string;
    expandedByDefault?: boolean;
}
/** @internal */
export interface IDynamicTreeState extends ITreeBaseState {
    tree?: Tree;
    rootLoading?: LoadingState;
}
/** @internal */
export declare class DynamicTree extends TreeBase<IDynamicTreeNodeData, IDynamicTreeProps, IDynamicTreeState> {
    constructor(props: IDynamicTreeProps);
    componentDidMount(): void;
    toggleNode(node: TreeNode, expand: boolean, raiseEvent?: boolean): void;
    protected createNode(data: ITreeNodeData, level: number, parent: TreeNode, children?: TreeNode[]): DynamicTreeNode;
    protected renderToggleMarker(node: TreeNode): JSX.Element;
    render(): JSX.Element;
}
