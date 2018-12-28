import React from "react";
/** @internal */
export interface IItemHideToggleProps {
    toggled: boolean;
    children?: any;
    onChange?: (ev: React.FormEvent<any>) => void;
}
/** @internal */
export declare const ItemHideToggle: (props: IItemHideToggleProps) => JSX.Element;
