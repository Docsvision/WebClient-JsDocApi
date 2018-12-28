import { GridOptions } from "@docsvision/webclient/Legacy/GridOptions";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export interface IGridHtmlBuilder {
    getModel: () => any;
    refreshed: SimpleEvent<void>;
    modelChanged: SimpleEvent<any>;
    buildTableBody(options: GridOptions, tableBodyContainer: HTMLElement, callback?: (model: any) => void): void;
    buildTableHeader(options: GridOptions, tableHeaderContainer: HTMLElement, callback?: (model: any) => void): void;
    buildGridFooter(options: GridOptions, gridFooterContainer: HTMLElement, callback?: (model: any) => void): void;
    buildFilters(options: GridOptions): void;
    buildMobileGrid(options: GridOptions, rootElement: HTMLElement): void;
    applyGridFilter(): void;
    buildHeader(options: GridOptions, targetElement: HTMLElement, rootElement: HTMLElement): any;
    getChanges(): Promise<any>;
    showUpdateRequest(show: boolean): any;
}
