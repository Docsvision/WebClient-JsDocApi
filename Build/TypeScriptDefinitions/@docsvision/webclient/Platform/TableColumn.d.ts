import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { TableColumnImpl, TableColumnState } from "@docsvision/webclient/Platform/TableColumnImpl";
/**
 * Содержит публичные свойства элемента управления [Столбец таблицы]{@link TableColumn}.
 */
export declare class TableColumnParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
}
/**
 * Класс элемента управления Столбец таблицы
 *
 * Добавляет в web-разметку элемент управления для отображения столбца таблицы.
 */
export declare class TableColumn extends Panel<TableColumnParams, TableColumnState> {
    createParams(): TableColumnParams;
    /** @internal */
    createImpl(): TableColumnImpl;
}
