import { NavBarMode } from "@docsvision/webclient/Legacy/NavBarMode";
export interface INavBar {
    SetMode(navBarMode: NavBarMode): void;
    GetMode(): NavBarMode;
    LockMode(lockComment: string): void;
    ReleaseModeLock(): void;
    AddMobileTabs(tabsElement: HTMLElement): void;
    HideBackButton(): void;
    ShowBackButton(): void;
    OnDashboardLoad(): void;
    OnGoToRoute(): void;
}
export declare type $NavBar = {
    navBar: INavBar;
};
