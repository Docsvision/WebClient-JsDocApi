import { ICryptoCertificateInfo } from "@docsvision/webclient/BackOffice/Crypto";
import { IComboBoxElement } from "@docsvision/webclient/Helpers/ComboBox/Data/ClientModels/IComboBoxElement";
import { ModalHost } from "@docsvision/webclient/Helpers/ModalHost";
import { $DocumentCardController } from "@docsvision/webclient/Legacy/DocumentCard";
import { ISignatureLabel } from "@docsvision/webclient/Legacy/ISignatureLabel";
import { IFilePreviewModel } from "@docsvision/webclient/Legacy/IFilePreviewModel";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface IFileSignCreateDialogProps {
    /** Идентификатор документа. */
    documentId: string;
    /** Вызывается при подписи. */
    onSign?: (selectedCertInfo: ICryptoCertificateInfo, selectedLabel: ISignatureLabel, timestamp: number, signFields?: boolean, signAttachments?: boolean) => void;
    /** Вызывается при отмене подписи. */
    onCancel?: () => void;
    services: $DocumentCardController;
}
/** @internal */
export interface IFileSignCreateDialogState {
    /** Информация о стадии инициализации компонента. */
    initLoading: LoadingState;
    /** Идентификатор выбранной метки для подписи. */
    selectedLabel?: ISignatureLabel;
    /** Идентификатор выбранного варианта подписания подписи (простой или сертификат). */
    selectedModeId: string;
    /** Информация о выбранном сертификате для подписи (если подпись не является простой). */
    selectedCertInfo: ICryptoCertificateInfo;
    /** Необходимо ли подписать Поля */
    signFields?: boolean;
    /** Необходимо ли подписать Дополнения */
    signAttachments?: boolean;
    /** Список меток для подписи. */
    signLabels: ISignatureLabel[];
    /** Пользовательский отпечаток. */
    thumbprint: string;
    /** Таймштамп последнего изменения карточки. */
    timestamp: number;
    /** Экземпляр ModalHost для работы с модальным окном для выбора сертификата. */
    certSelectModalHost: ModalHost;
    /** Видно ли модальное окно для выбора сертификата. */
    isCertSelectVisible: boolean;
}
/** @internal */
export declare class FileSignCreateDialog extends React.Component<IFileSignCreateDialogProps, IFileSignCreateDialogState> {
    static readonly SELECT_CERTIFICATE_MODE = "select-certificate";
    constructor(props: IFileSignCreateDialogProps);
    /** @internal */
    componentWillMount(): void;
    /** Является ли подпись простой. */
    isSimpleSign: () => boolean;
    /** Обновляет список доступных меток для подписи. */
    updateLabels: () => JQueryDeferred<IFilePreviewModel>;
    /** При изменении варианта подписания подписи. */
    protected onModeChange: (selectedElement: IComboBoxElement) => void;
    /** Получить отформатированный список меток для комбобокса. */
    protected getLabelsForCombobox: () => IComboBoxElement[];
    /** Получить отформатированный список вариантов подписания для комбобокса. */
    protected getModesForCombobox: () => IComboBoxElement[];
    /** Открывает модальное окно для выбора сертификата. */
    protected openCertSelectWindow: () => void;
    /** При закрытии модального окна для выбора сертификата. */
    protected onCloseCertSelectWindow: (selectedCertInfo: ICryptoCertificateInfo) => void;
    /** При подписании. */
    protected onSign: () => void;
    /** При отмене подписания. */
    protected onCancel: () => void;
    /** Отрисовывает модальное окно для выбора сертификата. */
    protected renderSelectCertDialog(): React.ReactNode;
    /** @internal */
    render(): JSX.Element;
}
