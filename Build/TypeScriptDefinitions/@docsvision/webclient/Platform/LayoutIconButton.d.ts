import { LayoutIconButtonImpl, LayoutIconButtonState } from "@docsvision/webclient/Platform/LayoutIconButtonImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства элемента управления [Кнопка]{@link LayoutIconButton}.
 */
export declare class LayoutIconButtonParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Имя CSS класса, в котором определен путь к иконке, отображаемой в Кнопке. */
    iconClass?: string;
    /** Флаг, определяющий, что Кнопка может быть нажата: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
    canClick?: boolean;
    services?: $EditOperationStore;
}
/**
 * Класс элемента управления кнопки, отобржаемой в виде иконки.
 */
export declare class LayoutIconButton extends BaseControl<LayoutIconButtonParams, LayoutIconButtonState> {
    constructor(props: LayoutIconButtonParams);
    /** @internal */
    protected createParams(): LayoutIconButtonParams;
    private readonly myControlImpl;
    private bindingEditOperation;
    /**
     * Вызывает настроенный обработчик нажатия Кнопки.
     */
    performClick(): void;
    /** @internal */
    protected createImpl(): LayoutIconButtonImpl;
}
