import React from "react";
/** Свойства для {@link PopoverOverflowContent} */
export interface IPopoverOverflowContentProps {
    /** Содержимое PopoverContent  */
    children?: React.ReactNode;
}
/**
 * Аналогичен {@link PopoverContent}, но с обеспечением видимости абсолютно спозиционированных элементов,
 * выдающихся за край содержимого. Данное поведение, в свою очередь, исключает появление прокрутки для большого содержимого.
 *
 *
 * Пример использования:
 *
 *       <div>
 *           <Popover isOpen={this.state.popoverOpen} >
 *               <PopoverBox>
 *                   <PopoverOverflowContent>
 *                       <Employee parent={this.state.wrapper} modalMode={true} />
 *                   </PopoverOverflowContent>
 *               </PopoverBox>
 *           </Popover>
 *           <span>Элемент, около которого появится окно</span>
 *       </div>
 *
 * См. также {@link Popover}
 */
export declare const PopoverOverflowContent: (props: IPopoverOverflowContentProps) => JSX.Element;
