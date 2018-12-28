import React from "react";
/** Свойства для {@link PopoverContent} */
export interface IPopoverContentProps {
    /** Содержимое PopoverContent  */
    children?: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
}
/**
 * Добавляет отступы и некоторые другие стили, обеспечивающие аккуратное отображение содержимого в {@link PopoverBox}
 *
 * Пример использования:
 *
 *     <div>
 *         <Popover isOpen={this.state.popoverOpen} >
 *             <PopoverBox>
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
export declare const PopoverContent: (props: IPopoverContentProps) => JSX.Element;
