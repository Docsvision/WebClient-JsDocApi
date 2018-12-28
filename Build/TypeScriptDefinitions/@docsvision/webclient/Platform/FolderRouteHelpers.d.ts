import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Grid } from "@docsvision/webclient/Legacy/Grid";
import { GridOptions } from "@docsvision/webclient/Legacy/GridOptions";
import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
/** @internal */
export declare class FolderRouteHelpers {
    static openFolder(folderId: string, color?: string): void;
    static makeFolderUrl(folderId: string, color?: string): string;
    static getRecentCardsUrl(): string;
    static makeFolderRouteData(folderId?: string, color?: string): IFolderRouteData;
    static mountGrid(gridModel: GenModels.CardListViewModel, options?: Partial<GridOptions>): JQueryDeferred<{}>;
    static mountGridTo(gridModel: GenModels.CardListViewModel, gridContainer: HTMLElement, options?: Partial<GridOptions>): void;
    static getGridContainer(id?: string): Grid;
}
