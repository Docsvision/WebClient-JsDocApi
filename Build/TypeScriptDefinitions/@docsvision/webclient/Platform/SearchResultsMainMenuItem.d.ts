import { LinkMainMenuItem, LinkMainMenuItemParams } from "@docsvision/webclient/Platform/LinkMainMenuItem";
import { LinkMainMenuItemImpl, LinkMainMenuItemState } from "@docsvision/webclient/Platform/LinkMainMenuItemImpl";
/**
 * Содержит публичные свойства элемента управления {@link SearchResultsMainMenuItem}.
 */
export declare class SearchResultsMainMenuItemParams extends LinkMainMenuItemParams {
    /** Адрес страницы поиска */
    href: string;
    /** Классы для иконок */
    iconClass: string;
}
/** @internal */
export declare type SearchResultsMainMenuItemState = LinkMainMenuItemState;
/**
 * Контрол для отображения ссылки на результаты поиска в списке элементов главной панели.
 */
export declare class SearchResultsMainMenuItem extends LinkMainMenuItem {
    constructor(props: any);
    /** @internal */
    protected createParams(): SearchResultsMainMenuItemParams;
    /** @internal */
    protected createImpl(): LinkMainMenuItemImpl;
}
