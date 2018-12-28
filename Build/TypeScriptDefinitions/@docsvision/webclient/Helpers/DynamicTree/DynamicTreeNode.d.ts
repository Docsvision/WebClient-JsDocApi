import { IDynamicTreeNodeData } from "@docsvision/webclient/Helpers/DynamicTree/IDynamicTreeNodeData";
import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
/** @internal */
export declare class DynamicTreeNode extends TreeNode {
    loading: LoadingState;
    constructor(data: IDynamicTreeNodeData, level: number, parent: TreeNode, children?: TreeNode[]);
    readonly dynamicChildren: DynamicTreeNode[];
    childrenLoaded: boolean;
    readonly iconClass: string;
}
