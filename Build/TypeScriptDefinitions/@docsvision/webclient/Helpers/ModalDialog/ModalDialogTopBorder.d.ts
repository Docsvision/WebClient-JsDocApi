/** Свойства для {@link ModalDialogTopBorder} */
export interface IModalDialogTopBorderProps {
    color: string;
}
/**
 * Добавляет цветную полосу в верхнюю часть модального окна ({@link ModalDialog}).
 *
 * Пример использования:
 *
 *     <ModalDialog isOpen={this.state.dialogOpen} >
 *         <ModalDialogBox defaultWidth={true}>
 *             <ModalDialogTopBorder color="red" />
 *         </ModalDialogBox>
 *     </ModalDialog>
 */
export declare const ModalDialogTopBorder: (props: IModalDialogTopBorderProps) => JSX.Element;
