import React from "react";
/** @review Свойства для {@link CustomTreeLevelIndent} */
export interface ICustomTreeLevelIndentProps {
    /** Уровень вложенности, на котором находится узел (начинается с 0) */
    level?: number;
    /** Размер отступа для уровня вложенности (px, em, etc) */
    levelIndent?: string;
}
/**
 * Отступ у узла дерева. Пример использования см. в {@link CustomTreeDefault}
 */
export declare class CustomTreeLevelIndent extends React.Component<ICustomTreeLevelIndentProps, undefined> {
    /** @internal */
    render(): JSX.Element;
}
