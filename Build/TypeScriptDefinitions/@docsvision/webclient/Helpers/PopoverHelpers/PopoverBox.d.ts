import React from "react";
/** Свойства для {@link PopoverBox} */
export interface IPopoverBoxProps {
    /** Содержимое PopoverBox */
    children?: React.ReactNode;
    className?: string;
    attributes?: Object;
}
/**
 * Представляет полотно {@link Popover}
 *
 * Пример использования:
 *
 *     <Popover isOpen={this.state.popoverOpen} >
 *         <PopoverBox>
 *             <div>Содержимое</div>
 *         </PopoverBox>
 *     </Popover>
 *
 * См. также {@link Popover}
 */
export declare const PopoverBox: (props: IPopoverBoxProps) => JSX.Element;
