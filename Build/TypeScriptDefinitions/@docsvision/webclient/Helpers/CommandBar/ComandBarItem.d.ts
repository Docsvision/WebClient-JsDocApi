import React from "react";
/** @internal Свойства для {@link CommandBarItem} */
export interface ICommandBarItemProps {
    /** Tooltip of the command */
    title?: string;
    /** React.ReactNode that repersents command look */
    children?: React.ReactNode;
    /** Command action */
    onClick(event: React.MouseEvent<any>): void;
    /** Class "hide" will be added to command if visible = false */
    visible?: boolean;
    /** ReactJS key */
    key: string;
    /** Value of attribute data-button-name for autotesting purposes */
    name?: string;
}
/** @internal Элемент {@link CommandBar} */
export declare const CommandBarItem: (props: ICommandBarItemProps) => JSX.Element;
