import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { GridOptions } from "@docsvision/webclient/Legacy/GridOptions";
import { IGridHtmlBuilder } from "@docsvision/webclient/Legacy/IGridHtmlBuilder";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export declare class Grid {
    private targetElement;
    private rootElement;
    private tableHeader;
    private tableBody;
    private gridFooter;
    private isMobileBuilt;
    private isDesktopBuilt;
    private htmlBuilder;
    model: GenModels.GridViewModel;
    options: GridOptions;
    private readonly IsMobileBuilt;
    private readonly IsDesktopBuilt;
    constructor(element: HTMLElement, model: GenModels.GridViewModel, options: GridOptions, htmlBuilder: IGridHtmlBuilder);
    onModelChange: (sender: any, model: any) => void;
    private initialize;
    private refreshLayoutToMakeIEBugsRunAway;
    rebuildIfNeeded(): void;
    applyFilters(): void;
    /**
     * Возвращает загруженные с сервера новые данные грида
     */
    getChanges(): Promise<GenModels.GridViewModel>;
    /**
     * Визуальное уведомление о необходимости обновить грид
     */
    showUpdateRequest(show?: boolean): void;
    readonly refreshed: SimpleEvent<void>;
    isSearching(): string;
    /**
     * Is two grid models equal
     * @param model1 First grid model
     * @param model2 Second grid model
     * @param ignoreMeta Ignore meta data differences or not
     * @param ignoreReadStatus Ignore read status or not
     * @param paramsToCheck Row params to check on differences
     */
    static isEqual(model1: GenModels.GridViewModel, model2: GenModels.GridViewModel, ignoreMeta?: boolean, ignoreReadStatus?: boolean, paramsToCheck?: string[]): boolean;
}
