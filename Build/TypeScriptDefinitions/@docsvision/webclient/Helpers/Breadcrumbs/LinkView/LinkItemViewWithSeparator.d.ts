import React from "react";
/** @review Свойства для {@link LinkItemViewWithSeparator}  */
export interface ILinkItemViewWithSeparatorProps {
    /** Дополнительный класс */
    className?: string;
    /** Является ли элемент первым в списке */
    first?: boolean;
    /** Текст элемента */
    title?: string;
    /** @internal */
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement>;
}
/** @review Отображает {@link LinkItemView} c {@link LinkSeparator} перед ним, если элемент первый в списке. */
export declare const LinkItemViewWithSeparator: React.ForwardRefExoticComponent<Pick<ILinkItemViewWithSeparatorProps, "title" | "className" | "children" | "first"> & React.RefAttributes<HTMLDivElement>>;
