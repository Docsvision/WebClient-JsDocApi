import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
/** @internal */
export interface IPartnerDirectoryTreeItem extends GenModels.PartnerDirectoryItem {
    expanded?: boolean;
    loadingState?: LoadingState;
    displayName?: React.ReactNode;
    visible?: boolean;
    parentId?: string;
    level?: number;
}
