import React from "react";
/** Свойства для {@link EscHandler} */
export interface Props {
    /** Временно отключает обработчик. */
    disabled?: boolean;
    /** Обработчик события нажатия Esc. */
    onEsc: (ev: React.KeyboardEvent<any>) => void;
    /** Элементы, располагающиеся поверх затемнения.  */
    children?: React.ReactNode;
}
/**
 * Реагирует событие нажатия клавиши Esc и вызывает обработчик, переданный в параметры.
 */
export declare class EscHandler extends React.Component<Props, {}> {
    currentClickTarget: EventTarget;
    onKeyDown: (e: React.KeyboardEvent<any>) => void;
    render(): JSX.Element;
}
