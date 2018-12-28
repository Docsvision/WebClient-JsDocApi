import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { IEditPopoverState } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverState";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { ICancelableEvent } from "@docsvision/webclient/System/ICancelableEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import React from "react";
/**
 * Использует {@link Popover} для отображения вслывающего окна контролов, в режиме edit-in-place.
 *
 * Для создания всплывающего окна следует исполдьзовать статический метод {@link EditPopover.CreatePopover}
 */
export declare class EditPopover extends React.Component<IEditPopoverProps, IEditPopoverState> {
    private contentRoot;
    private wrapper;
    constructor(props: IEditPopoverProps);
    /** Событие, возникающее перед показом окна */
    readonly showing: ICancelableEvent<IEventArgs>;
    /** Событие, возникающее после показа окна */
    readonly shown: IBasicEvent<IEventArgs>;
    /** Событие, возникающее перед нажатием кнопки OK */
    readonly accepting: ICancelableEvent<IEventArgs>;
    /** Событие, возникающее после нажатия кнопки ОК */
    readonly accepted: IBasicEvent<IEventArgs>;
    /** Событие, возникающее перед закрытием окна путем нажатия кнопки Отмена, клавиши Esc или щелчка вне вслывающего окна) */
    readonly canceling: ICancelableEvent<IEventArgs>;
    /** Событие, возникающее после нажатия кнопки Отмена, клавиши Esc или щелчка вне вслывающего окна. */
    readonly canceled: IBasicEvent<IEventArgs>;
    /** Событие, возникающее перед показом окна */
    readonly hidding: ICancelableEvent<IEventArgs>;
    /** Событие, возникающее после скрытия окна */
    readonly hidden: IBasicEvent<IEventArgs>;
    /**
     * Создает экземпляр вслывающего окна.
     *
     * После создания следует использовать {@link contentElement} свойство для задания содержимого, и методы {@link show} и {@link hide}
     * для управления всплывающим окном.
     */
    static CreatePopover(popoverOptions: IEditPopoverProps): JQueryDeferred<EditPopover>;
    /**
     * HTMLElement, в который следует поместить содержимое всплывающего окна.
     *
     * Внимание! Значение свойства будет принициализировано только после вызова {@link IEditPopoverProps.onMounted}
     */
    readonly contentElement: HTMLElement;
    /**
     * Отображает всплыающее окно на экране.
     */
    show(): JQueryDeferred<any>;
    /**
     * Скрывает всплыающее окно.
     */
    hide(): void;
    /**
     * Отображается всплыающее окно на экране в данный момент или нет.
     */
    visible: boolean;
    /**
     * Настройка, определяющая, будет ли окно скрываться по клику во вне.
     */
    hideByClickOutside: boolean;
    /**
     * Настройка, определяющая, будет ли окно скрываться по нажатию Esc
     */
    hideByEsc: boolean;
    /**
     * Настройка, определяющая, будет ли иницироваться применение изменений по нажатию клавиши Enter.
     */
    acceptByEnter: boolean;
    /**
     * Корректно очищает содержимое {@link contentElement}
     */
    clearContent(): void;
    /**
     * Скрывает окно и очищает все используемые ресурсы.
     */
    dispose(): void;
    private onKeyEnter;
    private onKeyEsc;
    private attachContentRoot;
    private hideInternal;
    private accept;
    private cancel;
    private onOkClick;
    private onCancelClick;
    private onClickOutside;
    private renderSaveCancelButtons;
    /** @internal */
    render(): JSX.Element;
}
