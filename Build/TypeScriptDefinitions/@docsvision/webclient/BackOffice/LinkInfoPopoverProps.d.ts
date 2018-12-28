import { LinkItem } from "@docsvision/webclient/BackOffice/LinkItem";
import { ILinkEventArgs } from "@docsvision/webclient/BackOffice/ILinkEventArgs";
import { $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ILayout } from "@docsvision/webclient/System/$Layout";
import { CancelableEvent } from "@docsvision/webclient/System/CancelableEvent";
/** @internal */
export interface ILinkInfoPopoverProps {
    linkItem: LinkItem;
    bindingInfo: GenModels.SimpleBindingInfo;
    fileKindId?: string;
    showFilesForLinksTypesIds?: string[];
    iconClass: string;
    editAvailable: boolean;
    onSaved: (model: GenModels.LinksDataModel) => void;
    onTitleClick?: (item: LinkItem) => void;
    maxCommentLength?: number;
    linkInfoEditing: CancelableEvent<ILinkEventArgs>;
    linkInfoEdited: (item: LinkItem) => void;
    ownedLayout: ILayout;
    services: $LayoutLinksController;
}
