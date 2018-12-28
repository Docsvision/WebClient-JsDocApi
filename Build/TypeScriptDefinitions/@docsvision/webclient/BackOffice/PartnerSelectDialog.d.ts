import { SimpleItemViewContent } from "@docsvision/webclient/BackOffice/SimpleItemViewContent";
import { IPartnerDirectoryTreeItem } from "@docsvision/webclient/BackOffice/IPartnerDirectoryTreeItem";
import { IPartnerDataLoadingEventArgs } from "@docsvision/webclient/BackOffice/IPartnerDataLoadingEventArgs";
import { PartnerDirectoryItemVisualiser } from "@docsvision/webclient/BackOffice/PartnerDirectoryItemVisualiser";
import { $LayoutPartnerController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ICustomTreeNodeContentDefaultProps } from "@docsvision/webclient/Helpers/CustomTree/Theme/Default/CustomTreeNodeContentDefault";
import { QuickSearchLogic } from "@docsvision/webclient/Helpers/QuickSearchLogic";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import React from "react";
import { StyledComponent } from 'styled-components';
/** @internal */
export interface IPartnerSelectDialogSearchPathOptions {
    path: GenModels.DepartmentModel[];
    notAppendToSelectedFilterPath?: boolean;
}
/** @internal */
export interface IPartnerSelectDialogProps {
    partnerSelected: (node: GenModels.EmployeeDataModel) => void;
    searchDelay: number;
    onSelect?: () => void;
    predefinedFilter: GenModels.DepartmentModel;
    selectedFilterPath: GenModels.DepartmentModel[];
    onSelectedFilterPathChange?: (newPath: GenModels.DepartmentModel[]) => void;
    onSearchFilterPathChange?: (newPath: GenModels.DepartmentModel[]) => void;
    itemVisualiser: PartnerDirectoryItemVisualiser;
    searchResultsLoading: CancelableApiEvent<IPartnerDataLoadingEventArgs>;
    searchResultsLoaded: BasicApiEvent<IPartnerDataLoadingEventArgs>;
    services: $LayoutPartnerController;
}
/** @internal */
export interface IPartnerChildrenCacheItem {
    items: GenModels.PartnerDirectoryItem[];
    totalItemsCount: number;
    accessTimestamp: Date;
}
/** @internal */
export interface IPartnerChildrenCache {
    [id: string]: IPartnerChildrenCacheItem;
}
/** @internal */
export interface IPartnerSelectedNodesPath {
    [departmentId: string]: GenModels.PartnerDirectoryItem;
}
/** @internal */
export interface IPartnerSelectDialogState {
    /** Выбранный партнёр */
    selectedEmployee: GenModels.EmployeeDataModel;
    /** Выбранный узел, используется только для навигации с клавиатуры */
    selectedNode: GenModels.EmployeeDataModel;
    /** Список выбранных узлов с прошлых уровней, используется только для навигации с клавиатуры */
    selectedNodesPath: IPartnerSelectedNodesPath;
    searchRequestHelper: RequestHelper;
    showingSearchResults: boolean;
    searchText: string;
    searchItems: GenModels.PartnerDirectorySearchItem[];
    hasMoreSearchItems: boolean;
    searchDebouncer: QuickSearchLogic;
    searchMode: GenModels.PartnerSearchMode;
    selectedNodeFocused: boolean;
    loadChildrenHelper: RequestHelper;
    childrenListCache: IPartnerChildrenCache;
    initialLoading: boolean;
    initialLoadingState: LoadingState;
    directoryTimestamp: number;
}
/** @internal */
export declare class PartnerSelectDialog extends React.Component<IPartnerSelectDialogProps, IPartnerSelectDialogState> {
    static ChildrenPageSize: number;
    static SearchPageSize: number;
    static SimpleItemView: StyledComponent<typeof SimpleItemViewContent, any, ICustomTreeNodeContentDefaultProps, never>;
    static SimpleItemViewCompact: StyledComponent<typeof SimpleItemViewContent, any, ICustomTreeNodeContentDefaultProps, never>;
    /** @internal */
    state: IPartnerSelectDialogState;
    searchInput: HTMLInputElement;
    protected readonly rootId = "root";
    constructor(props: IPartnerSelectDialogProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(newProps: IPartnerSelectDialogProps): void;
    readonly selectedPartner: GenModels.EmployeeDataModel;
    protected onModalKeyDown: (ev: any) => void;
    protected onNavigateToFolder(departmentId: string): JQueryDeferred<{}>;
    protected onSelectedFilterPathChange: (newPath: GenModels.DepartmentModel[]) => void;
    protected onSelectedFilterMoveBack: () => void;
    protected readonly currentDepartmentId: string;
    protected readonly currentDepartmentName: string;
    protected readonly currentChildren: GenModels.PartnerDirectoryItem[];
    protected readonly currentChildrenCache: IPartnerChildrenCacheItem;
    protected getDepartmentCache(id: string): IPartnerChildrenCacheItem;
    protected clearCache(): void;
    protected loadChildrenList(departmentId: string, from: number, to: number): JQueryDeferred<IPartnerDirectoryTreeItem[]>;
    protected onChildrenLoaded(response: GenModels.PartnerTreeLoadResponse, departmentId: string, from: number): void;
    protected onReactListLoadRequest: (indexes: number[]) => void;
    protected search(query: GenModels.PartnerQuickSearchQuery, reset: boolean): JQueryDeferred<{}>;
    protected onSearchResultLoaded(response: GenModels.PartnerSearchResponse, reset: boolean): void;
    attachSearchInput: (elem: HTMLInputElement) => void;
    protected onInputKeyUp(ev: React.KeyboardEvent<any>): void;
    protected onInputChange(event: any): void;
    protected onSearchFilterPathChange(newPath: GenModels.DepartmentModel[]): void;
    private resetSearchMode;
    protected onSelectEmployee(item: GenModels.EmployeeDataModel, searchPathOptions?: IPartnerSelectDialogSearchPathOptions): void;
    protected shouldShowOpenButton(item: GenModels.PartnerDirectoryItem): boolean;
    protected onChildrenListItemClick: (item: GenModels.PartnerDirectoryItem) => void;
    protected onSearchItemClick: (item: GenModels.PartnerDirectorySearchItem) => void;
    protected onItemAccepted: (item: GenModels.PartnerDirectoryItem) => void;
    protected onChildrenListItemDoubleClick: (item: GenModels.PartnerDirectoryItem) => void;
    protected onSearchItemDoubleClick: (item: GenModels.PartnerDirectorySearchItem) => void;
    protected onChildrenListItemSelectSibling: (mode: "prev" | "next", index: number, getCollectionData: () => GenModels.PartnerDirectoryItem[]) => void;
    protected onSearchPathItemClick: (department: GenModels.DepartmentModel, item: GenModels.PartnerDirectorySearchItem) => void;
    protected onToggleSearchMode: () => void;
    protected onLoadNextSearchPage: () => JQueryDeferred<{}>;
    protected onLoadNewSearchResults: () => JQueryDeferred<{}>;
    protected renderGoToButton(item: GenModels.PartnerDirectoryItem): JSX.Element;
    renderSearchItem: (index: number, key: string) => JSX.Element;
    renderChildrenListItem: (key: string | number, item: GenModels.PartnerDirectoryItem, index: number) => JSX.Element;
    renderLoadingItem: (index: number, key: string | number) => JSX.Element;
    renderEmptyItem: (index: number, key: string | number) => JSX.Element;
    renderChildrenListItems(): JSX.Element;
    renderSearchItems(): JSX.Element;
    renderItems(): JSX.Element;
    /** @internal */
    render(): React.ReactNode;
}
