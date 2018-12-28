import { GridFilterItemParams } from "@docsvision/webclient/Platform/GridFilterItem";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
/** @internal */
export interface GridFilterItemState extends GridFilterItemParams, PanelState {
}
/** @internal */
export declare class GridFilterItemImpl extends PanelImpl<GridFilterItemParams, GridFilterItemState> {
    constructor(props: GridFilterItemParams, state: GridFilterItemState);
    getCssClass(): string;
    toggle(expanded: boolean): void;
    onExpanded(): void;
    getValueControl(): InputBasedControl<any, InputBasedControlParams<any>, InputBasedControlState<any>>;
    renderSwitch(): JSX.Element;
    /** @internal */
    renderControl(): JSX.Element;
}
