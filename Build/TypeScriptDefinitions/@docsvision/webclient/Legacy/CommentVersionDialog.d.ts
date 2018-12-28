import { IFileCommentCallbacks } from "@docsvision/webclient/Legacy/IFileCommentCallbacks";
/** @deprecated Используйте {@link Helpers.ShowFileComments} */
export declare class CommentVersionDialog {
    FormActionUrl: string;
    DeleteUrl: string;
    AddCommentsEnabled: boolean;
    OnClosedCallback: (dialog: CommentVersionDialog) => void;
    CommentsChanged: boolean;
    ShowDialog(item: Element): void;
    ShowDialogEx(isPreview: string, cardId: string, fileCardId: string, timestamp: string, versionId: string, callbacks?: IFileCommentCallbacks): void;
}
