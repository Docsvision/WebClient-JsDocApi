import React from "react";
/** @internal Свойства для {@link TextInput} */
export interface ITextInputProps {
    /** Дополнительный класс */
    className?: string;
    /** Значение инпута */
    value?: string;
    /** Плейсхолдер */
    placeholder?: string;
    /** При изменении значения */
    onChange?: (value: string) => void;
    /** При нажатии клавиши */
    onKeyDown?: (e: React.KeyboardEvent<any>) => void;
}
/**
 * @internal Текстовое поле для ввода теста
 */
export declare class TextInput extends React.Component<ITextInputProps, undefined> {
    protected onChange: (e: any) => void;
    /** @internal */
    render(): JSX.Element;
}
