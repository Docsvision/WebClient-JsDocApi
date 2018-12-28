import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { StandardMainMenuContainerImpl, StandardMainMenuContainerState } from "@docsvision/webclient/Platform/StandardMainMenuContainerImpl";
/**
 * Содержит публичные свойства элемента управления {@link StandardMainMenuContainer}.
 */
export declare class StandardMainMenuContainerParams extends BaseMainMenuItemParams {
}
/**
 * Контейнер для элементов меню
 */
export declare class StandardMainMenuContainer extends BaseMainMenuItem<StandardMainMenuContainerParams, StandardMainMenuContainerState> {
    protected createParams(): StandardMainMenuContainerParams;
    /** @internal */
    protected createImpl(): StandardMainMenuContainerImpl;
}
