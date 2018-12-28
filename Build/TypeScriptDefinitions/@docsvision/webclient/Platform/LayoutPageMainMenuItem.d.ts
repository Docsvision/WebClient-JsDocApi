import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { LayoutPageMainMenuItemImpl, LayoutPageMainMenuItemState } from "@docsvision/webclient/Platform/LayoutPageMainMenuItemImpl";
/**
 * Содержит публичные свойства элемента управления {@link LayoutPageMainMenuItem}.
 */
export declare class LayoutPageMainMenuItemParams extends BaseMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Имя позиции, которое будет использовано для получения разметки */
    locationName: string;
    /** Заголовок страницы */
    header: string;
    /** Цвет страницы */
    color: string;
}
/**
 * Класс элемента управления главного меню, служащего для открытия разметки.
 */
export declare class LayoutPageMainMenuItem extends BaseMainMenuItem<LayoutPageMainMenuItemParams, LayoutPageMainMenuItemState> {
    /** @internal */
    protected createParams(): LayoutPageMainMenuItemParams;
    private headerResourceKey;
    /** @internal */
    protected createImpl(): LayoutPageMainMenuItemImpl;
}
