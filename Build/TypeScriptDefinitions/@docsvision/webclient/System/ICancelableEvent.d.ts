import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
/** Интерфейс отменяемого события. */
export declare type ICancelableEvent<T> = IBasicEvent<ICancelableEventArgs<T>>;
