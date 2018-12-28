import React from "react";
/** Свойства для {@link PopoverCancelButton} */
export interface IPopoverCancelButtonProps {
    /** Обработчик события click */
    onClick: (ev: React.MouseEvent<any>) => void;
}
/**
 * Представляет кнопку в виде иконки "отменить".
 *
 * Пример использования:
 *
 *      <Popover isOpen={this.state.popoverOpen} onClickOutside={this.cancel} onEscPressed={this.cancel}>
 *          <PopoverBox>
 *              <PopoverHead>
 *                  <HorizontalStack>
 *                      <StackSpringItem>
 *                          <PopoverTitle>Заголовок</PopoverTitle>
 *                      </StackSpringItem>
 *                      <StackStaticItem>
 *                          <PopoverAcceptButton onClick={this.accept} />
 *                      </StackStaticItem>
 *                      <StackStaticItem>
 *                          <PopoverCancelButton onClick={this.cancel} />
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
export declare const PopoverCancelButton: (props: IPopoverCancelButtonProps) => JSX.Element;
