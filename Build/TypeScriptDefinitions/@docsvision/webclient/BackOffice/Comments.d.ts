import { ICommentEventArgs } from "@docsvision/webclient/BackOffice/ICommentEventArgs";
import { CommentModel } from '@docsvision/webclient/BackOffice/CommentModel';
import { $CommentsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $CurrentEmployeeId, $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { $CardInfo, $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Публичные свойства для контрола {@link Comments}.
 */
export declare class CommentsParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Список комментариев. */
    comments: Array<CommentModel>;
    /** Источник данных. */
    commentsDataSource: GenModels.CommentsDataSourceModel;
    /** Количество комментариев. */
    allCommentsCount: number;
    /** Максимальное количество отображаемых комментариев. */
    maxVisibleComments: number;
    /** Плейсхолдер */
    placeHolder: string;
    /** Ширина блока комментария. */
    commentWidth?: string;
    /** Событие, возникающее после добавления комментария. */
    commentAdded?: BasicApiEvent<ICommentEventArgs>;
    /** Событие, возникающее перед добавлением комментария. */
    commentAdding?: CancelableApiEvent<ICommentEventArgs>;
    /** Событие, возникающее после удаления комментария. */
    commentDeleted?: BasicApiEvent<ICommentEventArgs>;
    /** Событие, возникающее перед удалением комментария. */
    commentDeleting?: CancelableApiEvent<ICommentEventArgs>;
    /** Событие, возникающее после изменения комментария. */
    commentEdited?: BasicApiEvent<ICommentEventArgs>;
    /** Событие, возникающее перед изменением комментария. */
    commentEditing?: CancelableApiEvent<ICommentEventArgs>;
    /** Событие, возникающее после изменения списка комментариев. */
    dataChanged?: BasicApiEvent<IDataChangedEventArgsEx<GenModels.Comment[]>>;
    /** Можно ли добавлять новые комментарии. */
    canComment: boolean;
    /** Можно ли изменять собственные комментарии. */
    canEditSelf: boolean;
    /** Можно ли изменять все комментарии. */
    canEditAll: boolean;
    services?: $CommentsController & $CurrentEmployeeId & $CardInfo & $LayoutInfo & $EditOperationStore & $DeviceType;
}
/** @internal */
export interface CommentsState extends CommentsParams, BaseControlState {
}
/**
 * Представляет элемент управления для отображения списка комментариев.
 */
export declare class Comments extends BaseControl<CommentsParams, CommentsState> {
    protected createParams(): CommentsParams;
    private readonly CommentsImpl;
    protected canComment: IBindingResult<{}>;
    protected canEditSelf: IBindingResult<{}>;
    protected canEditAll: IBindingResult<{}>;
    protected comments: IBindingResult<GenModels.CommentsModel>;
    /** Обновление комментариев. */
    refresh(): void;
    /**
     * Добавление комментария.
     * @param text Текст нового комментария
     */
    addComment(text: string): JQueryDeferred<{}>;
    /**
     * Изменение комментария
     * @param commentId Идентификатор комментария
     * @param text Текст комментария
     */
    updateComment(commentId: string, text: string): JQueryDeferred<{}>;
    /**
     * Удаление комментария
     * @param commentId Идентификатор комментария
     */
    deleteComment(commentId: string): JQueryDeferred<{}>;
    /** @internal */
    render(): JSX.Element;
}
