import React from "react";
/** @review Свойства для {@link SimpleItemViewWithSeparator}  */
export interface ISimpleItemViewWithSeparatorProps {
    /** Дополнительный класс */
    className?: string;
    /** Является ли элемент первым в списке */
    first: boolean;
    /** Текст элемента */
    title?: string;
    /** @internal */
    children?: React.ReactNode;
}
/** @review Аналог {@link LinkItemViewWithSeparator}, но без стилизации в виде ссылки. */
export declare const SimpleItemViewWithSeparator: (props: ISimpleItemViewWithSeparatorProps) => JSX.Element;
