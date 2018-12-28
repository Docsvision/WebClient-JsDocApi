import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { $Sidebar } from "@docsvision/webclient/Legacy/$Sidebar";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { LayoutScript, LayoutScriptParams } from "@docsvision/webclient/System/LayoutScript";
import { $Router } from "@docsvision/webclient/System/$Router";
/**
 * Содержит публичные свойства элемента управления {@link RefreshFoldersTreeScript}.
 */
export declare class RefreshFoldersTreeScriptParams extends LayoutScriptParams {
    /** Название контрола кнопки настройки главного меню */
    refreshButtonName: string;
    services?: $ControlStore & $Sidebar & $LayoutFolderController & $Router;
}
/** @internal */
export interface RefreshFoldersTreeScriptScriptState extends RefreshFoldersTreeScriptParams, BaseControlState {
}
/**
 * Класс для связывания кнопки настройки главного меню с пользовательскими папками
 */
export declare class RefreshFoldersTreeScript extends LayoutScript<RefreshFoldersTreeScriptParams, RefreshFoldersTreeScriptScriptState> {
    private button;
    private performOnce;
    /** @internal */
    protected createParams(): RefreshFoldersTreeScriptParams;
    /** @internal */
    init(): void;
    /** @internal */
    protected onRefreshFoldersClick: () => void;
    private refreshFolders;
    /** @internal */
    protected refreshRoute(): JQueryDeferred<{}>;
}
