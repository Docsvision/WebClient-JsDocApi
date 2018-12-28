import React from "react";
/** @internal */
export interface IAdaptiveMenuItemProps {
    /** Tooltip of the menu item */
    title?: string;
    /** React.ReactNode that repersents menu item look */
    children?: React.ReactNode;
    /** Command action */
    onClick?(): void;
    /** Class "hide" will be added to command if visible = false */
    visible?: boolean;
    /** should add padding to child */
    padding?: boolean;
    /** Name for autotest purposes */
    name: string;
}
/**
 * @internal Представляет собой адаптивный элемент для меню {@link AdaptiveMenuBar}.
 * См. также {@link AdaptiveMenuContent}
 */
export declare const AdaptiveMenuItem: (props: IAdaptiveMenuItemProps) => JSX.Element;
