import { SimpleItemViewContent } from "@docsvision/webclient/BackOffice/SimpleItemViewContent";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RecursiveVisitor } from "@docsvision/webclient/Helpers/CustomTree/RecursiveVisitor";
import { ICustomTreeNodeContentDefaultProps } from "@docsvision/webclient/Helpers/CustomTree/Theme/Default/CustomTreeNodeContentDefault";
import { QuickSearchLogic } from "@docsvision/webclient/Helpers/QuickSearchLogic";
import { ReactListDynamic } from "@docsvision/webclient/Helpers/ReactList/ReactListDynamic";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
import { StyledComponent } from 'styled-components';
/** @internal */
export interface IDepartmentSelectedNodesPath {
    [departmentId: string]: GenModels.DepartmentModel;
}
/** @internal */
export interface IDepartmentSelectDialogFlatProps {
    itemTypes: GenModels.SearchDepartmentType;
    departmentSelected: (node: GenModels.DepartmentModel) => void;
    /** Where to perform the search */
    source: GenModels.DepartmentDataSource;
    /** Тип родительского контрола */
    controlType?: string;
    /** Задержка перед поиском (в мс) */
    searchDelay?: number;
    onSelect?: () => void;
    selectedNode: GenModels.DepartmentModel;
    searchText: string;
    services: $LayoutStaffController;
}
/** @internal */
export interface IDepartmentSelectDialogFlatState {
    requestHelper: RequestHelper;
    searchRequestHelper: RequestHelper;
    selectedNode: GenModels.DepartmentModel;
    selectedNodeFocused: boolean;
    /** Список выбранных узлов с прошлых уровней, используется только для навигации с клавиатуры */
    selectedNodesPath: IDepartmentSelectedNodesPath;
    searchResultCount: number;
    showingSearchResults: boolean;
    initialLoading: boolean;
    initialLoadingState: LoadingState;
    breadcrumbsNodes: GenModels.DepartmentModel[];
    childrenListCache: IDepartmentNodeCache;
    searchText: string;
    searchItems: GenModels.DepartmentSearchFlatItem[];
    searchTimerHandle: number;
    searchDebouncer: QuickSearchLogic;
    /** Время последнего изменения справочника */
    directoryTimestamp: number;
    hasMoreSearchItems: boolean;
}
export interface IDepartmentNodeCacheItem {
    items: GenModels.DepartmentFlatDigest[];
    totalItemsCount: number;
    accessTimestamp: Date;
}
export interface IDepartmentNodeCache {
    [id: string]: IDepartmentNodeCacheItem;
}
/**
 * @internal
 * Компонент не до конца реализован
 */
export declare class DepartmentSelectDialogFlat extends React.Component<IDepartmentSelectDialogFlatProps, IDepartmentSelectDialogFlatState> {
    static ItemHeight: number;
    static ChildrenPageSize: number;
    static SearchPageSize: number;
    static SimpleItemView: StyledComponent<typeof SimpleItemViewContent, any, ICustomTreeNodeContentDefaultProps, never>;
    static SimpleItemViewCompact: StyledComponent<typeof SimpleItemViewContent, any, ICustomTreeNodeContentDefaultProps, never>;
    static LoadingNode: StyledComponent<"button", any, ICustomTreeNodeContentDefaultProps, never>;
    static LoadTreeLevelDown: number;
    static LevelsToExapndByDefault: number;
    /** @internal */
    state: IDepartmentSelectDialogFlatState;
    reactList: ReactListDynamic;
    recursive: RecursiveVisitor<GenModels.DepartmentFlatDigest>;
    searchInput: HTMLInputElement;
    protected readonly rootId = "root";
    constructor(props: IDepartmentSelectDialogFlatProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(newProps: IDepartmentSelectDialogFlatProps): void;
    protected loadInitialDataOnDidMount(): Promise<void>;
    protected getNodeIconClass: (node: GenModels.DepartmentFlatDigest | GenModels.DepartmentSearchFlatItem) => "dv-ico dv-ico-department" | "dv-ico dv-ico-organisation";
    protected readonly currentDepartment: GenModels.DepartmentModel;
    protected readonly currentDepartmentId: string;
    protected readonly rootLabel: string;
    protected readonly currentChildrenCache: IDepartmentNodeCacheItem;
    protected attachSearchInput: (elem: HTMLInputElement) => void;
    protected clearCache(): void;
    protected getDepartmentCache(id?: string): IDepartmentNodeCacheItem;
    protected onModalKeyDown: (ev: any) => void;
    protected onNavigateToFolder: (parentNode?: GenModels.DepartmentModel) => void;
    protected loadPath(departmentId: string): Promise<GenModels.DepartmentModel[]>;
    protected loadChildrenListByIndexes: (indexes: number[]) => void;
    protected loadChildrenList: (parentNodeId: string, start: number, end: number) => JQueryDeferred<GenModels.DepartmentLoadFlatResponse>;
    protected onChildrenLoaded(response: GenModels.DepartmentLoadFlatResponse, parentId: string, from: number): void;
    protected search(query: GenModels.DepartmentSearchFlatQuery, reset: boolean): JQueryDeferred<{}>;
    protected isNodeDisabled(node: GenModels.DepartmentTreeNode | GenModels.DepartmentModel, enabledItemTypes?: GenModels.SearchDepartmentType): boolean;
    protected onNodeSelected(node: GenModels.DepartmentModel): void;
    protected onNodeAccepted(node: GenModels.DepartmentModel): void;
    protected onNodeExpanded(node: GenModels.DepartmentFlatDigest | GenModels.DepartmentSearchFlatItem): void;
    protected onNodeSelectSibling: (mode: "prev" | "next", index: number, getCollectionData: () => GenModels.DepartmentFlatDigest[] | GenModels.DepartmentSearchFlatItem[]) => void;
    protected onInputChange(ev: React.ChangeEvent<HTMLInputElement>): void;
    protected onInputKeyUp: (ev: React.KeyboardEvent<any>) => void;
    protected onLoadNewSearchResults: () => void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected getSearchResultLabel(): string;
    protected breadcrumbsOnChange: (nodes: GenModels.DepartmentModel[]) => void;
    protected onSelectedFilterMoveBack: () => void;
    private resetSearchMode;
    protected renderLoadingItem: (index: number, key: string | number) => JSX.Element;
    protected renderEmptyItem: (index: number, key: string | number) => JSX.Element;
    protected onLoadNextSearchPage: (page: any) => JQueryDeferred<{}>;
    protected onSearchPathItemClick: (department: GenModels.DepartmentModel, item: GenModels.DepartmentSearchFlatItem) => void;
    protected renderSearchItem: (index: number, key: string) => JSX.Element;
    protected renderNode: (key: string | number, node: GenModels.DepartmentFlatDigest, index: number) => JSX.Element;
    protected renderGoToButton(node: GenModels.DepartmentFlatDigest | GenModels.DepartmentSearchFlatItem): JSX.Element;
    protected renderItems(): JSX.Element;
    protected renderFlatItems(): JSX.Element;
    protected renderSearchItems(): JSX.Element;
    render(): React.ReactNode;
}
