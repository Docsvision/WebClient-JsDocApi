import { $CurrentEmployeeId } from "@docsvision/webclient/StandardServices";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
import { IncomingLocalStorageCommunicationChanel } from "@docsvision/webclient/System/IncomingLocalStorageCommunicationChanel";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
/** @internal */
export declare class OutcomingLocalStorageCommunicationChanel {
    protected services: $LocalStorage & $CurrentEmployeeId;
    protected localStorageKey: string;
    protected tabId: string;
    protected maxMessageLife: number;
    protected pingTimer: any;
    protected relatedIncoming: IncomingLocalStorageCommunicationChanel;
    constructor(type: string, id: string, tabId: string, services: $LocalStorage & $CurrentEmployeeId);
    sendMessage<T>(message: IRealTimeCommunicationMessage<T>, sync?: boolean): void;
    startPing(intervalMs: number): void;
    stopPing(): void;
    dublicateMessagesTo: IncomingLocalStorageCommunicationChanel;
    removeStorageItem(): void;
    protected setQueue(data: IRealTimeCommunicationMessage<any>[]): void;
    protected getQueue(): IRealTimeCommunicationMessage<any>[];
}
