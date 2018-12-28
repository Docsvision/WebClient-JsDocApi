import { ISignatureDataModel } from "@docsvision/webclient/Legacy/ISignatureDataModel";
import { ISignatureListDataModel } from "@docsvision/webclient/Legacy/ISignatureListDataModel";
import { IRequestInfo } from "@docsvision/webclient/System/RequestMethods";
import { ServerController } from "@docsvision/webclient/System/ServerController";
export declare class DocumentCardController extends ServerController {
    GetSignature(documentId: string): JQueryDeferred<ISignatureDataModel>;
    GetSignatures(documentId: string): JQueryDeferred<ISignatureListDataModel>;
    protected sendRequest(requestInfo: IRequestInfo): JQueryDeferred<any>;
}
export declare type $DocumentCardController = {
    documentCardController: DocumentCardController;
};
