import React from "react";
/** Свойства для {@link ModalSidebarHeader} */
export interface IModalSidebarHeaderProps {
    /** Дополнительный класс */
    className?: string;
    /** Содержимое заголовка  */
    children?: React.ReactNode;
}
/**
 * Представляет заголовок выезжающей панели ({@link ModalSidebar}).
 *
 * Пример использования:
 *
 *     <ModalSidebar isOpen={this.state.menuBarExpanded} >
 *         <ModalSidebarHeader>{resources.MyHeaderText}</ModalSidebarHeader>
 *     </ModalSidebar>
 */
export declare const ModalSidebarHeader: (props: IModalSidebarHeaderProps) => JSX.Element;
