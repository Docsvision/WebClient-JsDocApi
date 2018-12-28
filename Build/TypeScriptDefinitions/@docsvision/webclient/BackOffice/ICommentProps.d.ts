import { CommentModel } from '@docsvision/webclient/BackOffice/CommentModel';
import { GenModels } from '@docsvision/webclient/Generated/DocsVision.WebClient.Models';
export interface ICommentProps {
    className?: string;
    data: CommentModel;
    prevData: CommentModel;
    currentEmployeeId: string;
    isShowDate: boolean;
    canEditSelf: boolean;
    canEditAll: boolean;
    commentWidth: string;
    editComment: (comment: GenModels.Comment) => void;
    deleteComment: (comment: GenModels.Comment) => void;
    restoreComment: (comment: GenModels.Comment) => void;
}
