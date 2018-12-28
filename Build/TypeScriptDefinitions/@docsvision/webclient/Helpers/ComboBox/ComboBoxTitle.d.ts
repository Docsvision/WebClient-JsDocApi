import React from "react";
/** @internal Свойства для {@link ComboBoxTitle} */
export interface IComboBoxTitleProps {
    /** Дополнительный класс */
    className?: string;
    /** Выключен ли комбобокс */
    disabled?: boolean;
    /** Включен ли TabIndex у заголовка */
    tabIndex?: boolean;
    /** Раскрыт ли выпадающий список элементов или нет */
    expanded?: boolean;
    /** При клике на заголовок */
    onClick?: () => void;
    /** При фокусе заголовка */
    onFocus?: (event: React.FocusEvent<any>) => void;
    /** При снятии фокуса у заголовка */
    onBlur?: (event: React.FocusEvent<any>) => void;
}
/**
 * @internal Заголовок комбобокса.
 * Пример использования см. в {@link ComboBoxWrapper}
 */
export declare class ComboBoxTitle extends React.Component<IComboBoxTitleProps, undefined> {
    el: HTMLAnchorElement;
    /**
     * При клике на заголовок
     */
    protected onClick: () => void;
    protected onKeyDown: (e: React.KeyboardEvent<any>) => void;
    /** @internal */
    readonly tabIndex: 0 | -1;
    /** @internal */
    render(): JSX.Element;
}
