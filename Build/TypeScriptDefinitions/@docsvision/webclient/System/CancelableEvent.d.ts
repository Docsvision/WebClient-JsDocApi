import { CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { BasicEvent } from "@docsvision/webclient/System/BasicEvent";
import { CancelableEventArgs } from "@docsvision/webclient/System/CancelableEventArgs";
import { BasicEventHandler } from "@docsvision/webclient/System/IBasicEvent";
import { ICancelableEvent } from "@docsvision/webclient/System/ICancelableEvent";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
/** Отменяемое событие. */
export declare class CancelableEvent<T> extends BasicEvent<ICancelableEventArgs<T>> {
    private deferred;
    constructor(sender?: any, subscribers?: {
        (sender: any, args?: ICancelableEventArgs<T>): void;
    }[]);
    /** @internal */
    protected triggerAll(sender?: any, data?: ICancelableEventArgs<T>): void;
    /** Уведомляет подписчиков о событии с передачей объекта {@link ICancelableEventArgs}.  */
    triggerWithArgs(sender: any, argsP: ICancelableEventArgs<T>): void;
    /** Уведомляет подписчиков о событии с передачей данных и отправителя. */
    triggerWith(sender: any, data?: T): CancelableEventArgs<T>;
    /** Уведомляет подписчиков о событии с передачей данных и отправителя, указанного при создании события. */
    trigger(data?: T): CancelableEventArgs<T>;
    /** Конструирует объект параметров. */
    createArgs(data?: T): CancelableEventArgs<T>;
    /** Преобразует тип события к {@link CancelableEvent}. */
    static cast<T>(event: ICancelableEvent<T> | CancelableApiEvent<T> | string): CancelableEvent<T> & BasicEventHandler<T>;
    /** Создает экземпляр {@link CancelableEvent}. */
    static Create<T>(sender: any, subscriberFunc?: CancelableApiEvent<T> | string): CancelableEvent<T> & BasicEventHandler<T>;
}
