import { CustomButtonImpl, CustomButtonState } from "@docsvision/webclient/Platform/CustomButtonImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства элемента управления [Кнопка]{@link CustomButton}.
 */
export declare class CustomButtonParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст, отображаемый в Кнопке. */
    text?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Имя CSS класса, в котором определен путь к иконке, отображаемой в Кнопке. */
    iconClass?: string;
    /** Флаг, определяющий, что Кнопка может быть нажата: true - разрешено (разрешена настроенная операция редактирования), false - не разрешено. */
    canClick?: boolean;
    /**
     * Флаг, указывающий, что для Кнопки должен применяться основной стиль карточки:
     * true - использовать основной стиль,
     * false - использовать стандартный стиль.
     *
     * Если свойство primary в значении true, то при открытии карточки определенного типа,
     * к кнопке будет применен стиль с названием `.ИМЯ_СТИЛЯ_КАРТОЧКИ button.button-helper.primary-button`.
     * Данный стиль предопределен для типов карточек: Документ, Задание и Группа заданий.
     * Чтобы создать основной стиль Кнопки для собственного типа, добавьте CSS класс:
     *
     *    `.document button.button-helper.primary-button {
     *    color: white;
     *    background: rgba(0, 149, 218, 0.8);
     *    }
     *    .document button.button-helper.primary-button.disabled { color: lightgray; }`
     *
     */
    primary?: boolean;
    /**
     * Флаг, указывающий, должна ли Кнопка "растягиваться" на всю доступную ширину:
     * true - кнопка будет занимать всю доступную ширину,
     * false - ширина кнопки определяется содержимым.
     */
    stretchWidth?: boolean;
    services?: $EditOperationStore;
}
/**
 * Класс элемента управления Кнопка.
 *
 * Добавляет в web-разметку кнопку для вызова произвольной функции из скрипта карточки.
 */
export declare class CustomButton extends BaseControl<CustomButtonParams, CustomButtonState> {
    constructor(props: CustomButtonParams);
    protected createParams(): CustomButtonParams;
    private readonly myControlImpl;
    private bindingEditOperation;
    /**
     * Вызывает настроенный обработчик нажатия Кнопки.
     */
    performClick(): void;
    /** @internal */
    protected createImpl(): CustomButtonImpl;
}
