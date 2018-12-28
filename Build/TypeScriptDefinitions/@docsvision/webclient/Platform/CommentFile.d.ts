import { $LayoutFileApiController, $LayoutFileController, $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { CommentFileImpl, CommentFileState } from "@docsvision/webclient/Platform/CommentFileImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { $CardInfo, $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { EditMode } from "@docsvision/webclient/System/EditMode";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
/**
 * Публичные свойства для контрола {@link CommentFile}.
 */
export declare class CommentFileParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Информация о текущей выбранной карточке. */
    value?: GenModels.CommonFileModel;
    /** Доступно редактирование значения или нет (согласно операции редактирования). */
    canEdit?: boolean;
    /** Обязатально ли необходимо ввести значение данного контрола. */
    required?: boolean;
    /** Текст метки */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /** Всплывающая подсказка */
    tip?: string;
    /** Текст, которые будет показываться при отсутсвии файла. */
    placeHolder?: string;
    /** Проверка, доступно ли редактирование файла через WebDav. */
    webDavSupported?: boolean;
    /** Режим редактирования контрола - просмотр или просмотр и редактирование значения. */
    editMode?: EditMode;
    /** Открывать предпросмотр по щелчку по имени файла (true, по умолчанию), или в соответствующем пункте меню (false). */
    previewOnClick?: boolean;
    /** Событие, возникающее перед очисткой значения. */
    fileDeleting?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после очистки значения. */
    fileDeleted?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед открытием окна выбора файла */
    fileSelecting?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия окна выбора файла, но до загрузки файла на сервер и установления значения контрола. */
    fileSelected?: CancelableApiEvent<File>;
    /** Событие, возникающее перед открытием файла через WebDav. */
    webDavOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие возникающее при изменении значения элемента управления. */
    dataChanged?: BasicApiEvent<IDataChangedEventArgsEx<GenModels.CommonFileModel>>;
    /** Событие, возникающее перед открытием предпросмотра файла. */
    filePreviewOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия предпросмотра файла. */
    filePreviewOpened?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед скачиванием файла. */
    fileDownloading?: CancelableApiEvent<IEventArgs>;
    services?: $FileController & $LayoutFileController & $LayoutFileApiController & $LayoutLinksController & $CardInfo & $EditOperationStore & $LayoutInfo;
}
/**
 * Представляет элемент управления для редактирования файла замечаний.
 */
export declare class CommentFile extends BaseControl<CommentFileParams, CommentFileState> {
    constructor(props: CommentFileParams);
    /** Возвращает URL для скачивания файла. */
    getDownloadLink: () => void;
    /** Открывает предпросмотр файла */
    openFilePreview(): void;
    /** Удаляет файл и очищает значение контрола */
    removeFile(): void;
    /** Открывает системный диалог выбора файла. */
    openSelectFileDialog(): void;
    /** @internal */
    protected readonly checkWebDavSupported: boolean;
    /** @internal */
    protected createParams(): CommentFileParams;
    /** @internal */
    protected createImpl(): CommentFileImpl;
    /** @inheritDoc */
    validate(params: any): IValidationResult[];
    /** @internal */
    private binding;
    /** @internal */
    protected value: GenModels.CommonFileModel;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
}
