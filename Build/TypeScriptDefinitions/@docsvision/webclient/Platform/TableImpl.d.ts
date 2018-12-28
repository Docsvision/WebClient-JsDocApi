import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { IRowInfo } from "@docsvision/webclient/Platform/IRowInfo";
import { TableColumnWrapper } from "@docsvision/webclient/Platform/TableColumnWrapper";
import { TableParams } from "@docsvision/webclient/Platform/Table";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
import React from "react";
/** @internal */
export interface TableState extends TableParams, PanelState {
    binding: IBindingResult<GenModels.LayoutTableBindingModel>;
    model: GenModels.LayoutTableBindingModel;
    saveAndReload: () => JQueryDeferred<GenModels.ControlModel>;
    saveTable: () => JQueryDeferred<any>;
    tableRows: IRowInfo[];
    newRowTemplate: IRowInfo;
    isExpanded: boolean;
    collapsible: boolean;
    addRowState: LoadingState;
    columnWrappers: TableColumnWrapper[];
    header: string;
    tip: string;
}
/** @internal */
export declare type TableImplState = TableState;
/** @internal */
export declare class TableImpl extends PanelImpl<TableParams, TableState> {
    static BindingNotSpecifiedMetadataKey: string;
    constructor(props: TableParams, state: TableState);
    protected prepareChildren(): void;
    protected parseRows(children: GenModels.ControlModel[]): void;
    setColumnProperty(columnIndex: number, propertyName: string, propertyValue: any): void;
    protected readonly editMode: boolean;
    protected onDisclosureClick(): void;
    toggleCollapsed(): void;
    protected onCollapsed(): void;
    protected onExpanded(): void;
    protected canAddRows(): boolean;
    protected canRemoveRows(): boolean;
    protected bindingConfigured(): boolean;
    readonly rows: string[];
    isCollapsed: boolean;
    readonly columns: TableColumnWrapper[];
    addRowInternal(scroll?: boolean): JQueryDeferred<any>;
    protected onAddRowClick(ev: React.MouseEvent<any>): void;
    protected isElementInViewport(el: any): boolean;
    /**
     * Проверяет, введены ли какие-либо значения пользователем в контролы указанной строки.
     * Функция может выдавать неверные результаты для нестандартных контролов, поэтому
     * следует использовать ее только там, где это некритично.
     */
    protected checkRowIsEmpty(rowIndex: number): boolean;
    removeRowIntenral(rowIndex: number): JQueryDeferred<any>;
    protected onRemoveRowClick(row: IRowInfo): void;
    protected getCssClass(): string;
    renderControl(): JSX.Element;
    getRowIndex(rowId: string): number;
}
