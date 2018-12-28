/** @internal */
export interface IFoldersToCountData {
    folders: IFolderToCount[];
}
/** @internal */
export interface IFolderToCount {
    id: string;
    /** Control or someone, that requested the counter */
    sourceId: string;
    forceVirtualFolderSearch?: boolean;
    refreshTimeout: number;
}
