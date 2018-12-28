import { IApprovalStageItemRowProps } from "@docsvision/webclient/Approval/IApprovalStageItemRowProps";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export declare class ApprovalStageItemRow extends React.Component<IApprovalStageItemRowProps, any> {
    /** @internal */
    constructor(props: any);
    /** ����� �������. */
    private readonly decisionText;
    /** ����� ������� */
    private readonly decisionClass;
    /** ���������� �� ������� ��� ���. */
    private readonly waitingForDecision;
    /** ��� ����� �� �����������. */
    protected handleCommentClick(): void;
    /**
     * ��� ����� �� ����� � ��������.
     * @param file ���� � ��������
     */
    protected handleCorrectionFileClick(file: GenModels.ApprovalHistoryFileModel): void;
    /** ��� ����� �� ������� �����. */
    protected handleStageRowClick(): void;
    /** @internal */
    render(): JSX.Element;
}
