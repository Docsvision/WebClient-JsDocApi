import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { BaseNavigationMainMenuItemState } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItemImpl";
/**
 * Содержит публичные свойства элемента управления {@link BaseNavigationMainMenuItem}.
 */
export declare class BaseNavigationMainMenuItemParams extends BaseMainMenuItemParams {
    /** Время последней активации элемента меню */
    lastActivationTimestamp?: Date;
    /** Адрес для перехода */
    navigationHref?: string;
}
/**
 * Базовый класс для контролов главного меню, представляющих ссылки на страницы ЛК.
 */
export declare abstract class BaseNavigationMainMenuItem<PropsT extends BaseNavigationMainMenuItemParams, StateT extends BaseNavigationMainMenuItemState> extends BaseMainMenuItem<PropsT, StateT> {
    constructor(props: PropsT);
    /** @internal */
    init(): void;
    /** @internal */
    readonly navigationHref: string;
}
