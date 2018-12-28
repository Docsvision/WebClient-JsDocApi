import React from "react";
/** Свойства для {@link PopoverCloseButton} */
export interface IPopoverCloseButtonProps {
    /** Обработчик события click */
    onClick: (ev: React.MouseEvent<any>) => void;
}
/**
 * Представляет кнопку в виде иконки "закрыть".
 *
 * Пример использования:
 *
 *      <Popover isOpen={this.state.popoverOpen} onClickOutside={this.closePopover} onEscPressed={this.closePopover}>
 *          <PopoverBox>
 *              <PopoverHead>
 *                  <HorizontalStack>
 *                      <StackSpringItem>
 *                          <PopoverTitle>Заголовок</PopoverTitle>
 *                      </StackSpringItem>
 *                      <StackStaticItem>
 *                          <PopoverCloseButton onClick={this.closePopover} />
 *                      </StackStaticItem>
 *                  </HorizontalStack>
 *              </PopoverHead>
 *              <PopoverContent>
 *                  Содержимое
 *              </PopoverContent>
 *         </PopoverBox>
 *      </Popover>
 *
 * См. также {@link Popover}
 */
export declare const PopoverCloseButton: (props: IPopoverCloseButtonProps) => JSX.Element;
