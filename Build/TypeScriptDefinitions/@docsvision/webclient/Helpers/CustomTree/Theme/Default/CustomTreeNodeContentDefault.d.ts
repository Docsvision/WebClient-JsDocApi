/** @review Свойства для {@link CustomTreeNodeContentDefault }  */
export interface ICustomTreeNodeContentDefaultProps {
    /** Идентификатор узла */
    id?: string;
    /** Focused element's id */
    focusedId?: string;
    /** Выделен ли узел */
    selected?: boolean;
    className?: string;
    /** Оставлять ли стили кнопки у контейнера или сбрасывать */
    keepButtonStyles?: boolean;
}
/** @review Содержимое узла дерева. Пример использования см. {@link CustomTreeDefault} */
export declare const CustomTreeNodeContentDefault: import("styled-components").StyledComponent<"button", any, ICustomTreeNodeContentDefaultProps, never>;
