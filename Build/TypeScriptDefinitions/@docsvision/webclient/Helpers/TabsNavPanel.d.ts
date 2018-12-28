import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface ITabsNavPanelItemProps {
    /** Active tab will be highlighted */
    active: boolean;
    /** Handler, that switch active tab */
    onClick(event: React.MouseEvent<any> | React.KeyboardEvent<any>): void;
    /** Tooltip of the menu item */
    title?: string;
    /** React.ReactNode that repersents menu item look */
    children?: React.ReactNode;
    /** Class "hide" will be added to command if visible = false */
    visible?: boolean;
    /** Custom class for menu item */
    className?: string;
    /** ReactJS key */
    key?: string;
    /** Name for autotest purposes */
    name: string;
    /** State of the tab content loading */
    loadingState?: LoadingState;
    /** Should tab item have positive tab index */
    tabIndex?: number;
}
/** @internal */
export interface ITabsNavPanelProps {
    /** Children tags, created by MenuBarItem */
    children?: React.ReactNode;
    className?: string;
    /** Should tabs fill all width of the tabs. Default value: true */
    stretchTabs?: boolean;
}
/**
 * @internal Represents a row of tabs (only links, without tab content management)
 * Tab items should be rendered with TabsNavPanelItem.
 * Usage example:
 *  <TabsNavPanel expanded={this.state.menuBarExpanded} >
 *     <TabsNavPanelItem active={this.state.activeTab == 0} onClick={() => this.setState({ activeTab: 0 }); } >
 *        Tab 1
 *     </TabsNavPanelItem>
 *     <TabsNavPanelItem active={this.state.activeTab == 1} onClick={() => this.setState({ activeTab: 1 });} >
 *        Tab 2
 *     </TabsNavPanelItem>
 *  </TabsNavPanel>
 */
export declare const TabsNavPanel: (props: ITabsNavPanelProps) => JSX.Element;
/** @internal */
export declare const TabsNavPanelItem: (props: ITabsNavPanelItemProps) => JSX.Element;
