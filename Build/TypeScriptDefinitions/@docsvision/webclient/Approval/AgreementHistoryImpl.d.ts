import { AgreementHistoryParams } from "@docsvision/webclient/Approval/AgreementHistory";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface AgreementHistoryState extends BaseControlState, AgreementHistoryParams {
    model: GenModels.AgreementHistoryDataModel;
    rows?: GenModels.ApprovalHistoryViewModel;
    dialog: ModalWindow;
    isHistoryDataReceived: boolean;
    loading: boolean;
    lastLoadedData: GenModels.ApprovalHistoryViewModel;
}
/** @internal */
export declare type AgreementHistoryImplState = AgreementHistoryState;
/** @internal */
export declare type AgreementHistoryImplProps = AgreementHistoryState;
/** @internal */
export declare class AgreementHistoryImpl extends BaseControlImpl<AgreementHistoryParams, AgreementHistoryImplState> {
    /** @internal */
    constructor(props: AgreementHistoryParams, state: AgreementHistoryState);
    /** �������� �����. */
    showReport(): void;
    /** �������� �����. */
    hideReport(): void;
    /** ����� �� ���������� �����. */
    canShowReport(): boolean;
    /** �������� ������ �� ������� ������������. */
    loadData(): JQueryDeferred<GenModels.ApprovalHistoryViewModel>;
    /**
     * ��������� ����������� �������.
     * @param dialog ���������� ����
     * @param data ������ �� ������� ������������
     */
    renderDialogContent(dialog: ModalWindow, data: GenModels.ApprovalHistoryViewModel): void;
    /** ���������� ������. */
    refreshReport(): void;
    /** ������� �� �����. */
    readonly isReportShown: boolean;
    /** ��������� �������� */
    renderControl(): JSX.Element;
    /** ��������� ������ �������� ���� ������������. */
    renderButton(): JSX.Element;
    /** ��������� ������� � ����� ������������. */
    renderInlineTable(): JSX.Element;
}
