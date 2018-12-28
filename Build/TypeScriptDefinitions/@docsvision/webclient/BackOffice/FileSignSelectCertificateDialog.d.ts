import { ICryptoCertificate, ICryptoCertificateInfo } from "@docsvision/webclient/BackOffice/Crypto";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface IFileSignSelectCertificateDialogProps {
    /** Видно ли окно. */
    isVisible?: boolean;
    /** Вызывается при закрытии данного окна. */
    onClose?: (selectedCertInfo: ICryptoCertificateInfo) => void;
}
/** @internal */
export interface IFileSignSelectCertificateDialogState {
    /** Инициализирован ли компонент. */
    isInitialized: boolean;
    /** Выбранный сертификат для подписи. */
    selectedCert: ICryptoCertificate;
    /** Видно ли окно. */
    isVisible: boolean;
    /** Список доступных сертификатов для подписи. */
    certs: ICryptoCertificate[];
    /** Помощник для загрузки данных о списке сертификатов. */
    loadingHelper: RequestHelper;
}
/** @internal */
export declare class FileSignSelectCertificateDialog extends React.Component<IFileSignSelectCertificateDialogProps, IFileSignSelectCertificateDialogState> {
    constructor(props: IFileSignSelectCertificateDialogProps);
    /** @internal */
    componentWillMount(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: IFileSignSelectCertificateDialogProps): void;
    /** Загружаются ли сертификаты в данный момент. */
    readonly isCertsLoading: boolean;
    /** Обновляет список доступных сертификатов. */
    updateCerts: () => JQueryDeferred<ICryptoCertificate[]>;
    /** Показать окно. */
    show: () => void;
    /** Скрыть окно. */
    hide: () => void;
    /** При закрытии окна. */
    protected onClose: () => void;
    /**
     * При нажатии на строку таблицы для выбора сертификата.
     * @param cert Информация о сертификате для данной строки.
     */
    protected onCertRowClick: (cert: ICryptoCertificate) => void;
    /**
     * Отрисовывает строку таблицы для выбора сертификата.
     * @param cert Информация о сертификате для данной строки.
     */
    protected renderCertRow(cert: ICryptoCertificate): JSX.Element;
    /** @internal */
    render(): JSX.Element;
}
