/** @internal */
export interface IColorTextProps {
    children?: React.ReactNode;
    color?: string;
    background?: string;
    onClick?: () => void;
}
/** @internal */
export declare const ColorText: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & IColorTextProps, "className">;
