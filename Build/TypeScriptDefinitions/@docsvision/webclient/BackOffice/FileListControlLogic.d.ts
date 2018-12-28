import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { FileListItem } from "@docsvision/webclient/BackOffice/FileListItem";
import { FileListControlParams } from "@docsvision/webclient/BackOffice/FileListControl";
import { FileListControlImpl, FileListImplState } from "@docsvision/webclient/BackOffice/FileListControlImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class FileListControlLogic {
    mainAttach: FileListAttachedElements;
    extraAttach: FileListAttachedElements;
    initialized: boolean;
    lastSaveDeferred: JQueryDeferred<any>;
    parent: FileListControlImpl;
    filesToRemove: FileListItem[];
    constructor();
    init(_mainAttach: FileListAttachedElements, _extraAttach: FileListAttachedElements, _parent: FileListControlImpl): void;
    loadFilesFromModel(model: GenModels.FileListDataModel, oldFiles?: FileListItem[]): FileListItem[];
    loadFileModel(model: GenModels.FileListDataModel, appendFiles?: boolean): void;
    onSaved(): JQueryDeferred<any>;
    uploadNewFiles(): JQueryDeferred<any>;
    sendRequest(sendFunc: () => JQueryDeferred<GenModels.FileListDataModel>, savingItems: FileListItem[]): JQueryDeferred<any>;
    getFiles(mainFiles: boolean): FileListItem[];
    initJQueryUploaderForAddFiles(attach: FileListAttachedElements, main: boolean): void;
    initJQueryUploaderForAddFileVersions(attach: FileListAttachedElements, fileItem: FileListItem): void;
    download(fileItem: FileListItem, fileVersion: GenModels.VersionedFileModel, action: string): void;
    getDownloadUrl(fileItem: FileListItem, fileVersion: GenModels.VersionedFileModel, action: string): string;
    webDav(fileItem: FileListItem, canEdit: boolean): void;
    /**
     * Mark file for remove, or send remove request imediately
     * @param fileItem File to remove
     * @param immediately Send request to the server right now, or wait onSaved
     */
    removeFile(fileItem: FileListItem, immediately: boolean): JQueryDeferred<any>;
    protected removeFileFromServer(fileItem: FileListItem): JQueryDeferred<any>;
    showPreviewIfSupported(fileItem: FileListItem, version?: GenModels.VersionedFileModel): void;
    /** @deprecated  Use {@link Helpers.ShowFilePreview} */
    getFilePreviewUrl(fileItem: FileListItem, action: string, version?: GenModels.VersionedFileModel, pageIndex?: number): string;
    lockFile(fileItem: FileListItem): void;
    unlockFile(fileItem: FileListItem): void;
    showCommentsDialog(fileItem: FileListItem, versionId: string, enableAddComments: boolean): () => void;
    loadFilesPart(skipCount: number, maxCount?: number): JQueryDeferred<void>;
    reloadFiles(): JQueryDeferred<void>;
    protected updateVersionsOnLoad(): void;
    closeAllMenusBut(fileItem: FileListItem): void;
    removeFileItem(index: number): void;
    clearFileItems(): void;
    protected readonly state: FileListImplState;
    protected readonly props: FileListControlParams;
    protected deinitFileItem(item: FileListItem): void;
    protected initJQueryUploader(attach: FileListAttachedElements, options: any): void;
    protected onFilesAdded(main: boolean, attach: FileListAttachedElements, e: any, data: any): void;
    protected onFileVersionAdded(fileItem: FileListItem, attach: FileListAttachedElements, data: any): void;
    protected sendFiles(attach: FileListAttachedElements, items: FileListItem[], areVersions?: boolean): JQueryDeferred<any>;
    protected processResponse(responseData: GenModels.FileListDataModel, deferred: JQueryDeferred<any>, uploadingItems: FileListItem[], areVersions?: boolean): void;
    protected getItemsToUpload(): FileListItem[];
}
