import { $StandardControllers } from "@docsvision/webclient/Legacy/StandardControllers";
import { $StandardServices } from "@docsvision/webclient/StandardServices";
import { ILayout } from "@docsvision/webclient/System/$Layout";
import { SaveControlDataModelEventArgs } from "@docsvision/webclient/System/Layout";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { ICardStateChangingEventArgs } from "@docsvision/webclient/System/ICardStateChangingEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Публичные свойства для контрола {@link Layout}.
 */
export interface ILayoutParams {
    /** Название разметки. */
    readonly layoutName: string;
    /** Владелец разметки. */
    readonly owner: ILayout;
    /** Дочерние разметки. */
    readonly childLayouts: ILayout[];
    /** Событие возникает при открытии карточки. */
    cardOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после открытия карточки. */
    cardOpened?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при сохранении карточки. */
    cardSaving?: CancelableApiEvent<SaveControlDataModelEventArgs>;
    /** Событие возникает после сохранения карточки. */
    cardSaved?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает, если при сохранении карточки возникли ошибки. */
    cardSaveFailed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает перед изменением состояния карточки. */
    cardStateChanging?: CancelableApiEvent<ICardStateChangingEventArgs>;
    /** Событие возникает перед изменением разметки карточки. */
    cardLayoutSwitching?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает перед изменением разметки карточки. */
    layoutWillUnmount?: BasicApiEvent<IEventArgs>;
    services?: $StandardServices & $StandardControllers;
}
