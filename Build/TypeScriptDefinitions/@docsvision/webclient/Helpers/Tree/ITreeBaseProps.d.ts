import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
import { TreeNode } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/TreeNode";
/** @internal */
export interface ITreeBaseProps<TreeNodeDataT extends ITreeNodeData> {
    data?: TreeNodeDataT[];
    levelIdent?: string;
    expandedToggleMarkerClass?: string;
    collapsedToggleMarkerClass?: string;
    multiSelect?: boolean;
    className?: string;
    toggleOnDisabledNodesClick?: boolean;
    expandedByDefault?: boolean;
    /** Callback function, that called, when node selected */
    nodeSelected?: (node: TreeNode) => void;
    /** Callback function, that called, when node selected with double-click or enter. */
    nodeAccepted?: (node: TreeNode) => void;
    /** How virtual nodes will be processed. By default: Vairable */
    virtualizationType?: VirtualizationType;
    /** Callack function, that called when user press down/up arrows, and focus reached top or bottom of the node list. */
    focusOut?: (directionUp: boolean) => void;
    treeHeight: number;
}
/** See ReactList for help */
export declare enum VirtualizationType {
    Simple = 0,
    /** All rows has one height */
    Uniform = 1,
    /** Rows can have variadic height */
    Variable = 2
}
