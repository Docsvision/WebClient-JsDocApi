import { EncryptedInfo } from "@docsvision/webclient/Legacy/EncryptedInfo";
import { IFileSignInfo } from "@docsvision/webclient/Legacy/IFileSingInfo";
/** @internal */
export interface ICryptoCertificate {
    /** Идентификатор сертификата (он же отпечаток). */
    Id: string;
    /** Отображаемое имя сертификата (с краткой информацией и сроком действия сертификата). */
    DisplayName: string;
    /** Дата, отражающая срок действия сертификата. */
    ExpirateDate: string;
    /** Кем серификат выпущен. */
    Issue: string;
    /** Название сертификата. */
    Name: string;
    /** Имеется ли приватный ключ. */
    hasPrivateKey: boolean;
    /** Действителен ли сертификат. */
    isValid: boolean;
    /** Действителен начиная с указанной даты. */
    validFromDate: Date;
    /** Срок действия до указанной даты. */
    validToDate: Date;
}
/** @internal */
export interface ICryptoCertificateInfo {
    /** Идентификатор сертификата */
    id: string;
    /** Отображаемое имя сертификата. */
    displayName: string;
}
/** @internal */
export declare enum SignatureItemType {
    MainFileSignaturePartType = 0,
    MainFileWithContentSignaturePartType = 1,
    DocumentFieldsSignaturePartType = 2,
    DocumentAttachmentsSignaturePartType = 3
}
/** @internal */
export declare class Crypto {
    static LabelOIDAttirbute: string;
    static ProviderName: string;
    static ProviderType: string;
    static CADESCOM_CERT_INFO_TYPE_SUBJECT_SIMPLE_NAME: number;
    static CADESCOM_CERT_INFO_TYPE_ISSUER_SIMPLE_NAME: number;
    static CADESCOM_CURRENT_USER_STORE: number;
    static CADESCOM_MY_STORE: string;
    static CADESCOM_STORE_OPEN_MAXIMUM_ALLOWED: number;
    static CADESCOM_CERTIFICATE_FIND_SUBJECT_NAME: number;
    static CADESCOM_CERTIFICATE_FIND_SHA1_HASH: number;
    static CADESCOM_BASE64_TO_BINARY: number;
    static CADESCOM_CADES_BES: number;
    static CADESCOM_CADES_T: number;
    static CADESCOM_CADES_X_LONG_TYPE_1: number;
    static CADESCOM_ENCODE_BASE64: number;
    static CADESCOM_ENCODE_BINARY: number;
    static CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME: number;
    static CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: number;
    static CADESCOM_ATTRIBUTE_OTHER: number;
    private static CertListContainerPrefix;
    /** @deprecated */
    static CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: number;
    /** @deprecated */
    static CAPICOM_CERTIFICATE_FIND_SHA1_HASH: number;
    /** @deprecated */
    static CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: number;
    /** @deprecated */
    static CAPICOM_CERT_INFO_TYPE_ISSUER_SIMPLE_NAME: number;
    /** @deprecated */
    static CAPICOM_CERT_INFO_TYPE_SUBJECT_SIMPLE_NAME: number;
    /** @deprecated */
    static CAPICOM_CURRENT_USER_STORE: number;
    /** @deprecated */
    static CAPICOM_MY_STORE: string;
    /** @deprecated */
    static CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: number;
    private widgetId;
    private widget;
    private certListElement;
    private static asyncCodeIncluded;
    private static asyncPromise;
    private static asyncResolve;
    constructor();
    static include_async_code(): void;
    static GetCertificateByThumbprint(thumbprint: any): Promise<string>;
    static GetCertificateInfoByThumbprint(thumbprint: any): Promise<ICryptoCertificateInfo>;
    private static GetCertificateByThumbprint_NPAPI;
    static CheckForPlugIn(): any;
    static SignFilesWithCertificate(encryptedInfo: EncryptedInfo, files: NodeListOf<Element>, cardId: string, signFields?: boolean, signAttachments?: boolean): Promise<any>;
    static SignFilesWithCertificateEx(encryptedInfo: EncryptedInfo, files: IFileSignInfo[], cardId: string, signFields?: boolean, signAttachments?: boolean, signType?: number, tspService?: string): Promise<any>;
    static CanAsync(): boolean;
    static SignData(encryptedInfo: EncryptedInfo, dataToSign: any, signType?: any, tspService?: any): any;
    private static Verify;
    static GetCertsList(): Promise<ICryptoCertificate[]>;
    private static GetCertsList_NPAPI;
    private static CheckForPlugIn_NPAPI;
    private static GetBlobInBase64;
    static VerifySign(signHash: any, fileId: any): Promise<{}>;
    static GetPluginInfo(): any;
    static SetPluginInfo_NAPI(): void;
    private static SignData_NPAPI;
}
