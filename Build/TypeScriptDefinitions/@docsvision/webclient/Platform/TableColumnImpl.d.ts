import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { TableColumnParams } from "@docsvision/webclient/Platform/TableColumn";
import { TableImpl } from "@docsvision/webclient/Platform/TableImpl";
/** @internal */
export interface TableColumnState extends TableColumnParams, PanelState {
    /** Таблица. */
    table: TableImpl;
    /** Номер столбца таблицы. */
    columnNumber: number;
    /** Ширина столбца таблицы (любые единицы измерения). */
    columnWidth: string;
}
/** @deprecated */
export declare type TableColumnImplState = TableColumnState;
/** @internal */
export declare class TableColumnImpl extends PanelImpl<TableColumnParams, TableColumnState> {
    constructor(props: TableColumnParams, state: TableColumnState);
    protected prepareChildren(): void;
    renderControl(): JSX.Element;
}
