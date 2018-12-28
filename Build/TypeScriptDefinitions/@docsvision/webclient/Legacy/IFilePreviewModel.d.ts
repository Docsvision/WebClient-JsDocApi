import { IFileInfo } from "@docsvision/webclient/Legacy/IFileInfo";
import { IFileModel } from "@docsvision/webclient/Legacy/IFileModel";
export interface IFilePreviewModel {
    /** Информация о файле. */
    fileInfo: IFileInfo;
    /** Информация о модели файла. */
    fileModel: IFileModel;
    /** Текущий номер страницы. */
    pageIndex: number;
    /** Общее количество страниц. */
    pageCount: number;
    /** Включено ли изменение размеров превью. */
    enableScaling: boolean;
}
