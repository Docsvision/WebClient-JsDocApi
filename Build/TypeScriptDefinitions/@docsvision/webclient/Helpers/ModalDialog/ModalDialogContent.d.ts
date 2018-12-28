import React from "react";
/** Свойства для {@link ModalDialogHeader} */
export interface IModalDialogContentProps {
    /** Содержимое заголовка */
    children?: React.ReactNode;
    /** Пользовательский CSS-класс */
    className?: string;
}
/**
 * Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение содержимого в ({@link ModalDialogBox}).
 *
 * Пример использования:
 *
 *     <ModalDialog isOpen={this.state.dialogOpen}>
 *         <ModalDialogBox defaultWidth={true}>
 *             <ModalDialogHeader>Dialog header</ModalDialogHeader>
 *             <ModalDialogContent>Dialog content</ModalDialogContent>
 *         </ModalDialogBox>
 *     </ModalDialog>
 */
export declare const ModalDialogContent: (props: IModalDialogContentProps) => JSX.Element;
