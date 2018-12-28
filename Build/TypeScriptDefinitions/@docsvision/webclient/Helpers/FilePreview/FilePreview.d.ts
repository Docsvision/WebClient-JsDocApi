import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { IFilePreviewModel } from "@docsvision/webclient/Legacy/IFilePreviewModel";
import React from "react";
/** @internal Свойства для {@link FilePreview} */
export interface IFilePreviewProps {
    /** Идентификатор файла. */
    fileId: string;
    /** Идентификатор карточки файла. */
    fileCardId: string;
    ownerCardId?: string;
    /** Идентификатор версии файла */
    versionId: string;
    /** Текущий номер страницы (начинается с 1, по умолчанию - 1). */
    currentPage?: number;
    /** Уникальный идентификатор превью файла, нужный, если между открытиями одного и того же превью оно может поменяться, а браузер его кэширует. */
    fileCacheId?: string;
    /** Вызывается при закрытии FilePreview. */
    onClose?: () => void;
    /** Показывать ли комментарии */
    showComments?: boolean;
    /** Можно ли создать новый комментарий. */
    canCreateComment?: () => boolean;
    /** Можно ли изменить последний комментарий. */
    canEditLastComment?: () => boolean;
    /** Можно ли удалить последний комментарий. */
    canDeleteLastComment?: () => boolean;
    services: $FileController & $LayoutFileController;
}
/** @internal */
export interface IFilePreviewState {
    /** Информацию о файле и его превью. */
    preview: IFilePreviewModel;
    /** Содержит ли поле ввода страницу ошибку. */
    isPageInputError: boolean;
    /** Редактируется ли поле ввода страницы в данный момент. */
    isEditingPageInput: boolean;
    isEditingTop: boolean;
    /** Загружаются ли в данный момент данные для предпросмотра файла. */
    isLoading: boolean;
    /** Загружается ли в данный момент изображения для предпросмотра по ссылке . */
    isImageLoading: boolean;
    /** Включено ли масштабирование. */
    isScaling: boolean;
    /** Текущий номер страницы (начинается с 1). */
    currentPage: number;
    pageInputValue: string;
    pageInput: HTMLInputElement;
}
export declare class FilePreview extends React.Component<IFilePreviewProps, IFilePreviewState> {
    /** TODO: To refresh on edit this file by webdav. Remove it after removing tasks's razor templates. */
    private cacheId;
    constructor(props: IFilePreviewProps);
    /** @internal */
    componentWillReceiveProps(nextProps: IFilePreviewProps): void;
    /** @internal */
    componentWillMount(): void;
    /**
     * Закрузить данные о файле для нужной страницы.
     * @param page Номер загружаемой страницы
     */
    protected load(page: number): JQueryDeferred<IFilePreviewModel>;
    /** При закрытии FilePreview. */
    protected onClose: () => void;
    /** URL изображения для текущей страницы. */
    protected getCurrentImageUrl: () => string;
    /** URL для скачивания файла. */
    protected getDownloadFileUrl: () => string;
    /** Перейти на первую страницу. */
    protected goToFirstPage: () => void;
    /** Перейти на последнюю страницу. */
    protected goToLastPage: () => void;
    /** Перейти на предыдущую страницу. */
    protected goToPrevPage: () => void;
    /** Перейти на следующую страницу. */
    protected goToNextPage: () => void;
    /**
     * Перейти на указанную страницу.
     * @param pageNumber Номер страницы для перехода
     */
    protected goToPage: (pageNumber: number) => void;
    /**
     * Можно ли перейти на указанную страницу.
     * @param pageNumber Номер страницы для перехода
     */
    protected canGoToPage: (pageNumber: number) => boolean;
    /**
     * Проверка на ввод только целочисленного номера страницы
     * @param event Событие клавиатуры
     */
    protected onPageInputKeyDown: (event: React.KeyboardEvent<any>) => void;
    /**
     * При изменении текущего номера страницы в текстовом поле ввода элемента управления
     * @param event Событие изменения
     */
    protected onPageInputChange: (event: React.FormEvent<any>) => void;
    /**
     * При потери фокуса элементом управления.
     * @param event Событие изменения фокуса
     */
    protected onPageInputBlur: (event: React.FocusEvent<any>) => void;
    /** Переключение режима масштабирования. */
    protected toggleScaleMode: () => void;
    protected selectInput: (input: HTMLInputElement) => void;
    private preloadImage;
    /** Отрисовка заголовка предпросмотра файла. */
    protected renderHeader(): JSX.Element;
    /** Отрисовка элементов управления (навигация по страницам, скачивания и т.д.). */
    protected renderControls(top: boolean): JSX.Element;
    /** Отрисовка блока с комментариями. */
    protected renderComments(): JSX.Element;
    /** @internal */
    render(): JSX.Element;
}
