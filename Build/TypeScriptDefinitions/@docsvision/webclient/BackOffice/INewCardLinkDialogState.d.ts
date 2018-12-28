import { KindTreeNodeData } from "@docsvision/webclient/BackOffice/KindTreeNodeData";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Tree } from "@docsvision/webclient/Helpers/Tree/Tree";
/** @internal */
export interface INewCardLinkDialogState {
    selectedKind?: GenModels.LayoutKindModel;
    selectedLinkType: GenModels.LinkTypeModel;
    treeNodes: KindTreeNodeData[];
    tree?: Tree;
    /** @deprecated */
    root?: HTMLElement;
}
