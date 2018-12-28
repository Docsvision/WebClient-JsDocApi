import { AgreementStageProps } from "@docsvision/webclient/Approval/AgreementStageProps";
import { AgreementStageState } from "@docsvision/webclient/Approval/AgreementStageState";
import { StageModelWithChange } from "@docsvision/webclient/Approval/StageModelWithChange";
import { Employee } from "@docsvision/webclient/BackOffice/Employee";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IComboBoxElement } from "@docsvision/webclient/Helpers/ComboBox/Data/ClientModels/IComboBoxElement";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import React from "react";
/** @internal */
export declare class AgreementStage extends React.Component<AgreementStageProps, AgreementStageState> {
    /** @internal */
    state: AgreementStageState;
    approvalTypeIcons: {
        [key: number]: string;
    };
    approvalStageSemanticStyle: {
        [key: number]: string;
    };
    constructor(props: AgreementStageProps);
    onToggleClick(ev: React.MouseEvent<any>): void;
    onStageCheckChange(val: boolean): void;
    onDeleteApproverClick(id: string): Promise<void>;
    onExcludeCheckChange(event: any, id: string): void;
    onEmployeeChanged(sender: any, args: IDataChangedEventArgs): Promise<void>;
    onDurationChanged(sender: any, args: IDataChangedEventArgs): void;
    onDurationTypeSelect(selectedType: IComboBoxElement): void;
    onReconcileTypeSelect(selectedType: IComboBoxElement): void;
    onInterruptStageClick(event: any): void;
    attachApprover(control: Employee): void;
    getButtonName(operationKind: GenModels.AgreementManagementOperations): string;
    getReconcileTypeElements(): {
        elements: IComboBoxElement[];
    };
    getReconcileDurationTypeElements(): {
        elements: IComboBoxElement[];
    };
    getSematicStyle(stage: StageModelWithChange): string;
    renderComboboxTitleWithIcon: (element: IComboBoxElement) => JSX.Element;
    renderComboboxElementWithIcon: (element: IComboBoxElement, selected: boolean) => JSX.Element;
    renderApprover(approver: GenModels.ApproverEmployeeModel): JSX.Element;
    renderApproversList(approvers: GenModels.ApproverModel[], editable: any, hasBusinessProc: any, excluded: any): JSX.Element;
    renderOtherSettings(stage: StageModelWithChange): JSX.Element;
    render(): JSX.Element;
}
