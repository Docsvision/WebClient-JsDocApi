import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { TabPageParams } from "@docsvision/webclient/Platform/TabPage";
/** @internal */
export interface TabPageState extends TabPageParams, PanelState {
}
/** @internal */
export declare type TabPageImplState = TabPageState;
/** @internal */
export declare class TabPageImpl extends PanelImpl<TabPageParams, TabPageState> {
    constructor(props: TabPageParams, state: TabPageState);
    renderControl(): JSX.Element;
}
