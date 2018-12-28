import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/** @internal */
export declare enum BublingEventResult {
    Continue = 0,
    StopPropogation = 1
}
/** @internal */
export interface IBublingEventInfo {
    name?: string;
    bubling: boolean;
}
/** @internal */
export declare type BublingEventCallback = (actualSender: ISupportEventBubling, args: IEventArgs) => BublingEventResult | void;
/** @internal */
export interface ISupportEventBubling {
    supportEventBubling: boolean;
    getEventInfo<T>(event: IBasicEvent<T>): IBublingEventInfo;
    triggerBublingEvent<T>(eventName: string, actualSender: ISupportEventBubling, args: T): any;
    subscribteToBublingEvent(eventName: string, callback: BublingEventCallback): any;
    unsubscribteToBublingEvent(eventName: string, callback: BublingEventCallback): any;
}
