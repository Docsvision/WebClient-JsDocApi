import { BasicApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { BasicEvent } from "@docsvision/webclient/System/BasicEvent";
import { BasicEventHandler, IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
/** Простое событие, без функциональности отмены. */
export declare class SimpleEvent<T> extends BasicEvent<T> {
    constructor(sender?: any, subscribers?: {
        (sender: any, args?: T): void;
    }[]);
    /** Уведомляет подписчиков о событии с передачей отправителя, указанного при создании события. */
    trigger(data?: T): void;
    /** Уведомляет подписчиков о событии. */
    triggerWith(sender: any, data?: T): void;
    /** Преобразует тип события к {@link SimpleEvent}. */
    static cast<T>(event: IBasicEvent<T> | BasicApiEvent<T> | string): SimpleEvent<T> & BasicEventHandler<T>;
    /** Создает экземпляр {@link SimpleEvent}. */
    static Create<T>(sender: any, subscriberFunc?: BasicApiEvent<T> | string): SimpleEvent<T> & BasicEventHandler<T>;
}
