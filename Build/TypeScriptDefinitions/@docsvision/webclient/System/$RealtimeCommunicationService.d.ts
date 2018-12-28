import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
import { RealtimeServerSender } from "@docsvision/webclient/System/RealtimeServerSender";
import { RealtimeSubscriber } from "@docsvision/webclient/System/RealtimeSubscriber";
export interface IRealtimeCommunicationService {
    sendToServer<T>(message: IRealTimeCommunicationMessage<T>): void;
    sendBetweenTabs<T>(message: IRealTimeCommunicationMessage<T>, targetTabs?: string[], sync?: boolean): void;
    sendToTab<T>(tabId: string, message: IRealTimeCommunicationMessage<T>): void;
    sendToMasterTab<T>(message: IRealTimeCommunicationMessage<T>): void;
    hasSubscribers(messageType: string): boolean;
    subscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    unsubscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    setServerSender(messageType: string, processor: RealtimeServerSender<any>): void;
    getServerSender(messageType: string): void;
    initialized(): boolean;
    readonly isMasterTab: boolean;
    readonly currentTabId: string;
    readonly masterTabId: string;
    readonly sessionId: string;
}
export declare type $RealtimeCommunicationService = {
    realtimeCommunicationService: IRealtimeCommunicationService;
};
