import { IAdaptiveMenuItemProps } from "@docsvision/webclient/Helpers/Menu/AdaptiveMenuItem";
import React from "react";
/** @internal */
export interface IDesktopMenuItemProps extends IAdaptiveMenuItemProps {
}
/** @internal */
export interface IDesktopMenuItemState {
}
/**
 * @internal Представляет собой элемент меню для настольной версии.
 */
export declare class DesktopMenuItem extends React.Component<IDesktopMenuItemProps, IDesktopMenuItemState> {
    protected onKeyDown: (event: React.KeyboardEvent<any>) => void;
    render(): JSX.Element;
}
