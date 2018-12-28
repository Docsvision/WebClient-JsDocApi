import { DashboardContainerParams } from "@docsvision/webclient/Platform/DashboardContainer";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export interface DashboardContainerState extends DashboardContainerParams, PanelState {
}
/** @deprecated */
export declare type DashboardContainerImplState = DashboardContainerState;
/** @internal */
export declare class DashboardContainerImpl<PropsT extends DashboardContainerParams, StateT extends DashboardContainerState> extends PanelImpl<PropsT, StateT> {
    constructor(props: PropsT, state: StateT);
    renderControl(): JSX.Element;
}
