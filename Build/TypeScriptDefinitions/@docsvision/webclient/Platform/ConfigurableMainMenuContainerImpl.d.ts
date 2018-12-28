import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { ConfigurableMainMenuContainerParams } from "@docsvision/webclient/Platform/ConfigurableMainMenuContainer";
/** @internal */
export interface ConfigurableMainMenuContainerState extends ConfigurableMainMenuContainerParams, BaseMainMenuItemState {
    /** Список контролов для скрытия */
    controlsToHide: BaseMainMenuItem<BaseMainMenuItemParams, any>[];
    /** Принятие изменений настройки меню */
    acceptChanges: () => void;
    /** Отмена изменений настройки меню */
    cancelChanges: () => void;
}
/** @internal */
export declare type ConfigurableMainMenuContainerImplState = ConfigurableMainMenuContainerState;
/** @internal */
export declare class ConfigurableMainMenuContainerImpl extends BaseMainMenuItemImpl<ConfigurableMainMenuContainerParams, ConfigurableMainMenuContainerState> {
    constructor(props: ConfigurableMainMenuContainerParams, state: ConfigurableMainMenuContainerState);
    renderControl(): JSX.Element;
}
