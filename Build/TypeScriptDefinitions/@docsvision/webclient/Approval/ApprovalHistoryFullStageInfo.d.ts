import React from "react";
/** @internal */
export declare class ApprovalHistoryFullStageInfo extends React.Component<any, any> {
    /** @internal */
    constructor(props: any);
    /** @internal */
    render(): JSX.Element;
    /** ������������ �����������. */
    renderComment(): JSX.Element;
    /** ������������ ���� �����������. */
    renderCommentFile(): JSX.Element;
    /** ������������ ������. */
    renderCorrections(): JSX.Element;
    protected handleCorrectionFileClick(file: any): void;
    protected hanldeCommentFileClick(e: any): void;
}
