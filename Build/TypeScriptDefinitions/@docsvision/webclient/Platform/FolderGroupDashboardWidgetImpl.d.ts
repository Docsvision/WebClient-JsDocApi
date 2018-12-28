import { FolderGroupDashboardWidgetParams } from "@docsvision/webclient/Platform/FolderGroupDashboardWidget";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export interface FolderGroupDashboardWidgetState extends FolderGroupDashboardWidgetParams, PanelState {
}
/** @deprecated */
export declare type FolderGroupDashboardWidgetImplState = FolderGroupDashboardWidgetState;
/** @internal */
export declare class FolderGroupDashboardWidgetImpl<PropsT extends FolderGroupDashboardWidgetParams, StateT extends FolderGroupDashboardWidgetState> extends PanelImpl<PropsT, StateT> {
    constructor(props: PropsT, state: StateT);
    getHeader(): string;
    getNavigationHref(): string;
    renderControl(): JSX.Element;
}
