import { IFolderToCountOptions } from "@docsvision/webclient/Platform/IFolderToCountOptions";
import { IUnreadCountersData } from "@docsvision/webclient/Platform/IUnreadCountersData";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
export interface IUnreadCounter {
    addFolderToCount(folderId: string, sourceId: string, options: IFolderToCountOptions): void;
    removeFolderToCount(folderId: string, sourceId: string): void;
    setLocalCount(folderId: string, value: number, timestamp: number, shouldNotify: boolean): void;
    incrementLocalCount(folderId: string, timestamp?: number, shouldNotify?: boolean): void;
    decrementLocalCount(folderId: string, timestamp?: number, shouldNotify?: boolean): void;
    getUnreadCardsCount(folderId: string): number | undefined;
    unreadCardCounters: IUnreadCountersData;
    readonly unreadCardCountersChanged: IBasicEvent<IUnreadCountersData>;
}
export declare type $UnreadCounter = {
    unreadCounter: IUnreadCounter;
};
