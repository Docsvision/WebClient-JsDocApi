import { IIconButtonProps } from "@docsvision/webclient/Helpers/IconButton";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface IBoxWithButtonsProps {
    /** Tooltip of the menu item */
    title?: string;
    /** React.ReactNode that repersents a box content */
    children?: React.ReactNode;
    /** Custom class for menu item */
    className?: string;
    /** ReactJS key */
    key?: string;
    /** Shows loading incon at the left of the buttons */
    loadingState?: LoadingState;
    /** Buttons, that will be showed on the right side of the box */
    buttons: IBoxWithButtonsButtonInfo[];
    /** Show buttons inside the box with absolute positioning. Defautl value: false */
    buttonsInside?: boolean;
}
/** @internal */
export interface IBoxWithButtonsButtonInfo extends IIconButtonProps {
    /**
     * If value is true, then button will hiden by zero-opacity, and shown on box hover
     * Default value: false
     */
    showOnlyOnHover?: boolean;
}
/** @internal */
export declare class BoxWithButtonsDefault {
    /**
     * Creates IBoxWithButtonsButtonInfo with default values, that forms clear button.
     * @param props Overrides of default values
     *
     * @internal
     */
    static clearButton(props?: IBoxWithButtonsButtonInfo): IBoxWithButtonsButtonInfo;
}
/**
 * Represents a box with buttons at the right side.
 * Usage example:
 *  <BoxWithButtons buttons={[BoxWithButtonsDefault.clearButton({ onClick: this.onClearClick })]} >
 *     { super.renderInput() }
 *  </BoxWithButtons>
 * @internal
 */
export declare const BoxWithButtons: (props: IBoxWithButtonsProps) => JSX.Element;
