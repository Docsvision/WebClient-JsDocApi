import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
import { HistoryParams } from "@docsvision/webclient/BackOffice/History";
import { HistoryExternalRelations } from "@docsvision/webclient/BackOffice/HistoryExternalRelations";
import { HistoryView } from "@docsvision/webclient/BackOffice/HistoryView";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalHost } from "@docsvision/webclient/Helpers/ModalHost";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
/** @internal */
export interface HistoryState extends HistoryParams, BaseControlState {
    external: HistoryExternalRelations;
    /** Записи, которые будут показаны на странице при значении параметра {@link showPreview} = true. */
    previewRecords: GenModels.HistoryRecord[];
    /** Сигнализирует о том, что {@link previewRecords} содержит все записи истории. */
    previewRecordsContainsAllRecords: boolean;
    /** Идентификатор для поиска записей истории в кэше */
    cacheId: string;
    /** Идентификатор операции изменения */
    editOperation: string;
    employeeVisualiser: EmployeeVisualizer;
    modalHost: ModalHost;
    modalView: HistoryView;
    previewView: HistoryView;
}
/** @internal */
export interface HistoryImplState extends HistoryState {
    /** Временные записи, которые хранят данные до загрузки this.currentView */
    tempRecordsForView?: GenModels.HistoryRecord[];
}
/** @internal */
export declare class HistoryImpl extends BaseControlImpl<HistoryParams, HistoryImplState> {
    static ModalPageSize: number;
    constructor(props: HistoryParams, state: HistoryImplState);
    componentWillUnmount(): void;
    openHistoryWindow(): void;
    closeHistoryWindow(): void;
    onRecordsChanged(records: GenModels.HistoryRecord[]): void;
    renderModalWindow(): React.ReactNode;
    onButtonClick(event?: React.MouseEvent<any>): void;
    onShowMoreClick(): void;
    protected forceCloseHistoryWindow(): void;
    authorFilterValue: GenModels.EmployeeDataModel;
    dateFilterValue: Date;
    eventFilterValue: string;
    records: GenModels.HistoryRecord[];
    recordsOnPage: number;
    renderControl(): JSX.Element;
    attachModalView(view: HistoryView): void;
    attachPreviewView(view: HistoryView): void;
    protected syncViewWithTempRecords(view: HistoryView): void;
    readonly currentView: HistoryView;
    loadNextPage(pageSize?: number): JQueryDeferred<GenModels.HistorySearchResult>;
}
