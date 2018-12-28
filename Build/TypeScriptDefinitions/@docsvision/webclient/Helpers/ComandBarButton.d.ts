import React from "react";
/** @internal Свойства для {@link CommandBarButton} */
export interface ICommandBarButtonProps {
    /**
     * Предполагается, что по умолчанию expanded = false. В этом случае кнопка выглядит как "+".
     * При изменении значения на true инициируется анимация поворота и кнопка превращается в "x".
     */
    expanded: boolean;
    /** При нажатии на кнопку. В большинстве случаев, свойство expanded меняется именно в этом обработчике. */
    onClick(event: React.MouseEvent): void;
    /** Дополнительный класс. */
    className?: string;
    /** Видна ли кнопка */
    visible?: boolean;
    /** значение атрибута data-button-name для автотестирования. */
    name?: string;
    /** Всплывающая подсказка. */
    title?: string;
}
/**
 * @internal Представляет собой анимированную кнопку, которая выглядит как знак "+" в свёрнутом состоянии, и как "x" в развёрнутом.
 *
 * Смотрите также: {@link CommandBarHelper}.
 */
export declare const CommandBarButton: (props: ICommandBarButtonProps) => JSX.Element;
