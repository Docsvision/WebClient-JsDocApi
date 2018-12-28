import React from "react";
/** Свойства для {@link ModalDialogHeader} */
export interface IModalDialogHeaderProps {
    /** Содержимое заголовка */
    children?: React.ReactNode;
    /** Пользовательский класс заголовка */
    className?: string;
}
/**
 * Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение заголовка в ({@link ModalDialogBox}).
 *
 * Пример использования:
 *
 *     <ModalDialog isOpen={this.state.dialogOpen} >
 *         <ModalDialogBox defaultWidth={true}>
 *             <ModalDialogHeader>Dialog header</ModalDialogHeader>
 *             <ModalDialogContent>Dialog content</ModalDialogContent>
 *         </ModalDialogBox>
 *     </ModalDialog>
 */
export declare const ModalDialogHeader: (props: IModalDialogHeaderProps) => JSX.Element;
