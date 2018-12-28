import { FileListItem } from "@docsvision/webclient/BackOffice/FileListItem";
import { IExtraFileAddedArgs } from "@docsvision/webclient/BackOffice/IExtraFileAddedArgs";
import { IExtraFileAddingArgs } from "@docsvision/webclient/BackOffice/IExtraFileAddingArgs";
import { IExtraFileDeletedArgs } from "@docsvision/webclient/BackOffice/IExtraFileDeletedArgs";
import { IExtraFileDeletingArgs } from "@docsvision/webclient/BackOffice/IExtraFileDeletingArgs";
import { IFileOpenedArgs } from "@docsvision/webclient/BackOffice/IFileOpenedArgs";
import { IFileOpeningArgs } from "@docsvision/webclient/BackOffice/IFileOpeningArgs";
import { IFilePreviewedArgs } from "@docsvision/webclient/BackOffice/IFilePreviewedArgs";
import { IFilePreviewingArgs } from "@docsvision/webclient/BackOffice/IFilePreviewingArgs";
import { IFileVersionCommentAddedArgs } from "@docsvision/webclient/BackOffice/IFileVersionCommentAddedArgs";
import { IFileVersionCommentAddingArgs } from "@docsvision/webclient/BackOffice/IFileVersionCommentAddingArgs";
import { IFileVersionCommentDeletedArgs } from "@docsvision/webclient/BackOffice/IFileVersionCommentDeletedArgs";
import { IFileVersionCommentDeletingArgs } from "@docsvision/webclient/BackOffice/IFileVersionCommentDeletingArgs";
import { IFileVersionDownloadedArgs } from "@docsvision/webclient/BackOffice/IFileVersionDownloadedArgs";
import { IFileVersionDownloadingArgs } from "@docsvision/webclient/BackOffice/IFileVersionDownloadingArgs";
import { IFileVersionUploadedArgs } from "@docsvision/webclient/BackOffice/IFileVersionUploadedArgs";
import { IFileVersionUploadingArgs } from "@docsvision/webclient/BackOffice/IFileVersionUploadingArgs";
import { IMainFileAddedArgs } from "@docsvision/webclient/BackOffice/IMainFileAddedArgs";
import { IMainFileAddingArgs } from "@docsvision/webclient/BackOffice/IMainFileAddingArgs";
import { IMainFileDeletedArgs } from "@docsvision/webclient/BackOffice/IMainFileDeletedArgs";
import { IMainFileDeletingArgs } from "@docsvision/webclient/BackOffice/IMainFileDeletingArgs";
import { ISignatureCreatedArgs } from "@docsvision/webclient/BackOffice/ISignatureCreatedArgs";
import { ISignatureCreatingArgs } from "@docsvision/webclient/BackOffice/ISignatureCreatingArgs";
import { ISignatureListViewedArgs } from "@docsvision/webclient/BackOffice/ISignatureListViewedArgs";
import { ISignatureListViewingArgs } from "@docsvision/webclient/BackOffice/ISignatureListViewingArgs";
import { FileListControlImpl, FileListControlState } from "@docsvision/webclient/BackOffice/FileListControlImpl";
import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $DocumentCardController } from "@docsvision/webclient/Legacy/DocumentCard";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardId } from "@docsvision/webclient/System/LayoutServices";
import { EditMode } from "@docsvision/webclient/System/EditMode";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { $Router } from "@docsvision/webclient/System/$Router";
import { $RealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
/**
 * Содержит публичные свойства элемента управления [Список файлов]{@link FileListControl}.
 */
export declare class FileListControlParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Общее количество файлов */
    totalCount: number;
    /** Выбранные файлы. */
    files: FileListItem[];
    /** Флаг, указывающий на наличие ЭЦП на основных файлах: true - файлы подписаны, false - не подписаны. */
    hasAnySignature: boolean;
    /** Флаг, определяющий раскрыт ли блок со списком основных файлов: true - раскрыт, false - свернут. */
    mainFilesExpanded: boolean;
    /** Флаг, определяющий раскрыт ли блок со списком дополнительных файлов: true - раскрыт, false - свернут. */
    extraFilesExpanded: boolean;
    /** Флаг, определяющий отображается ли меню добавления файлов: true - отображается, false - скрыто. */
    fileCommandBarExpanded: boolean;
    /** Флаг, определяющий отображается ли меню подписания файлов: true - отображается, false - скрыто. */
    signCommandBarExpanded: boolean;
    /** Возвращает режим редактирования элемента управления. */
    editMode: EditMode;
    /** Флаг, указывающий, разрешено ли добавлять основные файлы: true - разрешено, false - не разрешено. */
    canAddMain: boolean;
    /** Флаг, указывающий, разрешено ли добавлять дополнительные файлы: true - разрешено, false - не разрешено. */
    canAddExtra: boolean;
    /** Флаг, указывающий, разрешено ли подписывать файлы: true - разрешено, false - не разрешено. */
    canSign: boolean;
    /** Флаг, указывающий, разрешено ли открывать журнал подписей: true - разрешено, false - не разрешено. */
    canViewSign: boolean;
    /** Событие возникает при добавлении основного файла. */
    mainFileAdding: CancelableApiEvent<IMainFileAddingArgs>;
    /** Событие возникает при добавлении дополнительного файла. */
    extraFileAdding: CancelableApiEvent<IExtraFileAddingArgs>;
    /** Событие возникает при удалении основного файла. */
    mainFileDeleting: CancelableApiEvent<IMainFileDeletingArgs>;
    /** Событие возникает при удалении дополнительного файла. */
    extraFileDeleting: CancelableApiEvent<IExtraFileDeletingArgs>;
    /** Событие возникает при скачивании версии файла. */
    fileVersionDownloading: CancelableApiEvent<IFileVersionDownloadingArgs>;
    /** Событие возникает при загрузке версии файла. */
    fileVersionUploading: CancelableApiEvent<IFileVersionUploadingArgs>;
    /** Событие возникает при открытии файла через WebDAV. */
    fileOpening: CancelableApiEvent<IFileOpeningArgs>;
    /** Событие возникает при открытии журнала подписей. */
    signatureListViewing: CancelableApiEvent<ISignatureListViewingArgs>;
    /** Событие возникает при подписании файла. */
    signatureCreating: CancelableApiEvent<ISignatureCreatingArgs>;
    /** Событие возникает при добавлении комментария к версии файла. */
    fileVersionCommentAdding: CancelableApiEvent<IFileVersionCommentAddingArgs>;
    /** Событие возникает при удалении комментария к версии файла. */
    fileVersionCommentDeleting: CancelableApiEvent<IFileVersionCommentDeletingArgs>;
    /** Событие возникает при открытии окна предварительного просмотра файла. */
    filePreviewing: CancelableApiEvent<IFilePreviewingArgs>;
    /** Событие возникает после удаления основного файла. */
    mainFileDeleted: BasicApiEvent<IMainFileDeletedArgs>;
    /** Событие возникает после удаления дополнительного файла. */
    extraFileDeleted: BasicApiEvent<IExtraFileDeletedArgs>;
    /** Событие возникает после скачивания версии файла. */
    fileVersionDownloaded: BasicApiEvent<IFileVersionDownloadedArgs>;
    /** Событие возникает после загрузки версии файла. */
    fileVersionUploaded: BasicApiEvent<IFileVersionUploadedArgs>;
    /** Событие возникает после открытии файла через WebDAV. */
    fileOpened: BasicApiEvent<IFileOpenedArgs>;
    /** Событие возникает после открытия журнала подписей. */
    signatureListViewed: BasicApiEvent<ISignatureListViewedArgs>;
    /** Событие возникает после подписания файла. */
    signatureCreated: BasicApiEvent<ISignatureCreatedArgs>;
    /** Событие возникает после добавления комментария к версии файла. */
    fileVersionCommentAdded: BasicApiEvent<IFileVersionCommentAddedArgs>;
    /** Событие возникает после удаления комментария к версии файла. */
    fileVersionCommentDeleted: BasicApiEvent<IFileVersionCommentDeletedArgs>;
    /** Событие возникает после добавления основного файла. */
    mainFileAdded: BasicApiEvent<IMainFileAddedArgs>;
    /** Событие возникает после добавления дополнительного файла. */
    extraFileAdded: BasicApiEvent<IExtraFileAddedArgs>;
    /** Событие возникает после открытия окна предварительного просмотра файла. */
    filePreviewed: BasicApiEvent<IFilePreviewedArgs>;
    /** Сервисы. */
    services?: $DocumentCardController & $FileController & $LayoutFileController & $Layout & $RequestManager & $CardId & $RealtimeCommunicationService & $Router & $DeviceType;
}
/**
 * Класс элемента управления Список файлов.
 *
 * Добавляет в web-разметку компонент для управления основными и дополнительныеми файлами карточки.
 * В разметку режима чтения добавляет компонент для добавления основных файлов.
 */
export declare class FileListControl extends BaseControl<FileListControlParams, FileListControlState> {
    protected fileCommentWindowCloser: () => void;
    /** @internal */
    componentWillUnmount(): void;
    protected createParams(): FileListControlParams;
    protected createImpl(): FileListControlImpl;
    private readonly fileListImpl;
    private bindingEditOperation;
    /** Установка раскрытости основных файлов. */
    mainFilesExpanded: boolean;
    /** Установка раскрытости остальных файлов. */
    extraFilesExpanded: boolean;
    /** Установка раскрытости панели управления для работы с файлами. */
    fileCommandBarExpanded: boolean;
    /** Установка раскрытости панели управления для работы с подписями. */
    signCommandBarExpanded: boolean;
    /**
     * Открывает меню добавления основных файлов.
     */
    openAddMainFileDialog(): void;
    /**
     * Открывает меню добавления дополнительных файлов.
     */
    openAddExtraFileDialog(): void;
    /**
     * Открывает журнал подписей.
     */
    openSignListDialog(): void;
    /**
     * Открывает диалоговое окно подписания файлов.
     */
    openSignDialog(): void;
    /**
     * Проверяет возможность открытия указанного файла.
     * @param fileItem Файл.
     * @return true - открытие возможно, иначе - false.
     */
    canRead(fileItem: FileListItem): boolean;
    /**
     * Проверяет возможность редактирования указанного файла.
     * @param fileItem Файл.
     * @return true - редактирование возможно, иначе - false.
     */
    canEdit(fileItem: FileListItem): boolean;
    /**
     * Проверяет возможность удаления указанного файла.
     * @param fileItem Файл.
     * @return true - удаление возможно, иначе - false.
     */
    canDelete(fileItem: FileListItem): boolean;
    /**
     * Проверяет возможность блокировки указанного файла.
     * @param fileItem Файл.
     * @return true - блокировка возможна, иначе - false.
     */
    canLock(fileItem: FileListItem): boolean;
    /**
     * Проверяет возможность комментирования указанного файла.
     * @param fileItem Файл.
     * @return true - комментирование возможно, иначе - false.
     */
    canComment(fileItem: FileListItem): boolean;
    /**
     * Удаляет файл из списка.
     * @param fileItem Файл.
     */
    removeFile(fileItem: FileListItem): JQueryDeferred<any>;
    /**
     * Блокирует файл.
     * @param fileItem файл.
     */
    lockFile(fileItem: FileListItem): void;
    /**
     * Снимает установленную блокировку с файла.
     * @param fileItem Файл.
     */
    unlockFile(fileItem: FileListItem): void;
    /**
     * Открывает диалоговое окно комментирования версии файла.
     * @param fileItem Файл.
     * @param fileVersion Версия файла. Если пропущен, то будет комментироваться текущая версия.
     */
    openCommentsDialog(fileItem: FileListItem, fileVersion?: GenModels.VersionedFileModel): void;
    /**
     * Проверяет раскрыт ли список версий указанного файла.
     * @param fileItem Файл.
     * @return true - раскрыт, false - свернут.
     */
    getVersionsListExpanded(fileItem: FileListItem): boolean;
    /**
     * Сворачивает раскрытый список версий файлов или раскрывает свернутый.
     * @param fileItem Файл.
     */
    toggleVersionsList(fileItem: FileListItem): void;
    /**
     * Открывает предварительный просмотр указанной версии файла.
     * @param fileItem Файл.
     * @param fileVersion Версия файла. Если пропущен, то будет открыта текущая версия.
     */
    openPreview(fileItem: FileListItem, fileVersion?: GenModels.VersionedFileModel): void;
    /**
     * Скачивает (на компьютер) указанную версию файла.
     * @param fileItem Файл.
     * @param fileVersion Версия файла. Если пропущен, то будет скачана текущая версия.
     */
    download(fileItem: FileListItem, fileVersion?: GenModels.VersionedFileModel): void;
    /**
     * Открывает файл с использованием технологии WebDAV.
     * @param fileItem Файл.
     */
    openWebDav(fileItem: FileListItem): void;
    /** @inheritDoc */
    init(): void;
    /** @internal */
    onSaved(): JQueryDeferred<any>;
}
