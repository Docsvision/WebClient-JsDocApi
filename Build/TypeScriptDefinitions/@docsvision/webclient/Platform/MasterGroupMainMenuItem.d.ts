import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { MasterGroupMainMenuItemImpl, MasterGroupMainMenuItemState } from "@docsvision/webclient/Platform/MasterGroupMainMenuItemImpl";
import { BaseControl, BaseControlParams, BaseControlState, LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { IProxyControl } from "@docsvision/webclient/System/IProxyControl";
/**
 * Содержит публичные свойства элемента управления {@link MasterGroupMainMenuItem}.
 */
export declare class MasterGroupMainMenuItemParams extends BaseMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Раскрыт ли элемент меню */
    isExpanded?: boolean;
    /** Включен ли режим отображения для мобильных устройств */
    enableMobileMode?: boolean;
    /** Показывать ли сам элемент меню или только его содержимое */
    showRoot?: boolean;
}
/**
 * Контрол для отображения группы элементов в главной панели
 */
export declare class MasterGroupMainMenuItem extends BaseMainMenuItem<MasterGroupMainMenuItemParams, MasterGroupMainMenuItemState> implements IProxyControl {
    constructor(props: any);
    /** @internal */
    protected createParams(): MasterGroupMainMenuItemParams;
    /** @internal */
    init(): void;
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
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
    protected onChildToggled(child: LayoutControl): void;
    /** @internal */
    protected showRoot: string | boolean;
    /** @internal */
    protected createImpl(): MasterGroupMainMenuItemImpl;
}
