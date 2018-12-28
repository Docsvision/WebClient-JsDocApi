import React from "react";
/** Свойства для {@link ModalDialog} */
export interface IModalDialogProps {
    /** При смене значения на true модальное окно откроется, при смене в false - скроется. */
    isOpen: boolean;
    /** Содержимое панели */
    children?: React.ReactNode;
    /**
     * Если флаг установлен, то событие click внутри окна не поднимается к родителельскому элементу.
     * По умолчанию: true
     */
    stopClickPropogation?: boolean;
}
/**
 * Представляет всплывающее окно.
 *
 * Пример использования:
 *
 *     <ModalBackdrop onClick={() => this.setState({ dialogOpen: false })} />
 *         <ModalDialog expanded={this.state.dialogOpen} >
 *             <ModalDialogBox defaultWidth={true}>
 *                 <ModalDialogCloseButton onClick={() => this.setState({ dialogOpen: false })} />
 *                 <ModalDialogHeader>Dialog header</ModalDialogHeader>
 *                 <ModalDialogContent>Some content</ModalDialogContent>
 *                 <ModalDialogButtonPanel>
 *                     <Button onClick={() => this.setState({ dialogOpen: false })} key="cancel">
 *                         {resources.Navigator_ButtonClose}
 *                     </Button>
 *                     <Button disabled={!this.state.directoryDialogSelectedValue}
 *                         onClick={this.onDirectoryDialogSelectButtonClick} key="ok">
 *                         {resources.Navigator_ButtonSelect}
 *                     </Button>
 *                 </ModalDialogButtonPanel>
 *             </ModalDialogBox>
 *         </ModalDialog>
 *     </ModalBackdrop>
 */
export declare const ModalDialog: (props: IModalDialogProps) => JSX.Element;
