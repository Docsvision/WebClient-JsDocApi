import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { LayoutScript, LayoutScriptParams, LayoutScriptState } from "@docsvision/webclient/System/LayoutScript";
import { CancelableEventArgs } from "@docsvision/webclient/System/CancelableEventArgs";
/**
 * Содержит публичные свойства элемента управления {@link ConnectUserFoldersToConfigurableContainerScript}.
 */
export declare class ConnectUserFoldersToConfigurableContainerScriptParams extends LayoutScriptParams {
    /** Название контрола с пользовательскими папками */
    userFoldersName: string;
    /** Название контрола контейнера с настраиваемыми элементами меню */
    configurableContainerName: string;
    services?: $ControlStore;
}
/** @internal */
export interface ConnectUserFoldersToConfigurableContainerScriptState extends ConnectUserFoldersToConfigurableContainerScriptParams, LayoutScriptState {
}
/**
 * Класс для связывания настраиваемого контейнера главного меню с пользовательскими папками
 */
export declare class ConnectUserFoldersToConfigurableContainerScript extends LayoutScript<ConnectUserFoldersToConfigurableContainerScriptParams, ConnectUserFoldersToConfigurableContainerScriptState> {
    private userFolders;
    private container;
    /** @internal */
    protected createParams(): ConnectUserFoldersToConfigurableContainerScriptParams;
    /** @internal */
    init(): void;
    /** @internal */
    protected onConfigurationSaving: (sender: any, args: CancelableEventArgs<GenModels.MainMenuSettings>) => void;
}
