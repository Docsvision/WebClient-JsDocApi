import { GridFilterItemsImpl } from "@docsvision/webclient/Platform/GridFilterItemsImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/**
 * Содержит публичные свойства элемента управления [Ссылка]{@link GridFilterItems}.
 */
export declare class GridFilterItemsParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
}
/** @internal */
export interface GridFilterItemsState extends GridFilterItemsParams, PanelState {
}
/**
 * Контрол для отображения кнопки сброса фильтра
 */
export declare class GridFilterItems extends Panel<GridFilterItemsParams, GridFilterItemsState> {
    /** @internal */
    protected createParams(): GridFilterItemsParams;
    /** @internal */
    protected createImpl(): GridFilterItemsImpl;
}
