/** @internal */
export interface IFileCommentCallbacks {
    beforeAddCallback: (commentText: string) => JQueryDeferred<any>;
    beforeDeleteCallback: (commentId: string) => JQueryDeferred<any>;
    afterAddCallback: (commentText: string) => void;
    afterDeleteCallback: (commentId: string) => void;
}
