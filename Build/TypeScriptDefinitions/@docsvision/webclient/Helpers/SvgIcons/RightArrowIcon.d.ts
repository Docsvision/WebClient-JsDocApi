import React from "react";
/** Свойства для {@link RightArrowIcon} */
export interface IRightArrowIconProps {
    width?: string;
    height?: string;
    color?: string;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<any>) => void;
    className?: string;
    title?: string;
    nativeTitle?: string;
    /** Отображаемый элемент. */
    el?: string | React.Component;
}
/**
 * Иконка стрелочки вправо.
 */
export declare const RightArrowIcon: (props: IRightArrowIconProps) => JSX.Element;
