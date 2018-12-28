import React from "react";
/** @internal */
export interface IMobileMenuBarProps {
    expanded: boolean;
    children?: React.ReactNode;
}
/**
 * @internal Представляет собой панель с меню для мобильной версии.
 */
export declare const MobileMenuBar: (props: IMobileMenuBarProps) => JSX.Element;
