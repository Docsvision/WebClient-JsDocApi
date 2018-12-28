import { MainMenuImpl, MainMenuState } from "@docsvision/webclient/Platform/MainMenuImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Основное меню]{@link MainMenu}.
 */
export declare class MainMenuParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Прикреплено ли меню */
    isPinned?: boolean;
    /** Событие, возникающее после появления/скрытия меню */
    toggle?: BasicApiEvent<boolean>;
}
/**
 * Класс элемента управления Основное меню.
 */
export declare class MainMenu extends Panel<MainMenuParams, MainMenuState> {
    /** @internal */
    protected createParams(): MainMenuParams;
    /** @internal */
    /** @internal */
    protected isPinned: boolean;
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected createImpl(): MainMenuImpl;
}
