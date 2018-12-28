import { ModalWindowParams } from "@docsvision/webclient/Legacy/ModalWindowParams";
/** @internal */
export declare class SelectCertificateDialog {
    private selectedThumbprint;
    private okButtonFunction;
    private dialogParamsContainer;
    private isSimpleSign;
    private defaultPersonalThumbprint;
    private url;
    private traceProvider;
    constructor(url: string, dialogParamsContainer: HTMLElement);
    ShowDialog(requestData?: any, additionalParams?: Partial<ModalWindowParams>): void;
    readonly SelectedThumbprint: string;
    readonly IsSimpleSign: boolean;
    OkDialogButton: Function;
    ShowSelectCertificateDialog(container: HTMLElement): void;
    private readonly DefaultPersonalThumbprint;
    private GetDialogParams;
    private SetSelectedCertificateDisplayName;
    private SetSingInfoMessage;
    private FillTableRow;
    private GetSelectCertificateDialogParams;
    private CheckPersonalCertificate;
    private AddRowHandlers;
}
