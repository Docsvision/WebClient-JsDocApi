/** @internal */
export interface ILinkInfoPopoverState {
    commentText: string;
    tooLongError: boolean;
    maxCommentLength: number;
    editInProcess?: boolean;
    saving?: boolean;
    /** @deprecated */
    commentEditInput?: HTMLTextAreaElement;
}
