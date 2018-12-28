/** @review Свойства для {@link DisclosureBody}  */
export interface IDisclosureBodyProps {
    /** Раскрыта ли сворачиваемая область. Значение по умолчанию: true */
    expanded: boolean;
    /**
     * Следует ли использовать анимацию при разворачивании и сворачивании (см. JQuery функции slideUp и slideDown)
     * Значение по умолчанию: true
     */
    animate?: boolean;
    /**
     * См. JQuery slideUp и slideDown функции
     * Значение по умолчанию: 250
     */
    duration?: number;
    /**
     * См. JQuery slideUp и slideDown функции
     * Значение по умолчанию: linear
     */
    easing?: string;
    /** @internal */
    children?: any;
    /** Дополнительные классы */
    className?: string;
    /** Дополнительные стили */
    style?: React.CSSProperties;
    /** Видимость. Значение по умолчанию: true */
    visible?: boolean;
    /** Событие, возникающее перед сворачиванием */
    onCollapsing?: () => JQueryDeferred<any>;
    /** Событие, возникающее после сворачивания */
    onCollapsed?: Function;
    /** Событие, возникающее перед разворачиванием */
    onExpanding?: () => JQueryDeferred<any>;
    /** Событие, возникающее после разворачивания */
    onExpanded?: Function;
}
