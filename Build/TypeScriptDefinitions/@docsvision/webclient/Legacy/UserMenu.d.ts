import { $LayoutController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { $Sidebar } from "@docsvision/webclient/Legacy/$Sidebar";
import { IUserMenu } from "@docsvision/webclient/Legacy/$UserMenu";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $RealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
/** @internal */
export declare class UserMenu implements IUserMenu {
    private services;
    private userMenu;
    private userMenuButton;
    private aboutButtons;
    private exitButtons;
    private profileButtons;
    private traceProvider;
    private hideHandler;
    constructor(services: $RealtimeCommunicationService & $LayoutController & $LayoutManager & $Sidebar);
    Show(): void;
    UserModal: ModalWindow;
    private Initialize;
    private CloseMenu;
    private onRouteChanges;
    private AddUserMenuButtonEventClick;
    private AddAboutButtonEventClick;
    private AddExitButtonEventClick;
    private AddSidebarUserMenuEventClick;
    private AddUserProfileUserMenuEventClick;
}
