import { $LayoutController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Layout } from "@docsvision/webclient/System/Layout";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/** @internal */
export declare class LayoutSearchParametrsDialog {
    private services;
    static SearchParametersDialogLayoutPosition: string;
    static LastSearchLocalStoragePrefix: string;
    constructor(services: $LayoutManager & $LayoutController & $LocalStorage);
    showDialog(searchId: string, layout?: GenModels.LayoutViewModel): JQueryDeferred<GenModels.SearchParameter[]>;
    getParameters(layout: Layout): GenModels.SearchParameter[];
    clearAll(layout: Layout): void;
    enableAll(layout: Layout): void;
    loadLastSearch(searchId: string, layout: Layout): void;
    saveLastSearch(searchId: string, layout: Layout): void;
}
