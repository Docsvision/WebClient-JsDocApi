import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
import { ITreeBaseProps } from "@docsvision/webclient/Helpers/Tree/ITreeBaseProps";
import { ITreeBaseState } from "@docsvision/webclient/Helpers/Tree/ITreeBaseState";
import { TreeBase } from "@docsvision/webclient/Helpers/Tree/TreeBase";
/** @internal */
export declare class Tree extends TreeBase<ITreeNodeData, ITreeBaseProps<ITreeNodeData>, ITreeBaseState> {
    constructor(props: ITreeBaseProps<ITreeNodeData>);
}
