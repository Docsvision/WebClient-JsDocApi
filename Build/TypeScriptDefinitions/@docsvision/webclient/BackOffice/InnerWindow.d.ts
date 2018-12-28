import * as React from 'react';
/** @internal Свойства для {@link InnerWindow}  */
export interface IInnerWindowProps {
    className?: string;
    children?: React.ReactNode;
    width?: number;
    top?: number;
    left?: number;
    visible?: boolean;
}
/** @internal Вспомогательный компонент для {@link TasksTreeContainer} */
export declare const InnerWindow: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & IInnerWindowProps, "className">;
