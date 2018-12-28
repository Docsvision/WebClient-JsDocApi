import React from "react";
/** Свойства для {@link ModalSidebarCloseButton} */
export interface IModalSidebarCloseButtonProps {
    /** Доступность кнопки. Значение по умолчанию: true */
    enabled?: boolean;
    /** Обработчик события click */
    onClick: (ev: React.MouseEvent<any>) => void;
}
/**
 * Представляет закрывающую кнопку в правой части выезжающей панели ({@link ModalSidebar}).
 *
 * Пример использования:
 *
 *     <ModalSidebar isOpen={this.state.sidebarOpen} >
 *         <ModalSidebarCloseButton onClick={() => this.setState({ sidebarOpen: false })} />
 *     </ModalSidebar>
 */
export declare const ModalSidebarCloseButton: (props: IModalSidebarCloseButtonProps) => JSX.Element;
