import { IAdaptiveMenuItemProps } from "@docsvision/webclient/Helpers/Menu/AdaptiveMenuItem";
import React from "react";
/** @internal */
export interface IMobileMenuItemProps extends IAdaptiveMenuItemProps {
}
/** @internal */
export interface IMobileMenuItemState {
}
/**
 * @internal Представляет собой элемент меню для мобильной версии.
 */
export declare class MobileMenuItem<P extends IMobileMenuItemProps, S extends IMobileMenuItemState> extends React.Component<P, S> {
    render(): JSX.Element;
}
