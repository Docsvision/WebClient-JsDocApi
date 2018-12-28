import React from "react";
/** Свойства для {@link ModalSidebar} */
export interface IModalSidebarProps {
    /** При смене значения на true модальное окно откроется, при смене в false - скроется. */
    isOpen: boolean;
    /** Содержимое панели */
    children?: React.ReactNode;
    /**
     * Если флаг установлен, то событие click внутри панели не поднимается к родителельскому элементу.
     * По умолчанию: true
     */
    stopClickPropogation?: boolean;
    /** Дополнительный css-класс. */
    className?: string;
    paddings?: boolean;
}
/**
 * Представляет выезжающую боковую панель.
 *
 * Пример использования:
 *
 *     <div>
 *         <ModalBackdrop onClick={() => this.setState({ sidebarOpen: false })}>
 *             <ModalSidebar isOpen={this.state.sidebarOpen} >
 *                 <ModalSidebarCloseButton onClick={() => this.setState({ sidebarOpen: false })} />
 *                 <ModalSidebarHeader>Some header</ModalSidebarHeader>
 *                 <div>Some content</div>
 *             </ModalSidebar>
 *         </ModalBackdrop>
 *     </div>
 *
 * Пример использование вне компонента:
 *
 *     let host: ModalHost = new ModalHost("time-sidebar", () => {
 *         return (
 *             <ModalBackdrop visible={true} onClick={() => host.unmount()} >
 *                 <ModalSidebar isOpen={true} >
 *                     <ModalSidebarCloseButton onClick={() => host.unmount()} />
 *                     <ModalSidebarHeader>Some header</ModalSidebarHeader>
 *                     <div>Current time {(new Date()).toTimeString()}</div>
 *                 </ModalSidebar>
 *             </ModalBackdrop>
 *         );
 *     });
 *     host.mount();
 *     setInterval(() => host.forceUpdate(), 1000);
 *
 */
export declare const ModalSidebar: (props: IModalSidebarProps) => JSX.Element;
