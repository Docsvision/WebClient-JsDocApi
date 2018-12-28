import { $DocumentCardController } from "@docsvision/webclient/Legacy/DocumentCard";
import { ISignatureListItemDataModel } from "@docsvision/webclient/Legacy/ISignatureListItemDataModel";
import { IFilePreviewModel } from "@docsvision/webclient/Legacy/IFilePreviewModel";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface IFileSignListDialogProps {
    /** Идентификатор документа. */
    documentId: string;
    /** Вызывается после инициализации окна со списком подписей. */
    onInit?: () => void;
    /** Вызывается при закрытии окна со списком подписей. */
    onClose?: () => void;
    services: $DocumentCardController;
}
/** @internal */
export interface IFileSignListDialogState {
    /** Информация о стадии инициализации компонента. */
    initLoading: LoadingState;
    /** Список подписей. */
    signatures: ISignatureListItemDataModel[];
    /** Идентификатор выбранной подписи. */
    selectedSignatureId: string;
}
/** @internal */
export declare class FileSignListDialog extends React.Component<IFileSignListDialogProps, IFileSignListDialogState> {
    validationStateStyle: {
        [key: number]: string;
    };
    constructor(props: IFileSignListDialogProps);
    /** @internal */
    componentWillMount(): void;
    componentDidMount(): void;
    /** Обновляет журнал подписей. */
    update: () => JQueryDeferred<IFilePreviewModel>;
    /** Выполняется при закрытии окна со списком подписей. */
    protected onClose: () => void;
    /**
     * Отрисовывает строку таблицы с информацией о подписи.
     * @param signature Подпись
     * @param index Номер строки
     */
    protected renderRow(signature: ISignatureListItemDataModel, index: number): JSX.Element;
    /**
     * Отрисовывает подробную информацию о подписи.
     * @param signatureId Идентификатор подписи
     */
    protected renderSignatureDetails(signatureId: string, showTimestamp: boolean, detailsColumnCount: number): any[];
    /** Отрисовывает таблицу с информацией о подписях. */
    renderTable(): JSX.Element;
    /** @internal */
    render(): JSX.Element;
}
