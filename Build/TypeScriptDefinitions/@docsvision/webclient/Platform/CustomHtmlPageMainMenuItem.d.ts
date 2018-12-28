import { BaseNavigationMainMenuItem, BaseNavigationMainMenuItemParams } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItem";
import { CustomHtmlPageMainMenuItemImpl, CustomHtmlPageMainMenuItemState } from "@docsvision/webclient/Platform/CustomHtmlPageMainMenuItemImpl";
/**
 * Содержит публичные свойства элемента управления [CustomHtmlPageMainMenuItem]{@CustomHtmlPage CustomHtmlPageMainMenuItem}.
 */
export declare class CustomHtmlPageMainMenuItemParams extends BaseNavigationMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Адрес, по которому располагается произвольная html страница */
    url: string;
    /** Заголовок страницы */
    header: string;
    /** Цвет страницы */
    color: string;
}
/**
 * Контрол для отображения ссылки на страницу Web-клиента в списке элементов главной панели.
 */
export declare class CustomHtmlPageMainMenuItem extends BaseNavigationMainMenuItem<CustomHtmlPageMainMenuItemParams, CustomHtmlPageMainMenuItemState> {
    /** @internal */
    protected createParams(): CustomHtmlPageMainMenuItemParams;
    private headerResourceKey;
    /** @internal */
    protected createImpl(): CustomHtmlPageMainMenuItemImpl;
}
