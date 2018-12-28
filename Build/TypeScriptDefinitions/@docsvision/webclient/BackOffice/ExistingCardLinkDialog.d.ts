import { $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ILayout } from "@docsvision/webclient/System/$Layout";
/** @internal */
export declare class ExistingCardLinkDialog {
    ownedLayout: ILayout;
    bindingInfo: GenModels.SimpleBindingInfo;
    editOperation: string;
    saveHardLink: boolean;
    allowedLinkTypes: string[];
    allowedCardTypes: string[];
    services: $LayoutLinksController;
    fileKindId: string;
    showFilesForLinksTypesIds: string[];
    constructor(ownedLayout: ILayout, bindingInfo: GenModels.SimpleBindingInfo, saveHardLink: boolean, allowedLinkTypes: string[], allowedCardTypes: string[], editOperation: string, services?: $LayoutLinksController, fileKindId?: string, showFilesForLinksTypesIds?: string[]);
    showExistingCardLinkDialog(doneCallback: (model: GenModels.LinksDataModel) => void): void;
}
