import { PopoverMode } from "@docsvision/webclient/Helpers/PopoverHelpers/Popover";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { CancelableEvent } from "@docsvision/webclient/System/CancelableEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export interface IEditPopoverState {
    waitingState: LoadingState;
    currentTarget: HTMLElement;
    offScreenX?: boolean;
    offScreenY?: boolean;
    visible?: boolean;
    hideByEscOption: boolean;
    acceptByEnterOption: boolean;
    title: string;
    screenPadding: number;
    mode: PopoverMode;
    /**
     * Должен ли Popover скрываться при клике снаружи него.
     * Значение по умолчанию: false
     */
    hideByClickOutside?: boolean;
    ignoreModalOutsideClicks?: boolean;
    acceptingEvent: CancelableEvent<IEventArgs>;
    acceptedEvent: SimpleEvent<IEventArgs>;
    cancelingEvent: CancelableEvent<IEventArgs>;
    canceledEvent: SimpleEvent<IEventArgs>;
    showingEvent: CancelableEvent<IEventArgs>;
    shownEvent: SimpleEvent<IEventArgs>;
    hiddingEvent: CancelableEvent<IEventArgs>;
    hiddenEvent: SimpleEvent<IEventArgs>;
}
