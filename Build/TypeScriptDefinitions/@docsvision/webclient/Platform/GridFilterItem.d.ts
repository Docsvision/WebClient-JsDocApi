import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { GridFilterItemImpl, GridFilterItemState } from "@docsvision/webclient/Platform/GridFilterItemImpl";
import { IGridFilterItemControl } from "@docsvision/webclient/Platform/IGridFilterItemControl";
import { Panel } from "@docsvision/webclient/Platform/Panel";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControlParams } from "@docsvision/webclient/System/BaseControl";
/**
 * Содержит публичные свойства элемента управления [GridFilterItem]{@link GridFilterItem}.
 */
export declare class GridFilterItemParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Включен ли параметр в поиск или нет. */
    filterItemEnabled?: boolean;
    /** Имя столбца фильтрации. */
    columnName: string;
    /** Заголовок фильтра. */
    header: string;
    /** Введенное значение фильтра. */
    filterItemValue: string;
    /** Тип данных столбца. */
    columnType?: GenModels.ColumnType;
    /** Состояние панели. */
    expanded?: boolean;
    services?: $DeviceType;
}
/**
 * Класс элемента управления для отображения значения фильтра в виде раскрывающейся панели.
 */
export declare class GridFilterItem extends Panel<GridFilterItemParams, GridFilterItemState> implements IGridFilterItemControl {
    readonly isGridFilterItem: boolean;
    /** @internal */
    init(): void;
    /** Веденое пользователем значение параметра. */
    filterItemValues: string[];
    /** Имя параметра, которое будет передано в поисковый запрос. */
    readonly columnName: string;
    /** Содержит false если ползователь исключил условие из поиска. */
    filterItemEnabled: boolean;
    /** Тип данных столбца */
    readonly columnType: GenModels.ColumnType;
    /** Значение дочернего элемента управления, отвечающего за ввод значения фильтра. */
    contorlValue: any;
    /** Состояние панели */
    filterItemExpanded: boolean;
    /** @internal */
    protected createParams(): GridFilterItemParams;
    /** @internal */
    protected createImpl(): GridFilterItemImpl;
}
