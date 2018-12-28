import React from "react";
/** @internal Свойства для {@link Button} */
export interface IButtonProperties {
    /** Отображаемый текст. */
    text?: string;
    /**
     * Позволяет показать указанную иконку слева от текста.
     * Класс должен оределять ширину и высоту фона, представляющего собой иконку.
     * Предпочтительная ширина иконка - 18px (это ширина иконки загрузки), но можно использовать и иконку любых других размеров.
     * Если размер иконки не 18x18, то вы должны установить в свойстве loadingIconClass свою загрузочную иконку,
     * иначе текст будет прыгать во время загрузки.
     * По умолчанию: null.
     */
    iconClass?: string;
    /**
     * Показывать ли иконку загрузки во время загрузки вместо иконки указанной в свойстве iconClass.
     * По умолчанию: false.
     */
    loading?: boolean;
    /**
     * Пользовательский класс для загрузочной иконки (свойство loading должно быть истинно).
     * По умолчанию: "dv-ico icon-spin loader-animate".
     */
    loadingIconClass?: string;
    /** Видна ли кнопка. По умолчанию: true. */
    visible?: boolean;
    /** Дополнительный класс. */
    className?: string;
    /** Событие клика. Оно Вызывается также при нажатии клавиш Enter или Space (пробел), когда кнопка находится в фокусе. */
    onClick?: (ev: React.MouseEvent<any>) => void;
    /** Обработчик нажатия клавиши. */
    onKeyDown?: (ev?: any) => void;
    /** Вызывается при получении кнопкой фокуса. */
    onFocus?: (ev?: any) => void;
    /** Вызывается при потери кнопкой фокуса. */
    onBlur?: (ev?: any) => void;
    /**
     * Должна ли кнопка иметь ширину 100% или нет.
     * По умолчанию: true.
     */
    stretchWidth?: boolean;
    /** Всплывающая подсказка. */
    title?: string;
    /**
     * Отображать кнопку с указанным стилем Primary.
     * По умолчанию: false
     */
    primaryButton?: boolean;
    /**
     * Как текст кнопки и её иконка должны быть выровнены.
     * По умолчанию: ButtonAlignModes.Center
     */
    align?: ButtonAlignModes;
    /** Значение свойства TabIndex для навигации по клавише Tab. */
    tabIndex?: number;
    /** Содержимое кнопки (может быть использовано вместо свойства text). */
    children?: any;
    /** Поддержка для присоединения к корневому элементу. */
    attach?: (instance: HTMLElement) => any;
    /** Значение атрибута data-button-name для автотестирования. */
    name?: string;
    /**
     * Выключена ли конпка или включена.
     * Если кнопка выключена, то она будет иметь особый внешний вид и событие onClick не будет вызываться.
     * По умолчанию: false.
     */
    disabled?: boolean;
}
/** @internal Режимы выравнивания кнопки. */
export declare enum ButtonAlignModes {
    Center = 0,
    Left = 1
}
/** @internal Представляет собой кнопку с иконкой. */
export declare const Button: (props: IButtonProperties) => JSX.Element;
