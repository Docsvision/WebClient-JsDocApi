import { GridFilterItemsParams, GridFilterItemsState } from "@docsvision/webclient/Platform/GridFilterItems";
import { PanelImpl } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export declare type GridFilterItemsImplImplState = GridFilterItemsState;
/** @internal */
export declare class GridFilterItemsImpl extends PanelImpl<GridFilterItemsParams, GridFilterItemsImplImplState> {
    constructor(props: GridFilterItemsParams, state: GridFilterItemsImplImplState);
    renderControl(): JSX.Element;
}
