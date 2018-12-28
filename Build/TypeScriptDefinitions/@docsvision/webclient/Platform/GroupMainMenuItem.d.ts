import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { GroupMainMenuItemState } from "@docsvision/webclient/Platform/GroupMainMenuItemImpl";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { IProxyControl } from "@docsvision/webclient/System/IProxyControl";
import React from 'react';
/**
 * Содержит публичные свойства элемента управления [Страница]{@link Page}.
 */
export declare class GroupMainMenuItemParams extends BaseMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Раскрыт ли элемент меню */
    isExpanded?: boolean;
    /** Показывать ли сам элемент меню или только его содержимое */
    showRoot?: boolean;
}
/**
 * Контрол для отображения группы элементов в главной панели
 */
export declare class GroupMainMenuItem<P extends GroupMainMenuItemParams, S extends GroupMainMenuItemState> extends BaseMainMenuItem<P, S> implements IProxyControl {
    /** @internal */
    protected showRoot: string | boolean;
    /** @internal */
    protected expanded: string | boolean;
    /** @internal */
    protected level: number | string;
    /**
     * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
     */
    readonly isProxyControl: boolean;
    /**
     * Отрисовка содержимого проксирующего элемента меню
     */
    renderProxyChildren(): React.ReactNode[];
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected createParams(): P;
    /** @internal */
    protected createImpl(): any;
}
