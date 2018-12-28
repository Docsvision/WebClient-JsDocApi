import { ISignatureListItemDetailDataModel } from "@docsvision/webclient/Legacy/ISignatureListItemDetailDataModel";
import { ValidationState } from "@docsvision/webclient/Legacy/ValidationState";
export interface ISignatureListItemDataModel {
    Id: string;
    Author: any;
    CreationDate: string;
    LabelDisplayName: string;
    SignatureStatus: string;
    ValidationState: ValidationState;
    CertificateThumbprint: string;
    IsSimpleSign: boolean;
    SignatureDetails: ISignatureListItemDetailDataModel[];
    HasSignedAttributItem: boolean;
}
