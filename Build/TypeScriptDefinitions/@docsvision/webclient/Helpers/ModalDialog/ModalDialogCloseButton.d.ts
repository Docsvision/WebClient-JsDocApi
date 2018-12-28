import { IModalSidebarCloseButtonProps } from "@docsvision/webclient/Helpers/ModalSidebar/ModalSidebarCloseButton";
import React from "react";
/** Свойства для {@link ModalSidebarCloseButton} */
export interface IModalDialogCloseButtonProps {
    /** Доступность кнопки. Значение по умолчанию: true */
    enabled?: boolean;
    /** Обработчик события click */
    onClick: (ev: React.MouseEvent<any>) => void;
}
/**
 * Представляет закрывающую кнопку в правой части выезжающей панели ({@link ModalDialog}).
 *
 * Пример использования:
 *
 *     <ModalDialog isOpen={this.state.dialogOpen} >
 *         <ModalDialogBox defaultWidth={true}>
 *             <ModalDialogCloseButton onClick={() => this.setState({ dialogOpen: false })} />
 *         </ModalDialogBox>
 *     </ModalDialog>
 */
export declare const ModalDialogCloseButton: (props: IModalSidebarCloseButtonProps) => JSX.Element;
