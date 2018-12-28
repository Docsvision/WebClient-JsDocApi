import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal Свойства для {@link FileComments} */
export interface IFileCommentsProps {
    /** Идентификатор карточки файла. */
    fileCardId: string;
    /** Идентификатор версии файла */
    versionId: string;
    /** Можно ли создать новый комментарий. */
    canCreateComment?: () => boolean;
    /** Можно ли изменить последний комментарий. */
    canEditLastComment?: () => boolean;
    /** Можно ли удалить последний комментарий. */
    canDeleteLastComment?: () => boolean;
    /** Заголовок блока с комментариями. */
    title?: string;
    /** Своя функция отрисовки. */
    customRender?: (component: FileComments) => React.ReactNode;
    /** Перед добавлением комментария. */
    onAdding?: (commentText: string) => JQueryDeferred<any>;
    /** После добавления комментария. */
    onAdded?: (commentText: string) => void;
    /** Перед изменением комментария. */
    onEditing?: (commentId: string, commentText: string) => JQueryDeferred<any>;
    /** После изменения комментария. */
    onEdited?: (commentId: string, commentText: string) => void;
    /** Перед удалением комментария. */
    onDeleting?: (commentId: string) => JQueryDeferred<any>;
    /** После удаления комментария. */
    onDeleted?: (commentId: string) => void;
    services: $LayoutFileController;
    /** После любого изменения комментариев */
    onChaged?: (comments: GenModels.VersionedFileCommentModel[]) => void;
}
/** @internal */
export interface IFileCommentsState {
    /** Название файла. */
    fileName: string;
    /** Автор файла. */
    fileAuthor: string;
    /** Дата создания файла. */
    fileCreationDate: string;
    /** Версия файла. */
    version: string;
    /** Timestamp карточки файла. */
    timestamp?: number;
    /** Список комментариев. */
    comments: GenModels.VersionedFileCommentModel[];
    /** Содержимое поля ввода комментария. */
    commentInputText: string;
    /** Было ли изменено поле комментария после последней отправки. */
    isCommentInputDirty: boolean;
    /** Находилось ли поле комментария в фокусе хотя бы один раз после последнего сохранения/отмены комментария. */
    wasCommentInputFocused: boolean;
    /** Если указан, то в форме с комментарием мы редактируем существующий комментарий. Иначе - создаём новый. */
    editCommentId: string;
    /** Загружаются ли в данный момент данные для предпросмотра файла. */
    isLoading: boolean;
    /** Помощник для загрузки данных о списке комментариев. */
    loadingHelper: RequestHelper;
    deleteRequestHelper: RequestHelper;
}
export declare class FileComments extends React.Component<IFileCommentsProps, IFileCommentsState> {
    protected commentsContainer: HTMLElement;
    protected commentInput: HTMLTextAreaElement;
    constructor(props: IFileCommentsProps);
    /** @internal */
    componentDidMount(): void;
    /** Устанавливает новое значение комментария. */
    setCommentInputText: (newText: string, options?: {
        trim?: boolean;
        notSetDirty?: boolean;
    }) => void;
    getFilteredCommentInputText: () => string;
    /** Загружаются ли комментарии в данный момент */
    readonly isLoading: boolean;
    protected availableBuiltIn(id: string): boolean;
    /** Можно ли создать новый комментарий. */
    protected canCreateComment(): boolean;
    /** Можно ли изменить последний комментарий. */
    protected canEditLastComment(): boolean;
    /** Можно ли удалить последний комментарий. */
    protected canDeleteLastComment(): boolean;
    /** Загрузить список комментариев. */
    protected load: () => JQueryDeferred<GenModels.VersionedFileCommentModel[]>;
    /** При изменении поля ввода комментария. */
    protected onCommentInputChange: (event: React.FormEvent<any>) => void;
    /** При фокусе поля ввода комментария. */
    protected onCommentInputFocus: (event: React.FocusEvent<any>) => void;
    /** При создании/изменении комментария. */
    protected onApplyComment: (event: React.FocusEvent<any>) => void;
    /** При изменении комментария. */
    protected onEditCommentButtonPress: (comment: GenModels.VersionedFileCommentModel) => void;
    /** Очищает поле для комментария. */
    protected clearCommentInput: () => void;
    /** При удалении комментария. */
    protected onDeleteComment: (comment: GenModels.VersionedFileCommentModel) => void;
    /** @internal Отрисовка заголовка блока с комментариями. */
    renderHeader(): JSX.Element;
    /** @internal Отрисовка блока с комментариями. */
    renderComments(): JSX.Element;
    /** @internal Отрисовка формы для создания/изменения комментария. */
    renderForm(): JSX.Element;
    /** @internal */
    render(): {};
}
