export interface IGetFilePreviewModelParams {
    fileInfo: {
        /** Идентификатор файла. */
        fileId: string;
        /** Идентификатор карточки файла. */
        fileCardId: string;
        /** Идентификатор версии файла. */
        versionId: string;
        /** Идентификатор карточки-владельца. */
        ownerCardId: string;
    };
    /** Текущий номер страницы. */
    pageIndex: number;
}
