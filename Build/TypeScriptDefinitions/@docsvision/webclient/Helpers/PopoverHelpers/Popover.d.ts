import React from "react";
/** Свойства для  {@link Popover} */
export interface IPopoverProps {
    /** При смене значения на true всплывающее окно откроется, при смене в false - скроется. */
    isOpen: boolean;
    /** Контейнер целевого элемента, в котором будет отслеживаться скролл. */
    container?: HTMLElement;
    /**
     * Элемент, относительно которого всплывающее окно будет позиционироваться.
     *
     * Замечание: Popover не может корректно позиционироваться относительно элементов с display: inline.
     *
     * По умолчанию: ближайший не-inline родитель Popover.
     */
    target?: HTMLElement;
    /** Минимальная дистанция до границ экрана в пикселях. */
    screenPadding?: number;
    /**
     * Место относительно целевого элемента, где будет размещено вспылвающее окно.
     *
     * Замечение: если места сверху будет недостаточно (будут мешать границы экрана), то всплывающее окно
     * автоматически сместится вниз.
     *
     * По умолчанию: PopoverMode.Above
     */
    mode?: PopoverMode;
    /** Статичное смещение всплывающего окна от вычисленного положения по оси X в пикселях. */
    xShift?: number;
    /** Событие click вне всплывающего окна. */
    onClickOutside?: (ev: MouseEvent) => void;
    /** Событие нажатия Enter (срабатывает, даже когда фокус вне модального окна). */
    onEnterPressed?: (ev: KeyboardEvent) => void;
    /** Событие нажатия Esc (срабатывает, даже когда фокус вне модального окна). */
    onEscPressed?: (ev: KeyboardEvent) => void;
    /** Содержимое модального окна. Используйте {@link PopoverBox} для создания белой панели со скругленными краями. */
    children?: React.ReactNode;
    /** Дополнительный класс, который будет назначен на корневой элемент. */
    className?: string;
}
/** @internal */
export interface IPopoverState {
    currentTarget: HTMLElement;
    offScreenX?: boolean;
    offScreenY?: boolean;
    screenPadding: number;
    mode: PopoverMode;
    hideClassName: string;
    positionCalculated?: boolean;
    renderReady?: boolean;
}
/**
 * Режим Popover.
 */
export declare enum PopoverMode {
    /** Сверху по центру. Если сверху места нет, то показывается снизу. */
    Above = 0,
    /**
     * Слева, выровненное вертикально по верхнему краю (верхний край окна совпадает с верхним краем целевого элемента).
     * Если снизу не хватает места, то смещается вверх ровно на столько, чтобы уместить на экране.
     * Если слева нет места, то смещается ровно на столько, чтобы уместить на экране.
     */
    LeftSide = 1,
    /** Снизу, выровненное так, что левый край окна соответствует левому краю целевого элемента. Если снизу нет места, то показывается сверху. */
    BottomDropdown = 2
}
/**
 * Компонент, который обеспечивает позиционирование всплывающего модального окна.
 *
 * Замечание: при показе всплывающего окна создается элемент в body документа (или в указанном контейнере) с абсолютной позицией,
 * который при помощи свойств top и left размещается над целевым элементом. При этом, обновление координат происходит
 * при перерисовке компонента, при ресайзе и скроле окна, а также при скроле элемента-контейнера. Можно запустить перессчет
 * позиции вручную при помощи метода {@link updatePositions}. Предпочитительнее использовать этот метод, вместо перерисовки
 * компонента, т.к. данный метод только обновляет позицию, в то время как перерисовка запускает обновление содержимого
 * всплывающего окна (это критично, если нужно обновлять позицию в события, возникающих часто).
 *
 * Из принципа работы компонента также следует, что анимации при показе окна могут некорректно работать при смене значения isOpen,
 * т.к. при показе окна элемент каждый раз создается заново. Если нужно при показе только сменить css-класс (для выполнения анимации),
 * то следует держать значение isOpen всегда true, и скрывать только содержимое всплывающего окна при помощи css. Сам компонент
 * не создает никаких видимых артефактов на экране, поэтому данный сценарий допустим.
 *
 * Также следует отметить, что физически всплывающее окна располагается в другом месте DOM, не там где отрендерен элемент Popover.
 * Поэтому, наследование css-стилей не будет работать для содержимого вслывающего окна. При необходимости, можно задать
 * {@link IPopoverProps.container}, чтобы указать место в DOM, где должен размещаться элемент. Однако, в этом случае могут возникнуть
 * проблемы с перекрыванием содержимого с другими элементами на странице.
 *
 * Пример использования:
 *
 *     <div>
 *         <Popover isOpen={this.state.popoverOpen} onClickOutside={this.closePopover} onEscPressed={this.closePopover}>
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
 *  См. также: {@link PopoverBox}, {@link PopoverHead}, {@link PopoverTitle},
 *  {@link PopoverCloseButton}, {@link PopoverAcceptButton}, {@link PopoverCancelButton}, {@link PopoverContent}
 */
export declare class Popover extends React.Component<IPopoverProps, IPopoverState> {
    private static mPopoversContainer;
    private static getPopoversContainer;
    private root;
    state: IPopoverState;
    constructor(props: IPopoverProps);
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: IPopoverProps, nextContext: any): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    componentDidMount(): void;
    private attachStub;
    private onShow;
    private onHide;
    /** Скрывает всплывающее окна и очищает все занимаемые ресурсы. */
    dispose(): JQueryDeferred<any>;
    private onDocumentClick;
    private onDocumentKeyDown;
    private subscribeGlobalEvents;
    private unsubscribeGlobalEvents;
    private onPageScroll;
    private onWindowResize;
    /**
     * Перессчитать позицию всплывающего окна.
     */
    updatePositions(): void;
    private updateTopPosition;
    private updateHorizontalPosition;
    private renderPopover;
    /** @internal */
    render(): JSX.Element;
}
