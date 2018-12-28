import React from "react";
/** @internal Свойства для {@link ComboBoxBody} */
export interface IComboBoxBodyProps {
    /** Дополнительный класс */
    className?: string;
    /** Выключен ли комбобокс */
    disabled?: boolean;
    /** Раскрыт ли выпадающий список элементов или нет */
    expanded: boolean;
    /** Используется при закрытии по клику мышкой снаружи, разрешает клики внутри переданного контейнера (по умолчанию - корень этого компонента) */
    boundaryTarget?: HTMLElement | string;
    /** При закрытии выпадающего списка */
    onClose?: () => void;
}
/**
 * @internal Тело комбобокса.
 * Пример использования см. в {@link ComboBoxWrapper}
 */
export declare class ComboBoxBody extends React.Component<IComboBoxBodyProps, undefined> {
    onClose: () => void;
    render(): JSX.Element;
}
