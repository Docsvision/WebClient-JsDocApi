import React from "react";
/** Свойства для {@link RibbonButton} */
export interface IRibbonButtonProps {
    className?: string;
    children?: React.ReactNode;
    visible?: boolean;
    checked?: boolean;
    onClick?: () => void;
}
/**
 * Кнопка для {@link Ribbon ленты}.
 */
export declare const RibbonButton: (props: IRibbonButtonProps) => JSX.Element;
