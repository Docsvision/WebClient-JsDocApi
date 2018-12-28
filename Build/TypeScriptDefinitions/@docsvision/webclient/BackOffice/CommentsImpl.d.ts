import { CommentsParams, CommentsState } from "@docsvision/webclient/BackOffice/Comments";
import { CommentModel } from '@docsvision/webclient/BackOffice/CommentModel';
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
export interface CommentsImplState extends BaseControlImplState, CommentsState {
    addingComment: CommentModel;
    editingComment: CommentModel | undefined;
    textArea: HTMLElement;
}
export declare class CommentsImpl extends BaseControlImpl<CommentsParams, CommentsImplState> {
    private deletedComments;
    private addCommentOnce;
    private updateCommentOnce;
    constructor(props: CommentsParams);
    refresh(): JQueryDeferred<any>;
    addComment(text: string): JQueryDeferred<any>;
    updateComment(commentId: string, text: string): JQueryDeferred<any>;
    deleteComment(commentId: string): JQueryDeferred<any>;
    restoreComment(commentId: string): JQueryDeferred<any>;
    private onAddComment;
    private onUpdateComment;
    private onCancelEditComment;
    private onCancelAddComment;
    private onEditComment;
    private onDeleteComment;
    private onRestoreComment;
    private onAddingCommentTextChange;
    private onEditingCommentTextChange;
    private onShowAllCommentsButtonClick;
    protected onDataChanged(eventArgs: IDataChangedEventArgsEx<GenModels.Comment[]>): void;
    renderControl(): JSX.Element;
}
