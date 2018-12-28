/** Свойства для {@link RibbonGroup} */
export interface IRibbonGroupProps {
    className?: string;
    children?: React.ReactNode;
}
/**
 * Группа для {@link Ribbon ленты}.
 */
export declare const RibbonGroup: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & IRibbonGroupProps, "className">;
