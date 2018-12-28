import { IApprovalHistoryTableProps } from "@docsvision/webclient/Approval/IApprovalHistoryTableProps";
import { IApprovalHistoryTableState } from "@docsvision/webclient/Approval/IApprovalHistoryTableState";
import React from "react";
/** @internal */
export declare class ApprovalHistoryTable extends React.Component<IApprovalHistoryTableProps, IApprovalHistoryTableState> {
    /** @internal */
    constructor(props: IApprovalHistoryTableProps);
    /** @internal */
    componentWillReceiveProps(nextProps: IApprovalHistoryTableProps, nextContext: any): void;
    /** При клике на цикл. */
    protected handleCycleClick(cycleNumber: any): void;
    /** При клике на обновление. */
    protected onRefreshClick(): void;
    /** @internal */
    render(): JSX.Element;
}
