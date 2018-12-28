import { AcquaintanceManagementParams } from "@docsvision/webclient/Approval/AcquaintanceManagement";
import { MultipleEmployees } from "@docsvision/webclient/BackOffice/MultipleEmployees";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { DateTimePicker } from "@docsvision/webclient/Platform/DateTimePicker";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
export interface AcquaintanceManagementState extends AcquaintanceManagementParams, PanelState {
    cardId: string;
    children: GenModels.ControlModel[];
    lastLoading: JQueryDeferred<GenModels.ControlModel[]>;
    isOpened: boolean;
    receivers: MultipleEmployees;
    considerationDate: DateTimePicker;
    loading: boolean;
}
/** @internal */
export declare type AcquaintanceManagementImplState = AcquaintanceManagementState;
export declare type AcquaintanceManagementImplProps = AcquaintanceManagementState;
/** @internal */
export declare class AcquaintanceManagementImpl extends PanelImpl<AcquaintanceManagementParams, AcquaintanceManagementState> {
    constructor(props: AcquaintanceManagementParams, state: AcquaintanceManagementState);
    open(): void;
    close(): void;
    readonly isOpened: boolean;
    attachReceivers(control: any): void;
    attachConsiderationDate(control: any): void;
    onMainButtonClick(): void;
    onSendClick(): void;
    onCancelClick(): void;
    renderControl(): JSX.Element;
}
