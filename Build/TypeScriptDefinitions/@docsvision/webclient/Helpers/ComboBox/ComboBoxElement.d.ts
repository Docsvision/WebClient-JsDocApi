import React from "react";
/** @internal Свойства для {@link ComboBoxElement} */
export interface IComboBoxElementProps {
    /** Дополнительный класс */
    className?: string;
    /** Включен ли TabIndex у элемента */
    tabIndex?: boolean;
    /** Выключен ли элемент */
    disabled?: boolean;
    /** Выбран ли элемент */
    selected?: boolean;
    /** Имеет ли элемент фокус в данный момент */
    focused?: boolean;
    /** При выборе элемента */
    onSelect?: () => void;
    /** При фокусе элемента */
    onFocus?: (event: React.FocusEvent<any>) => void;
    /** При снятии фокуса элемента */
    onBlur?: (event: React.FocusEvent<any>) => void;
    /** При передачи фокуса следующему элементу */
    onFocusNext?: () => void;
    /** При передачи фокуса предыдущему элементу */
    onFocusPrev?: () => void;
}
/**
 * @internal Элемент выпадающего списка комбобокса.
 * Пример использования см. в {@link ComboBoxWrapper}
 */
export declare class ComboBoxElement extends React.Component<IComboBoxElementProps, undefined> {
    /**
     * Узел элемента
     */
    el: HTMLElement;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IComboBoxElementProps): void;
    /**
     * При выборе элемента
     */
    protected onSelect: () => void;
    protected onKeyDown: (e: React.KeyboardEvent<any>) => void;
    readonly tabIndex: 0 | -1;
    /**
     * Фокусирует элемент
     */
    focus: () => void;
    render(): JSX.Element;
}
