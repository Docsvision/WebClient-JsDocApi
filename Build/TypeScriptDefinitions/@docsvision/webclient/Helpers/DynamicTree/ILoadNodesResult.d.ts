import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
/** @internal */
export interface ILoadNodesResult {
    nodes: ITreeNodeData[];
    /** How deep children was loaded. 1 - only nodes, 2 - nodes and its children, etc. */
    treeLevelDown: number;
}
