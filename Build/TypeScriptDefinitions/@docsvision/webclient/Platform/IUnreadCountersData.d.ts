import { ILocalCounter } from "@docsvision/webclient/Platform/ILocalCounter";
/** @internal */
export declare type IUnreadCountersData = {
    [folderId: string]: IUnreadCounter;
};
/** @internal */
export interface IUnreadCounter extends ILocalCounter {
    count: number;
    timestamp?: number;
}
