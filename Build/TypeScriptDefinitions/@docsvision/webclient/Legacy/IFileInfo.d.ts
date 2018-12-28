import { IImageInfo } from "@docsvision/webclient/Legacy/IImageInfo";
export interface IFileInfo {
    /** Идентификатор файла. */
    fileId: string;
    /** Идентификатор карточки файла. */
    fileCardId: string;
    /** Идентификатор версии файла. */
    versionId: string;
    /** Идентификатор карточки-владельца. */
    ownerCardId: string;
    /** Информация об изображении для превью. */
    imageInfo: IImageInfo;
}
