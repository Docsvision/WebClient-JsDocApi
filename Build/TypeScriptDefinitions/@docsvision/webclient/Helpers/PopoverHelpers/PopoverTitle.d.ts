import React from "react";
/** Свойства для {@link PopoverTitle} */
export interface IPopoverTitleProps {
    /** Содержимое PopoverTitle */
    children?: React.ReactNode;
}
/**
 * Добавляет отступы и некоторые другие стили для аккуратного отображения заголовка всплывающего окна в {@link PopoverHead}.
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
export declare const PopoverTitle: (props: IPopoverTitleProps) => JSX.Element;
