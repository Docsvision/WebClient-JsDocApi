import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { QueryConditionsTableImpl, QueryConditionsTableState } from "@docsvision/webclient/Platform/QueryConditionsTableImpl";
/**
 * Содержит публичные свойства элемента управления [QueryConditionsTable]{@link QueryConditionsTable}.
 */
export declare class QueryConditionsTableParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
}
/**
 * Класс элемента управления для отображения параметров поискового запроса в виде плоского списка.
 */
export declare class QueryConditionsTable extends Panel<QueryConditionsTableParams, QueryConditionsTableState> {
    /** @internal */
    protected createParams(): QueryConditionsTableParams;
    /** @internal */
    protected createImpl(): QueryConditionsTableImpl;
}
