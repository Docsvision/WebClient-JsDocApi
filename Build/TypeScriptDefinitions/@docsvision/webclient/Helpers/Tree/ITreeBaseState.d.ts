import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
/** @internal */
export interface ITreeBaseState {
    nodes: TreeNode[];
    selectedNodes: TreeNode[];
    count: number;
    focusedNode: TreeNode;
}
