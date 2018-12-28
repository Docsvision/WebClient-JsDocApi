import React from "react";
/** @review Свойства для {@link CustomTreeNodeTextDefault}  */
export interface ICustomTreeNodeTogglerProps {
    /** Виден ли переключатель или просто занимает место */
    visible?: boolean;
    /** Раскрыт ли переключатель */
    expanded?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Дополнительный класс при раскрытии */
    expandedClass?: string;
    /** Дополнительный класс при закрытии */
    collapsedClass?: string;
    /** При клике */
    onClick?: () => void;
}
/**
 * @internal См. {@link CustomTreeNodeTogglerDefault}
 */
export declare class CustomTreeNodeToggler extends React.Component<ICustomTreeNodeTogglerProps, undefined> {
    render(): JSX.Element;
}
/**
 * Переключатель узла дерева
 * Пример использования см. в {@link CustomTreeDefault}
 */
export declare const CustomTreeNodeTogglerDefault: import("styled-components").StyledComponent<typeof CustomTreeNodeToggler, any, {}, never>;
