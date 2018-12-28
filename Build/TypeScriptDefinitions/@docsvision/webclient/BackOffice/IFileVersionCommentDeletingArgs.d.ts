import { IFileListItem } from "@docsvision/webclient/BackOffice/IFileListItem";
export interface IFileVersionCommentDeletingArgs {
    fileItem: IFileListItem;
    commentId: string;
}
