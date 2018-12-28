import { BasicEventHandler, IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { ICancelableEvent } from "@docsvision/webclient/System/ICancelableEvent";
/** Тип параметра, содержащего событие контрола. */
export declare type BasicApiEvent<T> = IBasicEvent<T> | (Partial<IBasicEvent<T>> & BasicEventHandler<T>);
/** Тип параметра, содержащего отменяемое событие контрола. */
export declare type CancelableApiEvent<T> = ICancelableEvent<T> | (Partial<ICancelableEvent<T>> & BasicEventHandler<T>);
