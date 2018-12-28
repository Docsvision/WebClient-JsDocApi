import { FolderDashboardWidgetParams } from "@docsvision/webclient/Platform/FolderDashboardWidget";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export interface FolderDashboardWidgetState extends FolderDashboardWidgetParams, PanelState {
}
/** @deprecated */
export declare type FolderDashboardWidgetImplState = FolderDashboardWidgetState;
/** @internal */
export declare class FolderDashboardWidgetImpl<PropsT extends FolderDashboardWidgetParams, StateT extends FolderDashboardWidgetState> extends PanelImpl<PropsT, StateT> {
    constructor(props: PropsT, state: StateT);
    getHeader(): string;
    getNavigationHref(): string;
    renderControl(): JSX.Element;
}
