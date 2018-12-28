import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { TabPageInfo } from "@docsvision/webclient/Platform/TabPageInfo";
import { TabParams } from "@docsvision/webclient/Platform/Tab";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export interface TabState extends TabParams, PanelState {
    requestHelper: RequestHelper;
}
/** @internal */
export declare type TabImplProps = TabState;
/** @internal */
export declare type TabImplState = TabState;
/** @internal */
export declare class TabImpl extends PanelImpl<TabParams, TabState> {
    constructor(props: TabParams, state: TabState);
    openTab(tab: TabPageInfo): Promise<void>;
    loadTab(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
    protected readonly activeTabsKey: string;
    protected parseTabs(): void;
    protected onTabClick(tab: TabPageInfo): void;
    protected activateTab(tab: TabPageInfo): JQueryDeferred<any>;
    protected updateMobileTab(tab: TabPageInfo): void;
    activeTabPage: any;
    renderNavPanelMobileTabs(): void;
    protected shouldTabsToBeMobile(): boolean;
    renderTabsPanel(): JSX.Element;
    renderControl(): JSX.Element;
    setTabPageHeader(tab: TabPageInfo, header: string): void;
    loadTabPage(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
    openTabPage(tabNumber: number): JQueryDeferred<any>;
}
