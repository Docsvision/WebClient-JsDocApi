import { $LayoutUserSettingsController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { ConfigurableMainMenuContainerImpl, ConfigurableMainMenuContainerState } from "@docsvision/webclient/Platform/ConfigurableMainMenuContainerImpl";
import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [ConfigurableMainMenuContainer]{@link ConfigurableMainMenuContainer}.
 */
export declare class ConfigurableMainMenuContainerParams extends BaseMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Настройки главного меню */
    mainMenuSettings: GenModels.MainMenuSettings;
    /** Началась ли настройка меню */
    isConfigurationStarted?: boolean;
    /** Событие, возникающее перед началом настройки меню */
    configurationStarting?: CancelableApiEvent<void>;
    /** Событие, возникающее после начала настройки меню */
    configurationStarted?: BasicApiEvent<void>;
    /** Событие, возникающее перед сохранением настроек меню */
    configurationSaving?: CancelableApiEvent<GenModels.MainMenuSettings>;
    /** Событие, возникающее после сохранении настроек меню */
    configurationSaved?: BasicApiEvent<GenModels.MainMenuSettings>;
    /** Событие, возникающее перед завершением настройки меню */
    configurationFinishing?: CancelableApiEvent<boolean>;
    /** Событие, возникающее после завершения настройки меню */
    configurationFinished?: BasicApiEvent<boolean>;
    services?: $LayoutUserSettingsController & $ControlStore;
}
/**
 * Контейнер для хранения элементов меню, реализующий логику скрытия элементов меню пользователем.
 */
export declare class ConfigurableMainMenuContainer extends BaseMainMenuItem<ConfigurableMainMenuContainerParams, ConfigurableMainMenuContainerState> {
    constructor(props: any);
    /** @internal */
    protected createParams(): ConfigurableMainMenuContainerParams;
    /** @internal */
    protected mainMenuSettings: GenModels.MainMenuSettings;
    /** @internal */
    protected childrenHandler: GenModels.ControlModel[];
    /**
     * Скрытие элементов меню, указанных в настройках меню
     * @param current Элемент меню
     */
    hideItemModels(current: GenModels.ControlModel): void;
    /** Начало настройки */
    beginConfiguration(): void;
    /** Сброс настроек */
    resetSettings(): Promise<void>;
    /** @internal */
    protected toggleConfigurationMode(current: LayoutControl, enabled: boolean): void;
    /**
     * Завершение настроек
     * @param accepted Приняты ли изменения или отменены
     */
    finishConfigurationMode(accepted: boolean): Promise<void>;
    /** @internal */
    protected applyMainMenuSettings(settings: GenModels.MainMenuSettings): void;
    /** @internal */
    protected onControlConfigredToHide: (sender: BaseMainMenuItem<BaseMainMenuItemParams, any>, configuredToHide: boolean) => void;
    /** @internal */
    protected saveSettings(settings: GenModels.MainMenuSettings): JQueryDeferred<void>;
    /** @internal */
    protected createImpl(): ConfigurableMainMenuContainerImpl;
}
