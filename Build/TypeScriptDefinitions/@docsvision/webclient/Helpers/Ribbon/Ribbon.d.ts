/** Свойства для {@link Ribbon} */
export interface IRibbonProps {
    className?: string;
    children?: React.ReactNode;
}
/**
 * Представляет собой "ленту", на которой могут располагаться группы и кнопки.
 */
export declare const Ribbon: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & IRibbonProps, "className">;
