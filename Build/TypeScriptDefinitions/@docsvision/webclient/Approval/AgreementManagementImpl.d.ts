import { AgreementManagementParams } from "@docsvision/webclient/Approval/AgreementManagement";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IComboBoxElement } from "@docsvision/webclient/Helpers/ComboBox/Data/ClientModels/IComboBoxElement";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface AgreementManagementState extends AgreementManagementParams, BaseControlState {
    agreementManagementModel: GenModels.AgreementManagementModel;
    refresh: Function;
    IsTemplateDataReceived: boolean;
    startLoading: boolean;
    startDisabled: boolean;
    startSidebarShown: boolean;
    managementLoaging: boolean;
    managementSidebarShown: boolean;
    agreementManagementStartModel: GenModels.AgreementManagementStartModel;
    editModel: GenModels.AgreementManagementEditModel;
    stageLoading: LoadingState;
    showInterruptBtn: boolean;
    currentStageId: string;
    availableButtons: number;
}
/** @internal */
export declare type AgreementManagementImplState = AgreementManagementState;
/** @internal */
export declare class AgreementManagementImpl extends BaseControlImpl<AgreementManagementParams, AgreementManagementState> {
    approvalOperationButtonNames: any;
    constructor(props: AgreementManagementParams, state: AgreementManagementState);
    componentWillReceiveProps(nextProps: any, nextContext: any): void;
    readonly ApprovalOperationButtonNames: any;
    protected onTemplateSelect(val: IComboBoxElement): Promise<void>;
    protected onCancelClick(start: boolean): void;
    onSendClick(): Promise<void>;
    protected onSaveClick(): void;
    protected onInterruptClick(): Promise<void>;
    protected onOperationButtonClick(operation: GenModels.ApprovalOperationKind): Promise<void>;
    start(): JQueryDeferred<{}>;
    protected handleLoadingErrorOnSidebarOpen(loadingTimer: any): void;
    hideStartSidebar(cancel?: boolean): Promise<void>;
    edit(): JQueryDeferred<{}>;
    hideManagementSidebar(): void;
    protected handleClick(event: React.MouseEvent<any>): void;
    protected handleMouseOver(event: React.MouseEvent<any>): void;
    protected handleMouseOut(event: React.MouseEvent<any>): void;
    protected handleStartAgreement: (e: React.MouseEvent<any>) => void;
    protected handleEditAgreement: (e: Event) => void;
    getAvailableOperations(): GenModels.ApprovalOperationKind[];
    onManageButtonClick(buttonKind: GenModels.ApprovalOperationKind): void;
    protected getCssClass(): string;
    protected getButtonName: (operationKind: GenModels.AgreementManagementOperations) => string;
    protected getTemplateComboBoxProps(): any;
    protected getTemplateComboBoxElements(): any;
    readonly canStart: boolean;
    readonly canManage: boolean;
    renderControl(): JSX.Element;
    protected renderCreateView(): JSX.Element;
    protected renderCreateSidebar(): JSX.Element;
    protected renderManageView(): JSX.Element;
    protected renderManagementSidebarButtons(): JSX.Element[];
    protected renderManagementSidebar(): JSX.Element;
}
