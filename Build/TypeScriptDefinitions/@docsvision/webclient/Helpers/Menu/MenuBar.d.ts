import React from "react";
/**
 * @internal
 * @deprecated
 */
export interface IMenuBarItemProps {
    /** Tooltip of the menu item */
    title?: string;
    /** React.ReactNode that repersents menu item look */
    children?: React.ReactNode;
    /** Command action */
    onClick?(event: React.MouseEvent<any>): void;
    /** Class "hide" will be added to command if visible = false */
    visible?: boolean;
    /** Custom class for menu item */
    className?: string;
    /** ReactJS key */
    key: string;
    /** Name for autotest purposes */
    name: string;
}
/**
 * @internal
 * @deprecated
 */
export interface IMenuBarProps {
    expanded: boolean;
    /** Children tags, created by MenuBarItem */
    children?: React.ReactNode;
    className?: string;
}
/**
 * @internal
 * @deprecated
 */
export declare const MenuBar: (props: IMenuBarProps) => JSX.Element;
/**
 * @internal
 * @deprecated
 */
export declare const MenuBarItem: (props: IMenuBarItemProps) => JSX.Element;
