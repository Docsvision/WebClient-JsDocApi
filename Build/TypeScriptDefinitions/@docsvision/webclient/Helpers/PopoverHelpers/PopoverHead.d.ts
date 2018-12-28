import React from "react";
/** Свойства для {@link PopoverHead} */
export interface IPopoverHeadProps {
    /** Содержимое PopoverHead  */
    children?: React.ReactNode;
}
/**
 * Представляет блок с заголовком всплывающего окна в {@link PopoverBox}.
 *
 * Пример использования:
 *
 *     <div>
 *         <Popover isOpen={this.state.popoverOpen} >
 *             <PopoverBox>
 *                 <PopoverHead>
 *                     <PopoverTitle>Заголовок</PopoverTitle>
 *                 </PopoverHead>
 *                 <PopoverContent>
 *                     Содержимое
 *                 </PopoverContent>
 *             </PopoverBox>
 *         </Popover>
 *         <span>Элемент, около которого появится окно</span>
 *     </div>
 *
 * См. также {@link Popover}
 */
export declare const PopoverHead: (props: IPopoverHeadProps) => JSX.Element;
