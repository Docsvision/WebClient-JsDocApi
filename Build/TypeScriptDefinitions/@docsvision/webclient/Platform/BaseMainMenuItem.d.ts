import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления {@link BaseMainMenuItem}.
 */
export declare class BaseMainMenuItemParams extends PanelParams {
    /** Текст метки. */
    text: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Класс иконки */
    iconClass?: string;
    /** Определяет, должен ли элемент управления отображаться в компактном режиме, в котором у элемента будет меньший визуальный размер. */
    compact?: boolean;
    /** Выбран ли элемент меню */
    isSelected?: boolean;
    /** Уровень вложенности элемента меню */
    level?: number;
    /** Количество уровней, на которое данный элемент меню и его дочерние элементы автоматически раскрываются */
    expandChildrenLevel?: number;
    /** Раскрыт ли элемент меню */
    isExpanded?: boolean;
    /** Можно ли настраивать элемент меню (например, скрывать) */
    configurable?: boolean;
    /** Находится ли меню в данный момент в режиме настройки или нет */
    isConfigurationModeEnabled?: boolean;
    /** Скрыт ли элемент меню через настройки */
    isConfiguredToHide?: boolean;
    /** Событие, возникающее перед началом переключения состояния раскрытости элемента меню */
    expandedToggling?: CancelableApiEvent<boolean>;
    /** Событие, возникающее после переключения состояния раскрытости элемента меню */
    expandedToggled?: BasicApiEvent<boolean>;
    /** Событие, возникающее перед выбором элемента меню */
    selecting?: CancelableApiEvent<boolean>;
    /** Событие, возникающее после выбора элемента меню */
    selected?: BasicApiEvent<boolean>;
    /** Событие, возникающее после переключения режима видимости элемента меню */
    configuredToHideToggled?: BasicApiEvent<boolean>;
}
/**
 * Базовый класс для элементов главного меню.
 */
export declare abstract class BaseMainMenuItem<PropsT extends BaseMainMenuItemParams, StateT extends BaseMainMenuItemState> extends Panel<PropsT, StateT> {
    private baseMainMenuItemImpl;
    private textResourceKey;
    private compact;
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected level: number | string;
    /** @internal */
    protected expanded: string | boolean;
    /** @internal */
    protected isConfigurationModeEnabled: boolean;
    /** @internal */
    protected isConfiguredToHide: boolean | string;
    /** @internal */
    protected configurable: boolean | string;
    /** @internal */
    protected expandChildrenLevel: string;
    /**
     * Является ли контрол контролом для главного меню. Через это свойство данные контролы можно отличать от других.
     */
    readonly isMainMenuItem: boolean;
    /** @internal */
    protected readonly baseItemImpl: BaseMainMenuItemImpl<BaseMainMenuItemParams, any>;
    /** @internal */
    protected selected: boolean;
    /**
     * Раскрыть всех родительские элементы меню
     */
    expandAllParents(): void;
}
