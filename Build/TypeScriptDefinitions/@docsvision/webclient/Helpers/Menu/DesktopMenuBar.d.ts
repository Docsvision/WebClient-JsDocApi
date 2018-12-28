import React from "react";
/** @internal */
export interface IDesktopMenuBarProps {
    expanded: boolean;
    children?: React.ReactNode;
}
/**
 * @internal Представляет собой панель с меню для настольной версии.
 */
export declare const DesktopMenuBar: (props: IDesktopMenuBarProps) => JSX.Element;
