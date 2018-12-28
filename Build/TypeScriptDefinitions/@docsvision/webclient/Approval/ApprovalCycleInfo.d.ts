import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import React from "react";
/** @internal */
export interface IApprovalCycleInfoProps extends GenModels.ApprovalHistoryCycleModel {
    services: $FileController;
}
/** @internal */
export declare class ApprovalCycleInfo extends React.Component<IApprovalCycleInfoProps, any> {
    constructor(props: any);
    render(): JSX.Element;
}
