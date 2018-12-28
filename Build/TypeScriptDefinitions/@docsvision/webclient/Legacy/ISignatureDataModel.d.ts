import { ISignatureLabel } from "@docsvision/webclient/Legacy/ISignatureLabel";
export interface ISignatureDataModel {
    labels: ISignatureLabel[];
    timestamp: number;
    cardid: string;
    signFields?: boolean;
    signAttachments?: boolean;
    thumbprint: string;
}
