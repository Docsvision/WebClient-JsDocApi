import React from "react";
/** @review Свойства для {@link DisclosureHead}  */
export interface IDisclosureProps {
    header: string;
    expanded: boolean;
    onClick(event: React.MouseEvent<any> | React.KeyboardEvent<any>): void;
    visible?: boolean;
    collapsible?: boolean;
    children?: any;
    style?: React.CSSProperties;
    className?: string;
}
/** @review Представляет заголовок сворачиваемое области. См. также {@link DisclosureBody}. */
export declare const DisclosureHead: (props: IDisclosureProps) => JSX.Element;
