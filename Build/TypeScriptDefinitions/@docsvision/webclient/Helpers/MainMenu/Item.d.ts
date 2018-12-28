import React from "react";
/** @internal */
export interface IItemProps {
    /** Button action */
    onClick: (event: React.MouseEvent<any>) => void;
    children?: any;
}
/**
 * @internal Represents a button, that looks like small icon
 * Usage example:
 *  <IconButton name="open-dictionary" onClick={this.onOpenDictionaryClick}
 *      iconClassName="dv-ico dv-ico-dictionary" visible={ super.getEditAvailable()}
 *      title={resources.Numerator_GenerateNewNumberTooltip}  />
 */
export declare const Item: (props: IItemProps) => JSX.Element;
