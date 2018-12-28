import React from "react";
/** Свойства для {@link ModalDialogButtonPanel} */
export interface IModalDialogButtonPanelProps {
    /** Содержимое панели */
    children?: React.ReactNode;
    /** Пользовательский CSS-класс */
    className?: string;
}
/**
 * Представляет панель кнопок модального диалога ({@link ModalDialog}).
 *
 * Пример использования:
 *
 *     <ModalDialog isOpen={this.state.dialogOpen}>
 *         <ModalDialogBox defaultWidth={true}>
 *             <ModalDialogButtonPanel>
 *                 <Button onClick={this.hideDictionary} key="cancel">
 *                     {resources.Navigator_ButtonClose}
 *                 </Button>
 *                 <Button disabled={!this.state.directoryDialogSelectedValue}
 *                     onClick={this.onDirectoryDialogSelectButtonClick} key="ok">
 *                     {resources.Navigator_ButtonSelect}
 *                 </Button>
 *             </ModalDialogButtonPanel>
 *         </ModalDialogBox>
 *     </ModalDialog>
 */
export declare const ModalDialogButtonPanel: (props: IModalDialogButtonPanelProps) => JSX.Element;
