import React from "react";
/** @internal Свойства для {@link IconButton} */
export interface IIconButtonProps {
    /** Всплывающая подсказка. */
    title?: string;
    /** Класс, который добавляет иконку в виде фона для кнопки. */
    iconClassName?: string;
    /** Дополнительный класс. Может использоваться, чтобы добавить иконку для кнопки. */
    className?: string;
    /** Видна ли кнопка или нет. По умолчанию: true. */
    visible?: boolean;
    /** Обработчик клика по кнопке. */
    onClick: (event: React.MouseEvent<any>) => void;
    /** Обработчик нажатия клавиши. */
    onKeyDown?: (event: React.KeyboardEvent<any>) => void;
    /** Вызывается при получении кнопкой фокуса. */
    onFocus?: (event: React.FocusEvent<any>) => void;
    /** Вызывается при потери кнопкой фокуса. */
    onBlur?: (event: React.FocusEvent<any>) => void;
    /** Значение свойства TabIndex для навигации по клавише Tab. */
    tabIndex?: number;
    /** Значение атрибута data-button-name для автотестирования. */
    name?: string;
    /**
     * Выключена ли конпка или включена.
     * Если кнопка выключена, то она будет иметь особый внешний вид и событие onClick не будет вызываться.
     * По умолчанию: false.
     */
    disabled?: boolean;
}
/**
 * @internal Представляет собой кнопку, которая выглядит как маленькая иконка.
 *
 * Пример использования:
 *
 *     <IconButton name="open-dictionary" onClick={this.onOpenDictionaryClick}
 *         iconClassName="dv-ico dv-ico-dictionary" visible={super.getEditAvailable()}
 *         title={resources.Numerator_GenerateNewNumberTooltip}  />
 */
export declare const IconButton: (props: IIconButtonProps) => JSX.Element;
