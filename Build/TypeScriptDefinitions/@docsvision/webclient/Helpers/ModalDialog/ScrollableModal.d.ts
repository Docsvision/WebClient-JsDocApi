import React from "react";
/**
 * @internal
 * Свойства для {@link ScrollableModalDialog}
 */
export interface IScrollableModalProps {
    /** При смене значения на true модальное окно откроется, при смене в false - скроется. */
    isOpen: boolean;
    /** Вызывается при попытке закрыть модальное окно. */
    onClose?: () => void;
    /** Существует ли кнопка закрытия модального окна (крестик) */
    closeButtonDisabled?: boolean;
    header?: React.ReactNode;
    content?: React.ReactNode;
    buttons?: React.ReactNode;
    /**
     * Максимальная высота, которая будет назначена если браузер - IE. В других браузерах будет работать flexbox.
     * По умолчанию: 50vh
     */
    maxHeight?: string;
    headerClassName?: string;
    contentClassName?: string;
    buttonsClassName?: string;
    boxClassName?: string;
}
/**
 * @internal
 * Представляет всплывающее окно со скроллящимся контентом.
 */
export declare class ScrollableModal extends React.Component<IScrollableModalProps, undefined> {
    render(): JSX.Element;
}
