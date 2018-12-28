import React from "react";
/** Режим {@link Focusable} */
export interface IFocusableMode {
    /** Фокусировать ли при создании компонента */
    onMount?: boolean;
    /** Фокусировать ли при перерисовке компонента */
    onUpdate?: boolean;
}
/** @internal Свойства для {@link Focusable} */
export interface IFocusableProps {
    /** CSS-селектор элемента среди props.children, на котором нужно делать фокус. Если не задан, то ищется первый фокусируемый элемент */
    selectorToFocus?: string;
    /** CSS-селектор элемента, которому нужно вернуть фокус. Если не задан, то запоминается предыдущий фокус */
    selectorToReturnFocus?: string;
    /** Режим фокусирования */
    mode?: IFocusableMode;
    /** Не фокусировать */
    notFocusOnMount?: boolean;
    /** Выключен ли фокус */
    disabled?: boolean;
    /** Элементы, среди которых ищутся фокусируемые */
    children?: React.ReactNode;
    onFocus?: () => void;
}
/**
 * @internal Помогает с автоматической фокусировкой на своём содержимом
 * Ищет среди своих потомков фокусируемый элемент и передаёт фокус ему, запоминая прошлый сфокусированный элемент.
 *
 * Фокусирование внутреннего элемента происходит при создании компонента (при условии, что компонент виден на странице)
 * или при становлении его видимым (через css)
 * Возвращение фокуса происходит при уничтожении компонента или изменении его видимости на "невидимый" (пр. "display: none" в css)
 *
 * Пример использования:
 *
 *     <Focusable>
 *         <div tabindex={0}>Содержимое</div>
 *     </Focusable>
 */
export declare class Focusable extends React.Component<IFocusableProps, undefined> {
    /** Узел Focusable */
    el: HTMLElement;
    /** Элемент, имевший фокус до Focusable */
    prevFocusable: HTMLElement;
    /** Был ли виден Focusable в пердыдущем рендеринге */
    prevIsVisible: boolean;
    /** Был ли проинициализирован Focusable */
    isInitialFocused: boolean;
    /** Режим Focusable по умолчанию */
    static readonly DEFAULT_MODE: IFocusableMode;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    componentWillReceiveProps(nextProps: IFocusableProps): void;
    /**
     * Виден ли Focusable на странице
     */
    readonly isVisible: boolean;
    /**
     * Режим Focusable
     */
    readonly mode: IFocusableMode;
    /**
     * Ищет внутри себя элемент для передачи фокуса
     */
    protected findFocusable(): HTMLElement;
    /**
     * Находит текущий элемент с фокусом (нужно для возврата фокуса)
     */
    protected findCurrentFocusableElement(): HTMLElement;
    /**
     * Передать фокус элементу внутри
     */
    protected focus(force?: boolean): void;
    /**
     * Вернуть фокус исходному элементу
     */
    protected returnFocus(skipVisibleCheck?: boolean): void;
    /** @internal */
    render(): JSX.Element;
}
