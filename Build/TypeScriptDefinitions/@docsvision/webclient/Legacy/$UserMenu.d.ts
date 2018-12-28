import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
export interface IUserMenu {
    Show(): void;
    UserModal: ModalWindow;
}
export declare type $UserMenu = {
    userMenu: IUserMenu;
};
