import { Employee } from "@docsvision/webclient/BackOffice/Employee";
import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { HistoryExternalRelations } from "@docsvision/webclient/BackOffice/HistoryExternalRelations";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { QuickSearchLogic } from "@docsvision/webclient/Helpers/QuickSearchLogic";
import { DateTimePicker } from "@docsvision/webclient/Platform/DateTimePicker";
import { TextBox } from "@docsvision/webclient/Platform/TextBox";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface HistoryViewProps {
    previewRecords: GenModels.HistoryRecord[];
    employeeVisualiser: EmployeeVisualizer;
    external: HistoryExternalRelations;
    pageSize: number;
    autoLoadScrollGap?: number;
    onRecordsChanged?: (records: GenModels.HistoryRecord[]) => void;
    /** Restricts height and enables scroll for modal window view. */
    modalMode: boolean;
    showFilters: boolean;
    autoLoadOnScroll: boolean;
    useTableMode?: boolean;
    operationsToHide: string[];
    cacheId: string;
    editOperation: string;
}
/** @internal */
export interface HistoryViewState {
    loader: RequestHelper;
    records: GenModels.HistoryRecord[];
    cacheId: string;
    authorNameFilter: Employee;
    dateFilter: DateTimePicker;
    eventSearch: TextBox;
    hasMore: boolean;
    bodyScrollContainer: HTMLElement;
    quickSearchLogic: QuickSearchLogic;
}
/** @internal */
export declare class HistoryView extends React.Component<HistoryViewProps, HistoryViewState> {
    /** @internal */
    state: HistoryViewState;
    constructor(props: HistoryViewProps);
    componentDidMount(): void;
    loadRecords(authorNameFilter?: string, dateFilter?: Date, eventSearch?: string, pageSize?: number): JQueryDeferred<GenModels.HistorySearchResult>;
    loadNextPage(pageSize?: number): JQueryDeferred<GenModels.HistorySearchResult>;
    reload(): void;
    onRecordsChanged(): void;
    isScrolledDown(elem: HTMLElement): boolean;
    loadIfScrollDown(): void;
    onBodyScroll(ev: React.UIEvent<any>): void;
    attachTableBodyContainer(elem: HTMLElement): void;
    onEmployeeChanged(sender: any, args: IDataChangedEventArgs): void;
    onDateChanged(sender: any, args: IDataChangedEventArgs): void;
    onEventSearchChanged(sender: any, args: IDataChangedEventArgs): void;
    renderTableHeader(): JSX.Element;
    renderTableBody(): JSX.Element;
    render(): JSX.Element;
    attachAuthorFilter(control: Employee): void;
    attachDateFilter(control: DateTimePicker): void;
    attachEventFilter(control: TextBox): void;
    records: GenModels.HistoryRecord[];
    authorFilterValue: GenModels.EmployeeDataModel;
    dateFilterValue: Date;
    eventFilterValue: string;
}
