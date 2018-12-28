import { ILinkItem } from "@docsvision/webclient/BackOffice/ILinkItem";
import { LinkItemState } from "@docsvision/webclient/BackOffice/LinkItemState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export declare class LinkItem implements ILinkItem {
    data: GenModels.LayoutLinkModel;
    state: LinkItemState;
    settingsMenuExpanded: boolean;
    infoPopoverOpen: boolean;
}
