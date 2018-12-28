interface String {
    format: (...codes: any[]) => string;
}
interface Array<T> {
    equals: (array: any) => boolean;
}
declare function UploadFile(formName: Element, filesContainer: string, onSuccess: Function, onFileAdded: Function, dropZoneId: string, onFileRemoved?: (documentId: string) => void): void;
declare function CreateTaskIntervalManager(): any;
declare function CreateTaskInterval(): any;
declare function CheckForPlugIn_Async(): Promise<any>;
declare function GetCertsList_Async(): any;
declare function GetCertificateInfoByThumbprint_Async(thumbprint: any): any;
declare function GetCertificateByThumbprint_Async(thumbprint: any): any;
declare function SignData_Async(certThumbprint: any, dataToSign: any, signType?: any, tspService?: any): any;
declare function SignCadesEnhanced_Async(encryptedInfo: any, dataToSign: any, signType: any): any;
declare function Verify_Async(sSignedMessage: any, dataToVerify: any): any;
declare function SetPluginInfo_Async(): void;
declare var cadesplugin: any;
declare var iNoBounce: any;
declare function HackTouch(): any;
