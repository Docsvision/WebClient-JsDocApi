import React from "react";
/** Свойства для {@link ModalDialogBox} */
export interface IModalDialogBoxProps {
    children?: React.ReactNode;
    /**
     * Если значение истино, то устаналивается ширина окна 800px, иначе ширина соответствует ширине содержимого.
     * По умолчанию: false
     */
    defaultWidth?: boolean;
    /** Пользовательский CSS-класс */
    className?: string;
}
/**
 * Представляет полотно модального окна ({@link ModalDialog}).
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
export declare const ModalDialogBox: (props: IModalDialogBoxProps) => JSX.Element;
