import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ITreeNodeData } from "@docsvision/webclient/Helpers/Tree/Data/ClientModels/ITreeNodeData";
/** @internal */
export declare class KindTreeNodeData implements ITreeNodeData {
    kindModel: GenModels.LayoutKindModel;
    children: KindTreeNodeData[];
    trimmedName: string;
    constructor(kind: GenModels.LayoutKindModel, children: KindTreeNodeData[]);
    readonly displayName: string;
    readonly uniqueId: string;
    readonly iconClass: string;
    readonly disabled: boolean;
    private trimName;
}
