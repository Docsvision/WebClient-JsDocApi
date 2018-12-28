import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { StandardMainMenuContainerParams } from "@docsvision/webclient/Platform/StandardMainMenuContainer";
/** @internal */
export interface StandardMainMenuContainerState extends StandardMainMenuContainerParams, BaseMainMenuItemState {
}
/** @internal */
export declare type StandardMainMenuContainerImplState = StandardMainMenuContainerState;
/** @internal */
export declare class StandardMainMenuContainerImpl extends BaseMainMenuItemImpl<StandardMainMenuContainerParams, StandardMainMenuContainerState> {
    constructor(props: any, state: StandardMainMenuContainerState);
    renderControl(): JSX.Element;
}
