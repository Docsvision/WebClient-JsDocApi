import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { LayoutScript, LayoutScriptParams, LayoutScriptState } from "@docsvision/webclient/System/LayoutScript";
/**
 * Содержит публичные свойства элемента управления [ConnectUserFoldersButtonScript]{@link ConnectUserFoldersButtonScript}.
 */
export declare class ConnectUserFoldersButtonScriptParams extends LayoutScriptParams {
    /** Название контрола с пользовательскими папками */
    userFoldersName: string;
    /** Название контрола кнопки настройки главного меню */
    configurableMainMenuContainerButton: string;
    services?: $ControlStore;
}
/** @internal */
export interface ConnectUserFoldersButtonScriptState extends ConnectUserFoldersButtonScriptParams, LayoutScriptState {
}
/**
 * Класс для связывания кнопки настройки главного меню с пользовательскими папками
 */
export declare class ConnectUserFoldersButtonScript extends LayoutScript<ConnectUserFoldersButtonScriptParams, ConnectUserFoldersButtonScriptState> {
    private userFolders;
    private button;
    protected createParams(): ConnectUserFoldersButtonScriptParams;
    /** @internal */
    init(): void;
    /** @internal */
    protected onFoldersAttached: (folders: string[]) => void;
    /** @internal */
    protected onAttachFolderClick: () => void;
}
