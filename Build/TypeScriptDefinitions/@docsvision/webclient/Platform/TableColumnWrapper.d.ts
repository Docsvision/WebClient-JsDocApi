import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Table } from "@docsvision/webclient/Platform/Table";
export declare class TableColumnWrapper implements GenModels.LayoutTableColumnInfo {
    private _private;
    constructor(info: GenModels.LayoutTableColumnInfo, table: Table, columnNumber: number);
    header: string;
    columnWidth: string;
    tip: string;
    visibility: boolean;
}
