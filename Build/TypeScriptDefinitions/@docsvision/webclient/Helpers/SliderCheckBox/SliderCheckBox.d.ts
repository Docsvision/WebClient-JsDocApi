import React from "react";
/** Свойства для {@link SliderCheckBox} */
export interface SliderCheckBoxProps {
    /** Вызывается при изменении значения. */
    onChange?: (newValue: boolean) => void;
    /**
     * Флаг, определяющий возможность изменения значения переключателя:
     * true - разрешено (разрешена настроенная операция редактирования),
     * false - не разрешено.
     */
    canEdit?: boolean;
    /** Значение чекбокса. */
    value?: boolean;
    /** Стандартный CSS класс со стилями переключателя. */
    className?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /** Текст метки. */
    labelText?: string;
    /** Определяет, должен ли переключатель получать фокус при переходе по Tab: `true` - должен, `false` - не должен. */
    tabStop?: boolean;
}
/** @internal */
export interface SliderCheckBoxState {
}
/**
 * Вспомогательный класс для переключателя между двумя значениями.
 */
export declare class SliderCheckBox extends React.Component<SliderCheckBoxProps, SliderCheckBoxState> {
    constructor(props: SliderCheckBoxProps);
    protected readonly canEdit: boolean;
    protected handleCheckBoxClick(event: any): void;
    protected getTabIndex(): 0 | -1;
    protected getCssClass(): string;
    /** @internal */
    render(): JSX.Element;
}
