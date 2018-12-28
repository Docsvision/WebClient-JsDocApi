import { BaseNavigationMainMenuItem, BaseNavigationMainMenuItemParams } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItem";
import { LinkMainMenuItemImpl, LinkMainMenuItemState } from "@docsvision/webclient/Platform/LinkMainMenuItemImpl";
/**
 * Содержит публичные свойства элемента управления [Ссылка]{@link LinkMainMenuItem}.
 */
export declare class LinkMainMenuItemParams extends BaseNavigationMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /**
     * Значение атрибута href для html-элемента `<a>`.
     * Для указания страницы Web-клиента используйте путь, начинающийся с `#`. Например, `#/Dashboard`.
     */
    href: string;
    /** Значение атрибута hreflang для html-элемента `<a>` */
    hreflang?: string;
    /** Значение атрибута target для html-элемента `<a>` */
    target?: string;
    /** Значение атрибута accesskey для html-элемента `<a>` */
    accesskey?: string;
    /** Значение атрибута download для html-элемента `<a>` */
    download?: boolean;
    /** Значение атрибута type для html-элемента `<a>` */
    type?: string;
}
/**
 * Контрол для отображения ссылки на страницу Web-клиента в списке элементов главной панели.
 */
export declare class LinkMainMenuItem extends BaseNavigationMainMenuItem<LinkMainMenuItemParams, LinkMainMenuItemState> {
    /** @internal */
    protected createParams(): LinkMainMenuItemParams;
    click(): void;
    /** @internal */
    protected createImpl(): LinkMainMenuItemImpl;
}
