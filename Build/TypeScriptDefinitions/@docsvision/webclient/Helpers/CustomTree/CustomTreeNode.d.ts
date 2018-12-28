import React from "react";
/** @review Свойства для {@link CustomTreeNode}  */
export interface ICustomTreeNodeProps {
    /** Включен ли TabIndex у узла элемента */
    tabIndex?: boolean;
    /** Выключен ли узел */
    disabled?: boolean;
    /** Уровень вложенности, на котором находится узел (начинается с 0) */
    level?: number;
    /** Размер отступа для уровня вложенности (px, em, etc) */
    levelIndent?: string;
    /** При клике на узел */
    onClick?: () => void;
    /** Содержимое */
    children?: React.ReactNode;
}
/**
 * Узел дерева. Пример использования см. в {@link CustomTreeDefault}
 */
export declare class CustomTreeNode extends React.Component<ICustomTreeNodeProps, undefined> {
    protected onClick: () => void;
    readonly tabIndex: 0 | -1;
    /** @internal */
    render(): JSX.Element;
}
