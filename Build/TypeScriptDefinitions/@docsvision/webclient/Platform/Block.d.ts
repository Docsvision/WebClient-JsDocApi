import { BlockImpl, BlockState } from "@docsvision/webclient/Platform/BlockImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Содержит публичные свойства элемента управления [Блок]{@link Block}.
 */
export declare class BlockParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Заголовок, отображаемый над элементом управления. */
    header?: string;
    /**
     * Флаг, определяющий, возможность сворачивания Блока:
     * true - Блок может быть свернут (отображается кнопка сворачивания),
     * false - Блок не может быть свернут.
     */
    collapsible?: boolean;
    /** Флаг, указывающий, что содержимое Блока должно быть выровнено по левой стороне: true - выравнивание влево, false - выравнивание вправо. */
    alignment?: boolean;
    /** флаг, указывающий, что Блок должен отделяться от других элементов управления дополнительными отступами: true - с отступами, false - без отступов. */
    paddings?: boolean;
    /** Флаг, определяющий текущее состояние блока: true - Блок свернут (содержимое не отображается), false - Блок раскрыт. */
    isCollapsed?: boolean;
    /** Событие возникает при сворачивании Блока. */
    collapsing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после сворачивания Блока. */
    collapsed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при раскрытии Блока. */
    expanding?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после раскрытия Блока. */
    expanded?: BasicApiEvent<IEventArgs>;
}
/**
 * Класс элемента управления Блок.
 *
 * Добавляет в web-разметку сворачиваемый элемент управления с заголовком, предназначенный для встраивания других элементов управления.
 */
export declare class Block extends Panel<BlockParams, BlockState> {
    protected createParams(): BlockParams;
    protected createImpl(): BlockImpl;
    isCollapsed: boolean;
}
