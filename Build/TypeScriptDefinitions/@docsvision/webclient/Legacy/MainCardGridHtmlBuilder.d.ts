import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { GridOptions } from "@docsvision/webclient/Legacy/GridOptions";
import { IGridHtmlBuilder } from "@docsvision/webclient/Legacy/IGridHtmlBuilder";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
/** @internal */
export declare class MainCardGridHtmlBuilder implements IGridHtmlBuilder {
    private folderId;
    private viewId;
    private allowRowResize;
    private pageSize;
    private dateMinWidth;
    private tableHeaderContainer;
    private tableBodyContainer;
    private gridFooterContainer;
    private mobileGridContainer;
    private refreshButton;
    private loader;
    private filterLoader;
    private rootElement;
    private options;
    private selectedCards;
    private colspanValue;
    private groupColumnList;
    private cardShowLink;
    private popupNotification;
    /** getModel property is getting overrided by parent grid class */
    getModel: () => GenModels.GridViewModel;
    refreshed: SimpleEvent<void>;
    modelChanged: SimpleEvent<any>;
    filterLayout: GenModels.LayoutViewModel;
    static RowDefaultHeight: string;
    static DefaultForeColor: string;
    static DefaultBackColor: string;
    static FilterSettingsName: string;
    private traceProvider;
    private services;
    constructor();
    buildMobileGrid(options: GridOptions, rootElement: HTMLElement): void;
    getCurrentPage(): number | null;
    private AddDisclosureEvent;
    private AddShowCardMobileEvent;
    private destroyMobileGrid;
    private destroyGrid;
    private buildMobilePaging;
    private destroyMobilePaging;
    private AddLoadMoreClick;
    private AddPage;
    private countNotClosable;
    buildTableHeader(options: GridOptions, tableHeaderContainer: HTMLElement, callback?: (model: GenModels.GridViewModel) => void): void;
    private shouldBuildHeader;
    private getColumnMinWidth;
    private getColumnWidth;
    /**
     * Равномерна ли ширина столбцов
     */
    private areColumnsEven;
    private removeLoader;
    private addLoader;
    private removeFilterLoader;
    private addFilterLoader;
    buildTableBody(options: GridOptions, tableBodyContainer: HTMLElement, callback?: (model: GenModels.GridViewModel) => void): void;
    buildHeader(options: GridOptions, targetElement: HTMLElement, rootElement: HTMLElement): void;
    private saveFolderSettings;
    private buildRow;
    private buildColumn;
    private isGroupColumn;
    private createEmptyTableRow;
    private buildSwitcher;
    buildGridFooter(options: GridOptions, gridFooterContainer: HTMLElement, callback?: (model: GenModels.GridViewModel) => void): void;
    static destroyFilters(): void;
    buildFilters(options: GridOptions): void;
    private checkExternalClick;
    private updateFilters;
    applyGridFilter(): void;
    private getDateMinWidth;
    private initHeaderCell;
    private getDataFromServer;
    private desktopCallback;
    private getSelectedFiltersData;
    private getValueByKey;
    private getSortedModel;
    private divide;
    private getGroups;
    private buildGroupingBody;
    private buildGroupingColumns;
    private updateGroupCSS;
    private createGroupRow;
    private initGroupingElement;
    private dotDotDotInit;
    private updateHtmlRowReadStatus;
    private iniItemSelector;
    private buildPageNavigator;
    private initPageLink;
    private activateOneStep;
    private activateCounter;
    private getPageData;
    private getParams;
    private loadMoreData;
    private getPage;
    getChanges(): Promise<GenModels.GridViewModel>;
    private getSortingColumn;
    private saveGridState;
    private onRefresh;
    /**
     * Визуальное уведомление о необходимости обновить грид
     */
    showUpdateRequest(show?: boolean): void;
    private initRowClick;
}
