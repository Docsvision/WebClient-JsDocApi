import { INavBar } from "@docsvision/webclient/Legacy/$NavBar";
import { NavBarMode } from "@docsvision/webclient/Legacy/NavBarMode";
/** @internal */
export declare class NavBar implements INavBar {
    private TabsMobileContainerId;
    private NavBarId;
    private NavBarButtonsId;
    private mode;
    private modeLock;
    SetMode(navBarMode: NavBarMode): void;
    GetMode(): NavBarMode;
    readonly ModeLocked: string;
    LockMode(lockComment: string): void;
    ReleaseModeLock(): void;
    AddMobileTabs(tabsElement: HTMLElement): void;
    HideBackButton(): void;
    ShowBackButton(): void;
    OnDashboardLoad(): void;
    OnGoToRoute(): void;
}
