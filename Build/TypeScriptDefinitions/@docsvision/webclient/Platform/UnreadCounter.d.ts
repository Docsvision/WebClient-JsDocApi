import { IUnreadCounter } from "@docsvision/webclient/Platform/$UnreadCounter";
import { IFoldersToCountData } from "@docsvision/webclient/Platform/IFoldersToCountData";
import { IFolderToCountOptions } from "@docsvision/webclient/Platform/IFolderToCountOptions";
import { ILocalCounterData } from "@docsvision/webclient/Platform/ILocalCounter";
import { IUnreadCountersData } from "@docsvision/webclient/Platform/IUnreadCountersData";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { $RealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
import { IRealtimeCommunicationHub } from "@docsvision/webclient/System/IRealtimeCommunicationHub";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
/** @internal */
export declare class UnreadCounter implements IUnreadCounter {
    private updateTimeout;
    private realtimeCommunicationService;
    private globalTabsFolders;
    private sessionStorageKey;
    private foldersToCountData;
    private foldersToCountChangedEvent;
    private unreadCountersData;
    private unreadCountersDataChangedEvent;
    private triggerUnreadCountersChanged;
    private static CurrentUnreadCountersMessage;
    private static RequestCurrentCountersMessage;
    static SendLocalCountsMessage: string;
    constructor(services: $RealtimeCommunicationService);
    foldersToCount: IFoldersToCountData;
    readonly foldersToCountChanged: IBasicEvent<IFoldersToCountData>;
    addFolderToCount(folderId: string, sourceId: string, options: IFolderToCountOptions): void;
    removeFolderToCount(folderId: string, sourceId: string): void;
    unreadCardCounters: IUnreadCountersData;
    readonly unreadCardCountersChanged: IBasicEvent<IUnreadCountersData>;
    /**
     * Устанавливает локальное значение счётчика
     * @param folderId ИД Папки
     * @param value Значение
     * @param timestamp Если имеется существующий timestamp для локального значения и мы хотим использовать его
     * @param shouldNotify Нужно ли оповещать другие вкладки об изменении
     */
    setLocalCount(folderId: string, value: number, timestamp?: number, shouldNotify?: boolean): void;
    protected onUpdateLocalCounts: (message: IRealTimeCommunicationMessage<ILocalCounterData>) => void;
    incrementLocalCount(folderId: string, timestamp?: number, shouldNotify?: boolean): void;
    decrementLocalCount(folderId: string, timestamp?: number, shouldNotify?: boolean): void;
    getUnreadCardsCount(folderId: string): number | undefined;
    protected Initialize(): void;
    protected readonly serverResponseMessage: string;
    protected onFoldersToCountChanged(): void;
    protected sendCurrentCountersToOtherTab: (messageItem: IRealTimeCommunicationMessage<string>) => void;
    protected onReceivedCurrentCounters: (message: IRealTimeCommunicationMessage<IUnreadCountersData>) => void;
    protected onConnected: (message: IRealTimeCommunicationMessage<any>) => void;
    protected sendFoldersToService(): void;
    protected sendFoldersToServer: (message: IRealTimeCommunicationMessage<any>, hub: IRealtimeCommunicationHub) => Promise<void>;
    protected processResponse: (response: IRealTimeCommunicationMessage<UnreadCountersResponse>) => void;
    protected getCurrentEmployee(): string;
}
/** @internal */
export declare class UnreadCountersRequest {
    EmployeeId: string;
    RealtimeSessionId: string;
    PartialRequest: boolean;
    ClientFolders: Array<IUnreadCountersFolderInfo>;
}
export declare class UnreadCountersResponse {
    EmployeeId: string;
    RealtimeSessionId: string;
    ClientFolders: Array<ClientFolderCounter>;
}
export declare class ClientFolderCounter {
    FolderId: string;
    Counter?: number;
    ForceVirtualFolderSearch?: boolean;
}
export declare class IUnreadCountersFolderInfo {
    FolderId: string;
    ForceVirtualFolderSearch?: boolean;
    RefreshTimeout: number;
}
