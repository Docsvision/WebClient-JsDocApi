import React from "react";
/** @internal */
export interface IComboBoxWrapperContentProps {
    /** Дополнительный класс */
    className?: string;
    /** Заголовок комбобокса */
    title?: React.ReactNode;
    /** Тело комбобокса */
    body?: React.ReactNode;
}
/** @internal */
export declare class ComboBoxWrapperContent extends React.Component<IComboBoxWrapperContentProps, undefined> {
    render(): JSX.Element;
}
