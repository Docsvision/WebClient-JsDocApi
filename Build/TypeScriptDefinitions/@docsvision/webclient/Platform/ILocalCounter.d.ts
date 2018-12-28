/** @internal */
export interface ILocalCounter {
    localCount?: number;
    localCountTimestamp?: number;
}
/** @internal */
export interface ILocalCounterData {
    folderId: string;
    counter: ILocalCounter;
}
