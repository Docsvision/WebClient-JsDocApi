import { Popover } from "@docsvision/webclient/Helpers/PopoverHelpers/Popover";
import React from "react";
/** @internal */
export interface IAdaptiveMenuBarProps {
    expanded: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}
/** @internal */
export interface IAdaptiveMenuBarState {
    parentEl: HTMLElement;
}
/**
 * @internal Представляет собой адаптивное меню.
 *
 * Пример использования:
 *
 *     <AdaptiveMenuBar expanded={this.state.menuBarExpanded} >
 *         <AdaptiveMenuContent>
 *             <AdaptiveMenuItem onClick={() => console.info("Command 1 clicked") } >
 *                 Комманда 1
 *             </AdaptiveMenuBarItem>
 *             <AdaptiveMenuBarItem onClick={() => console.info("Command 2 clicked")} >
 *                 Комманда 2
 *             </AdaptiveMenuBarItem>
 *         </AdaptiveMenuContent>
 *     </AdaptiveMenuBar>
 *
 * См. также {@link AdaptiveMenuContent}, {@link AdaptiveMenuBarItem}
 */
export declare class AdaptiveMenuBar extends React.Component<IAdaptiveMenuBarProps, IAdaptiveMenuBarState> {
    popover: Popover;
    constructor(props: IAdaptiveMenuBarProps);
    onCloseMenu: () => void;
    render(): JSX.Element;
}
