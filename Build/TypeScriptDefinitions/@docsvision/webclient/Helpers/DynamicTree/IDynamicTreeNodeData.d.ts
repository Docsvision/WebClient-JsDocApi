import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
/** @internal */
export interface IDynamicTreeNodeData extends ITreeNodeData {
    childrenLoaded: boolean;
}
