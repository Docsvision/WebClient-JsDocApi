import React from "react";
/** @internal Свойства для {@link FocusTrap} */
export interface IFocusTrapProps {
    /** Выключено ли отлавливание фокуса. */
    disabled?: boolean;
    /** Селектор родительского контейнера (будет использоваться в .closest()) */
    containerSelector?: string;
    /** Содержимое компонента. */
    children?: React.ReactNode;
}
export declare class FocusTrapImpl {
    /** Узел FocusTrap. */
    protected container: HTMLElement;
    protected reactComponent: React.Component;
    /** Последний сфокусируемый элемент. */
    protected lastFocusedEl: HTMLElement;
    /** Активна ли ловушка */
    protected active: boolean;
    disabled: boolean;
    /** Список ловушек */
    protected static traps: FocusTrapImpl[];
    protected focusCounter: number;
    protected focusCounterResetInterval: any;
    /** @internal */
    initialize(container: HTMLElement, reactComponent: React.Component): void;
    /** @internal */
    deinitialize(): void;
    setDisabled(disabled: boolean): void;
    getDisabled(): boolean;
    /** Активна ли ловушка. */
    protected isActive: () => boolean;
    /** Получить контейнер. */
    protected getContainer: () => HTMLElement;
    /**
     * При смене фокуса повсюду в документе
     * @param e Событие фокуса
     */
    protected onDocumentFocus: (e: FocusEvent) => void;
    /**
     * При щелчке мышкой повсюду в документе
     * @param e Событие мышки
     */
    protected onDocumentClick: (e: MouseEvent) => void;
    /**
     * При нажатии клавиши повсюду в документе
     * @param e Событие клавиатуры
     */
    protected onDocumentKeydown: (e: KeyboardEvent) => void;
    /**
     * Обрабатываем нажатия tab или shift+tab
     * @param e Событие клавиатуры
     */
    protected handleTab: (e: KeyboardEvent) => void;
    /**
     * Фокусируем указанный элемент
     * @param el Элемент, который нужно зафокусить
     */
    protected focusEl: (el: HTMLElement) => void;
    /**
     * Ищет первый или последний фокусируемый элемент
     * @param mode Режим (поиск первого/последнего элемента)
     */
    protected findFocusable(mode: 'first' | 'last'): HTMLElement | null;
    /**
     * Находится ли элемент внутри FocusTrap.
     */
    protected isInnerEl(activeElement: HTMLElement): boolean;
    /**
     * Зафокусирован ли элемент внутри FocusTrap.
     */
    protected isInnerElFocused(activeElement: HTMLElement): boolean;
    protected isAbsoluteOrFixedPositioned(elem: HTMLElement, checkElementInBodyAndNotInContainer?: boolean): boolean;
}
/**
 * @internal Помогает с отлавливанием фокуса при попытке покинуть контейнер
 * Пример использования:
 *
 *     <FocusTrap>
 *         <div tabindex={0}>Содержимое</div>
 *     </FocusTrap>
 */
export declare class FocusTrap extends React.Component<IFocusTrapProps, {}> {
    container: HTMLElement;
    focusTrapImpl: FocusTrapImpl;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(newProps: IFocusTrapProps): void;
    /** Получить контейнер. */
    protected getContainer: (props?: IFocusTrapProps) => HTMLElement;
    /** @internal */
    render(): JSX.Element;
}
