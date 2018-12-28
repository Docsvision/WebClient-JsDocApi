import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { IBublingEventInfo } from "@docsvision/webclient/System/ISupportEventBubling";
import { BasicEventHandler, IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
/** @internal */
export declare abstract class BasicEvent<T> implements IBasicEvent<T> {
    protected handlers: BasicEventHandler<T>[];
    protected mDefaultSender: () => LayoutControl;
    protected mEventInfo: IBublingEventInfo;
    constructor(sender: any, subscribers?: BasicEventHandler<T>[]);
    subscribe(handler: BasicEventHandler<T>): void;
    unsubscribe(handler: BasicEventHandler<T>): void;
    defaultSender: () => LayoutControl;
    protected triggerAll(sender?: any, data?: T): void;
    protected triggerBublingEvent(sender?: any, data?: T): void;
}
