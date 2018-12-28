import { NewCardLinkDialogArgs } from "@docsvision/webclient/BackOffice/NewCardLinkDialogArgs";
import { NewCardLinkDialog } from "@docsvision/webclient/BackOffice/NewCardLinkDialog";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface INewCardLinkDialogProps {
    kinds: GenModels.LayoutKindModel[];
    linkTypes: GenModels.LinkTypeModel[];
    onKindSelected?: (sender: NewCardLinkDialog, args: NewCardLinkDialogArgs) => void;
    onLinkTypeSelect?: (sender: NewCardLinkDialog, args: NewCardLinkDialogArgs) => void;
}
