import React from "react";
/** @internal */
export interface IImageWithDescriptionProps {
    className?: string;
    image?: string;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
/** @internal */
export declare const ImageWithDescription: (props: IImageWithDescriptionProps) => JSX.Element;
