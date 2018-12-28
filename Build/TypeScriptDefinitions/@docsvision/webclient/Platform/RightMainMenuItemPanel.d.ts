import { OverlapPanelLocation } from "@docsvision/webclient/Helpers/MainMenu/OverlapRightPanel";
import { RightMainMenuItemPanelImpl, RightMainMenuItemPanelState } from "@docsvision/webclient/Platform/RightMainMenuItemPanelImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
/**
 * Содержит публичные свойства элемента управления {@link RightMainMenuItemPanel}.
 */
export declare class RightMainMenuItemPanelParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Расположение */
    location?: OverlapPanelLocation;
}
/**
 * Контрол для отображения кнопок поверх пунктов главного меню в правой части.
 */
export declare class RightMainMenuItemPanel extends Panel<RightMainMenuItemPanelParams, RightMainMenuItemPanelState> {
    /** @internal */
    protected createParams(): RightMainMenuItemPanelParams;
    /** @internal */
    protected createImpl(): RightMainMenuItemPanelImpl;
}
