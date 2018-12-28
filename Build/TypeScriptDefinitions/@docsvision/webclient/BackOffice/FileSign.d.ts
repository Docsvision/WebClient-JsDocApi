import { Crypto, ICryptoCertificateInfo } from "@docsvision/webclient/BackOffice/Crypto";
import { $SignatureController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { ModalHost } from "@docsvision/webclient/Helpers/ModalHost";
import { TraceProvider } from "@docsvision/webclient/Legacy/TraceProvider";
import { ISignatureLabel } from "@docsvision/webclient/Legacy/ISignatureLabel";
import { EncryptedInfo } from "@docsvision/webclient/Legacy/EncryptedInfo";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { IFileSignInteractionModel } from './IFileSignInteractionModel';
export declare class FileSign {
    protected crypto: Crypto;
    protected traceProvider: TraceProvider;
    protected interactionModel: IFileSignInteractionModel;
    protected createDialogModalHost: ModalHost;
    protected viewListDialogModalHost: ModalHost;
    protected signOperationHelper: RequestHelper;
    protected services: $SignatureController;
    constructor(interactionModel: IFileSignInteractionModel);
    /** Инициализация. */
    protected initialize(): void;
    /** Отрисовывает диалог для создания подписи. */
    protected renderCreateDialog: () => JSX.Element;
    /** Открыть диалог для создания подписи. */
    protected openCreateDialog: () => void;
    /** @deprecated */
    ShowSignDialog: () => void;
    /** Закрыть диалог для создания подписи. */
    protected closeCreateDialog: () => void;
    /** При подписывании. */
    protected onSign: (selectedCertInfo: ICryptoCertificateInfo, selectedLabel: ISignatureLabel, timestamp: number, signFields?: boolean, signAttachments?: boolean) => void;
    /**
     * Подписать сертификатом с указанным отпечатком и идентификатором метки.
     * @param selectedThumbprint Отпечаток
     * @param selectedLabelId Идентификатор метки
     */
    protected sign(selectedThumbprint: string, selectedLabel: ISignatureLabel, timestamp: number, signFields?: boolean, signAttachments?: boolean): JQueryDeferred<{}>;
    /** Присоединить указанную подпись. */
    protected attachSign(encryptedInfo: EncryptedInfo, selectedLabelId: string, timestamp: number): JQueryDeferred<{}>;
    /** Отрисовывает диалог для просмотра списка подписей. */
    protected renderViewListDialog: () => JSX.Element;
    /** Открывает диалог для просмотра списка подписей. */
    protected openViewListDialog: () => void;
    /** Закрывает диалог для просмотра списка подписей. */
    protected closeViewListDialog: () => void;
    protected onInitViewListDialog: () => void;
    /** Показывает предупреждение при замене версии файла на другую. */
    static showSignWarningDialog(successCb?: Function, cancelCb?: Function): void;
    /** @deprecated Uses {@link showSignWarningDialog} */
    static ShowSignWarningDialog(okFunction: Function): void;
}
