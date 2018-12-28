import { $DocumentCardController } from "@docsvision/webclient/Legacy/DocumentCard";
import { IFileSignInfo } from "@docsvision/webclient/Legacy/IFileSingInfo";
export interface IFileSignInteractionModel {
    documentId: string;
    getFiles: () => IFileSignInfo[];
    signButton: HTMLElement;
    viewSignButton: HTMLElement;
    beforeSignCallback: () => JQueryDeferred<any>;
    beforeViewSignCallback: () => JQueryDeferred<any>;
    afterSignCallback: Function;
    afterViewSignCallback: Function;
    services: $DocumentCardController;
}
