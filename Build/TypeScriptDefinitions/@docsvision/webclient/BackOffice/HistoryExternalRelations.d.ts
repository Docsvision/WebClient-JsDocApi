import { $LayoutHistoryController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class HistoryExternalRelations {
    private cardId;
    private services;
    constructor(cardId: string, services: $LayoutHistoryController);
    getHistoryRecords(skip: number, maxCount: number, cacheId: string, editOperation: string, hideOperations?: string[], employeeName?: string, date?: Date, eventSearch?: string): JQueryDeferred<GenModels.HistorySearchResult>;
}
