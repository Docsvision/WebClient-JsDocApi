import React from "react";
/** Свойства для {@link ModalBackdrop} */
export interface IModalBackdropProps {
    /** Видимость. */
    visible: boolean;
    /** Обработчик события click. */
    onClick?: (ev: React.MouseEvent<any>) => void;
    /** Элементы, располагающиеся поверх затемнения.  */
    children?: React.ReactNode;
}
/** Состояние для {@link ModalBackdrop} */
export interface IModalBackdropState {
}
/**
 * Представляет затемнение страницы, используемое для модальных окон и панелей.
 *
 * Пример использования:
 *
 *     <ModalBackdrop onClick={() => this.setState({ sidebarOpen: false })} >
 *         <ModalSidebar isOpen={this.state.sidebarOpen} >
 *             Sidebar content
 *         </ModalSidebar>
 *     </ModalBackdrop>
 */
export declare class ModalBackdrop extends React.Component<IModalBackdropProps, IModalBackdropState> {
    currentClickTarget: EventTarget;
    el: HTMLElement;
    onMouseDown: (e: React.MouseEvent<any>) => void;
    onMouseUp: (e: React.MouseEvent<any>) => void;
    render(): JSX.Element;
}
