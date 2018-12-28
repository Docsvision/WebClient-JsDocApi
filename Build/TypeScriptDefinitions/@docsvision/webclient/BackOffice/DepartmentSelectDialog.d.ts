import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RecursiveVisitor } from "@docsvision/webclient/Helpers/CustomTree/RecursiveVisitor";
import { IAccessor } from "@docsvision/webclient/Helpers/DynamicModel/IAccessor";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface IDepartmentSelectDialogProps {
    itemTypes: GenModels.SearchDepartmentType;
    departmentSelected: (node: GenModels.DepartmentTreeNode) => void;
    departmentAccepted: (node: GenModels.DepartmentTreeNode) => void;
    /** Where to perform the search */
    source: GenModels.DepartmentDataSource;
    /** Задержка перед поиском (в мс) */
    searchDelay?: number;
    searchText: string;
    services: $LayoutStaffController;
}
/** @internal */
export interface IDepartmentSelectDialogState {
    requestHelper: RequestHelper;
    searchRequestHelper: RequestHelper;
    selectedNode?: GenModels.DepartmentTreeNode;
    focusedNode?: GenModels.DepartmentTreeNode;
    treeWrapper?: HTMLElement;
    searchResultCount: number;
    showingSearchResults: boolean;
    searchText: string;
    initialLoading: LoadingState;
    nodes: GenModels.DepartmentTreeNode[];
    flatNodes: GenModels.DepartmentTreeNode[];
    searchTimerHandle?: any;
}
/** @internal */
export declare class DepartmentSelectDialog extends React.Component<IDepartmentSelectDialogProps, IDepartmentSelectDialogState> {
    static LoadTreeLevelDown: number;
    static LevelsToExapndByDefault: number;
    /** @internal */
    state: IDepartmentSelectDialogState;
    recursive: RecursiveVisitor<GenModels.DepartmentTreeNode>;
    /** Уровень узла */
    levels: IAccessor<GenModels.DepartmentTreeNode, number>;
    /** Раскрыт ли узел */
    expanded: IAccessor<GenModels.DepartmentTreeNode, boolean>;
    /** Виден ли узел */
    visible: IAccessor<GenModels.DepartmentTreeNode, boolean>;
    /** Отображает процесс загрузки данных с сервера */
    childrenLoading: IAccessor<GenModels.DepartmentTreeNode, LoadingState>;
    /** Были ли загружены узлы с сервера */
    childrenLoaded: IAccessor<GenModels.DepartmentTreeNode, boolean>;
    /** Название для отображаемых имён узлов */
    displayNames: IAccessor<GenModels.DepartmentTreeNode, React.ReactNode>;
    /** Идентификаторы родительских узлов */
    parentIDs: IAccessor<GenModels.DepartmentTreeNode, string>;
    /** Выключенные узлы */
    disabled: IAccessor<GenModels.DepartmentTreeNode, boolean>;
    searchInput: HTMLElement;
    constructor(props: IDepartmentSelectDialogProps);
    componentDidMount(): void;
    protected getNodeID: (node: GenModels.DepartmentTreeNode) => string;
    protected getNodeIconClass: (node: GenModels.DepartmentTreeNode) => "dv-ico dv-ico-department" | "dv-ico dv-ico-organisation";
    protected resetStores: () => void;
    readonly selectedDepartment: GenModels.DepartmentTreeNode;
    protected loadTree(parentNode?: GenModels.DepartmentTreeNode): JQueryDeferred<GenModels.DepartmentTreeNode[]>;
    protected loadNodeChild(node: GenModels.DepartmentTreeNode): JQuery.PromiseBase<void | GenModels.DepartmentTreeNode[], never, never, never, never, never, never, never, never, never, never, never>;
    protected searchTree(searchText: string, resultNumber: number): JQueryDeferred<GenModels.DepartmentFindInTreeResult>;
    protected updateNodesVisibility(visibility: boolean, nodes: GenModels.DepartmentTreeNode[], parentNode?: GenModels.DepartmentTreeNode): void;
    protected updateNodesMeta(nodes: GenModels.DepartmentTreeNode[], parentNode?: GenModels.DepartmentTreeNode, enabledItemTypes?: GenModels.SearchDepartmentType): void;
    protected onNodeSelected(node: GenModels.DepartmentTreeNode): void;
    protected onNodeAccepted(node: GenModels.DepartmentTreeNode): void;
    protected onNodeBlur(node: GenModels.DepartmentTreeNode, isSelected: boolean): void;
    protected onNodeToggle(node: GenModels.DepartmentTreeNode): void;
    protected onInputChange(ev: React.ChangeEvent<any>): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected attachSearchInput(el: HTMLElement): void;
    protected onNodeKeyDown(ev: React.KeyboardEvent<any>, node: GenModels.DepartmentTreeNode, flatIndex: number): void;
    protected onContainerKeyDown(ev: React.KeyboardEvent<any>): void;
    protected getSearchResultLabel(): string;
    private resetSearchMode;
    renderSearchResult(nodeName: string, searchText: string, matchedPropertyName: string, matchedPropertyValue: string): JSX.Element;
    renderNode: (index: any, key: any) => JSX.Element;
    /** @internal */
    render(): React.ReactNode;
}
