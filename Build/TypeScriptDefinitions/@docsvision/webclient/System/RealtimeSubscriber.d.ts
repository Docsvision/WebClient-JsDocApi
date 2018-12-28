import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
export declare type RealtimeSubscriber<T> = (message: IRealTimeCommunicationMessage<T>, receivedTime?: Date) => void;
