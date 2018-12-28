import { ChildTasksPerformingImpl, State } from "@docsvision/webclient/BackOffice/ChildTasksPerformingImpl";
import { ISelectionEventArgs } from "@docsvision/webclient/BackOffice/ISelectionEventArgs";
import { $LayoutTasksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { CancelableApiDataEvent } from "@docsvision/webclient/System/DataLoadEvent";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { $RouterNavigation } from "@docsvision/webclient/System/$Router";
/**
 * Содержит публичные свойства элемента управления {@link ChildTasksPerforming}.
 */
export declare class Params extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Текст, который отображается на кнопке вызова диалога копирования */
    buttonText?: string;
    /**
     * Определяет на какую глубину вложенности использовать подчиненные задания для копирования.
     * Уровень 1 = только непостредственно подчиненные к текущему.
     */
    childTaskNestingLevel?: number;
    /** Информация о том, где в карточке хранится комментарий. */
    commentBindingInfo?: GenModels.SimpleBindingInfo;
    /** Информация о том, где в карточке хранится файл комментария. */
    commentFileBindingInfo?: GenModels.SimpleBindingInfo;
    /** Доступно ли копирование комментариев. */
    canCopyComments?: boolean;
    /** Доступно ли копирование файлов комментариев. */
    canCopyCommentFiles?: boolean;
    /** Комментарии, выбранные для копирования в диалоге.  */
    selectedComments: GenModels.ChildTaskCommentModel[];
    /** Файл комментария, выбранный для копирования в диалоге. */
    selectedFile: GenModels.CommonFileModel;
    /** Загруженная информация о дочерних заданиях. */
    comments: GenModels.ChildTaskCommentModel[];
    /** Открыт ли в данный момент диалог копирования комментариев. */
    dialogIsOpen: boolean;
    /** Содержит ли текущее задание файл комментария или нет. Параметр доступен только после открытия диалога. */
    taskHasOwnCommentFile?: boolean;
    /** Событие, возникающее перед открытием диалога. */
    dialogOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия диалога. */
    dialogOpened?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед закрытием диалога. */
    dialogClosing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после закрытия диалога. */
    dialogClosed?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед копированием комментариев в карточку. */
    childDataCopying?: CancelableApiDataEvent<GenModels.AddTaskCommentsRequestModel, void>;
    /** Событие, возникающее после копирования комментариев в карточку. */
    childDataCopied?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед изменением выделения. */
    selectionChanging?: CancelableApiEvent<ISelectionEventArgs>;
    /** Событие, возникающее после изменения выделения. */
    selectionChanged?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед открытием превью файла. */
    filePreviewing?: CancelableApiEvent<GenModels.CommonFileModel>;
    /** Событие, возникающее после открытия превью файла. */
    filePreviewOpened?: BasicApiEvent<GenModels.CommonFileModel>;
    /** Событие, возникающее перед открытием превью файла. */
    fileDownloading?: CancelableApiEvent<GenModels.CommonFileModel>;
    /** Событие, возникающее перед открытием файла. */
    fileOpening?: CancelableApiEvent<GenModels.CommonFileModel>;
    /** Событие, возникающее перед загрузкой данных подчиненных заданий. */
    dataLoading?: CancelableApiDataEvent<GenModels.GetChildTasksCommentsRequestModel, GenModels.GetChildTasksCommentsResponseModel>;
    /** Событие, возникающее после загрузки данных подчиненных заданий. */
    dataLoaded?: CancelableApiDataEvent<GenModels.GetChildTasksCommentsRequestModel, GenModels.GetChildTasksCommentsResponseModel>;
    /** Событие, возникающее перед перезагрузкой текущей разметки, выполняемой после копирования комментариев в карточку. */
    cardRefreshing?: CancelableApiEvent<IEventArgs>;
    services?: $EditOperationStore & $CardId & $LayoutTasksController & $DeviceType & $RouterNavigation;
}
/**
 * Контрол предназначен для реализации возможности копирования комментариев и файлов из подчиненных заданий в текущее задание согласования.
 */
export declare class ChildTasksPerforming extends BaseControl<Params, State> {
    /** @internal */
    protected createParams(): Params;
    /** @internal */
    protected createImpl(): ChildTasksPerformingImpl;
    private binding;
    private commentBinding;
    private commentFileBinding;
    private dialogIsOpen;
    private readonly taskHasOwnCommentFile;
    /** Открывает окно выбора комментариев. Равносильно нажатию кнопки. */
    openDialog(): JQueryDeferred<void>;
    /** Закрывает диалог без копирования выбранных комментариев. */
    closeDialog(): JQueryDeferred<void>;
    /** Копирует выбранные комментарии и файл комментария, после чего закрывает диалог. */
    copyAndCloseDialog(): JQueryDeferred<void>;
    /** Выбирает в диалоге все текстовые комментарии для копирования. */
    selectAll(): JQueryDeferred<void>;
    /** Отменяет выбор всех текстовых комментариев в диалоге. */
    unselectAll(): JQueryDeferred<void>;
}
