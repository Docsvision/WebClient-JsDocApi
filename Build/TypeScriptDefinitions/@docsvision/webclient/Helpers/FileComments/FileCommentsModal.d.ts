import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { FileComments, IFileCommentsProps } from "@docsvision/webclient/Helpers/FileComments/FileComments";
import React from "react";
/** @internal Свойства для {@link FileCommentsModal} */
export interface IFileCommentsModalProps extends IFileCommentsProps {
    /** Вызывается при закрытии FileCommentsModal. */
    onClose?: () => void;
    services: $LayoutFileController;
}
/** @internal */
export interface IFileCommentsModalState {
    /** Показывается ли модальное окно. */
    isOpened: boolean;
}
/**
 * Модальное окно со списком комментариев.
 */
export declare class FileCommentsModal extends React.Component<IFileCommentsModalProps, IFileCommentsModalState> {
    constructor(props: IFileCommentsModalProps);
    /** Закрытие модального окна. */
    protected closeModal: () => void;
    /** Отрисовка блока с комментариями. */
    protected renderCommentsBody: (component: FileComments) => JSX.Element;
    /** Отрисовка информации о комментируемом файле. */
    protected renderFileInfo(component: FileComments): JSX.Element;
    /** @internal */
    render(): JSX.Element;
}
