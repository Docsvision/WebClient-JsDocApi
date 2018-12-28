import { $CurrentEmployeeId } from "@docsvision/webclient/StandardServices";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
import { RealtimeSubscriber } from "@docsvision/webclient/System/RealtimeSubscriber";
/** @internal */
export declare class IncomingLocalStorageCommunicationChanel {
    private services;
    protected localStorageKey: string;
    protected chanelType: string;
    protected chanelId: string;
    protected receivedMessages: IRealTimeCommunicationMessage<any>[];
    protected _tabId: string;
    protected subscribers: {
        [messageType: string]: RealtimeSubscriber<any>[];
    };
    protected subscribersToAll: RealtimeSubscriber<any>[];
    protected serverMessageSubscribers: {
        [messageType: string]: RealtimeSubscriber<any>[];
    };
    protected lastMessage: Date;
    constructor(type: string, id: string, tabId: string, services: $LocalStorage & $CurrentEmployeeId);
    readonly tabId: string;
    enableStorageMonitoring(): void;
    disableStorageMonitoring(): void;
    readonly type: string;
    readonly id: string;
    subscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    hasSubscribers(messageType: string): boolean;
    unsubscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    subscribeToAll<T>(callback: RealtimeSubscriber<T>): void;
    unsubscribeFromAll<T>(callback: RealtimeSubscriber<T>): void;
    subscribeToServerMessages<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    unsubscribeFromServerMessages<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    processMessage<T>(item: IRealTimeCommunicationMessage<T>): void;
    lastActivity: Date;
    dispose(): void;
    removeStorageItem(): void;
    protected onStorageChanged: () => void;
    protected processIncomingMessage<T>(received: IRealTimeCommunicationMessage<T>): void;
    protected onReceivedMessage<T>(item: IRealTimeCommunicationMessage<T>, forServer: boolean): void;
    protected getQueue(): IRealTimeCommunicationMessage<any>[];
}
