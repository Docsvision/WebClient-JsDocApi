import * as React from 'react';
/** Свойства {@link CommonModalDialog}.  */
export interface Props {
    /** Существует ли кнопка закрытия модального окна (крестик) */
    closeButtonDisabled?: boolean;
    /** Открыт диалог или нет. */
    isOpen: boolean;
    /** Функция, которая будет вызвана при клике по затемнению или кнопке закрыть. */
    onClose: () => void;
    /** Класс для всего окна. Может быть использован для задания ширины окна. Можно использовать классы width-300, width-400, width-500 ... width-1300. */
    className?: string;
    /** Кнопки диалога, которые будут расположены в нижней части справа. Можно использовать хелпер {@link Button}. */
    buttons?: React.ReactNode | React.ReactNode[];
    /** Содержимое диалога. */
    children: React.ReactNode | React.ReactNode[];
    /** Заголовок, который будет отображен в верхней части справа, отделенный горизонтальной линией. */
    header?: React.ReactNode | React.ReactNode[];
}
/**
 * Обертка, использующая {@link StackingModal}, {@link ModalBackdrop}, {@link ModalDialog},
 * {@link ModalDialogBox}, {@link ModalDialogHeader}, {@link ModalDialogCloseButton},{@link ModalDialogContent}, {@link ModalDialogButtonPanel}
 * для отображения модального окна.
 */
export declare const CommonModalDialog: (props: Props) => JSX.Element;
