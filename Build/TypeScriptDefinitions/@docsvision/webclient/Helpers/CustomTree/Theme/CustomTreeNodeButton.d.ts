/** @review Свойства для {@link CustomTreeNodeButton }  */
export interface ICustomTreeNodeButtonProps {
    /** Выделен ли узел */
    selected?: boolean;
    className?: string;
    /** Доступен ли выбор узла. По умолчанию - true. */
    selectable?: boolean;
}
/**
 * Содержимое узла дерева, упрощенный аналог {@link CustomTreeNodeContentDefault} с нативным outline при фокусе.
 * Пример использования см. {@link CustomTreeDefault}
 */
export declare const CustomTreeNodeButton: import("styled-components").StyledComponent<"button", any, ICustomTreeNodeButtonProps, never>;
