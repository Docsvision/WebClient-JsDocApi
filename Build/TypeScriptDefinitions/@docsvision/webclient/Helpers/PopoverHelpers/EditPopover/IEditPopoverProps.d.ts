import { EditPopover } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/EditPopover";
import { PopoverMode } from "@docsvision/webclient/Helpers/PopoverHelpers/Popover";
/** Свойства для {@link EditPopover} */
export interface IEditPopoverProps {
    /** Элемент, возле которого будет отображено всплывающее окно */
    target: HTMLElement;
    /** Уникальный идентфикатор окна. */
    key?: string;
    /** Ширина содержимого всплывающего окна */
    width?: string;
    /** Максимальная высота содержимого всплывающего окна */
    maxHeight?: string;
    /** Максимальная ширина содержимого всплывающего окна */
    maxWidth?: string;
    /** Текст заголовка всплывающего окна */
    title?: string;
    /** Настройка, определяющая, будет ли иницироваться применение изменений по нажатию клавиши Enter. */
    acceptByEnter?: boolean;
    /** Настройка, определяющая, будет ли окно скрываться по нажатию Esc */
    hideByEsc?: boolean;
    /** Минимальное расстояние до границ экрана */
    screenPadding?: number;
    /** @internal */
    className?: string;
    /**
     * Настройка, определяющая, будет ли окно скрываться по клику во вне.
     */
    hideByClickOutside?: boolean;
    /**
     * Настройка, определяющая будет ли проигнорирован клик во вне, если этот клик был совершен в пределах другого модального окна.
     * Модальными окнами считаются элементы, созданные при помощи BodyContainerProvider.
     *
     * Значение по умолчанию: true
     */
    ignoreModalOutsideClicks?: boolean;
    /**
     * Место относительно целевого элемента, где будет размещено вспылвающее окно.
     */
    mode?: PopoverMode;
    /** Статичное смещение всплывающего окна от вычисленного положения по оси X в пикселях.  */
    xShift?: number;
    /** Если значение указано, то Popover не будет вычислять собственную ширину, но будет использовать заданную. */
    forceWidth?: number;
    /** Функция, которая будет вызвана после того, как {@link EditPopover.contentElement} примет корректное значение. */
    onMounted: (popover: EditPopover) => void;
}
