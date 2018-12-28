export interface IFileModel {
    /** Идентификатор файла. */
    fileId: string;
    /** Название файла. */
    name: string;
    /** Размер файла. */
    size: number;
    /** Локализованное название единиц измерения размера файла. */
    localizedDisplaySizeName: string;
    changeDate: Date;
}
