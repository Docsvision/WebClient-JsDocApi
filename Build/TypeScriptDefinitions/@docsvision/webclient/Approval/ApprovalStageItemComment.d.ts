import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import React from "react";
/** @internal */
export interface IApprovalStageItemCommentProps extends GenModels.ApprovalHistoryStageItemModel {
    services: $FileController & $LayoutFileController;
}
/** @internal */
export declare class ApprovalStageItemComment extends React.Component<IApprovalStageItemCommentProps, any> {
    /** @internal */
    constructor(props: any);
    /** При клике на файл комментария. */
    protected hanldeCommentFileClick(e: any): void;
    /** @internal */
    render(): JSX.Element;
}
