import { SignatureItemType } from "@docsvision/webclient/BackOffice/Crypto";
export interface ISignatureListItemDetailDataModel {
    Status: string;
    FileVersionNumber: string;
    FileName: string;
    FileId: string;
    SignData: string;
    CertificateThumbprint: string;
    IsSignedWithCertificate: boolean;
    ErorrMessage: string;
    SignatureItemType: SignatureItemType;
    Description?: string;
    PartItems?: string[];
    Timestamp: string;
}
