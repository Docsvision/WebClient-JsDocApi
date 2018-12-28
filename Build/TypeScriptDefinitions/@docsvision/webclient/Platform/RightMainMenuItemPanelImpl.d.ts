import { RightMainMenuItemPanelParams } from "@docsvision/webclient/Platform/RightMainMenuItemPanel";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
/** @internal */
export interface RightMainMenuItemPanelState extends RightMainMenuItemPanelParams, PanelState {
}
/** @internal */
export declare type RightMainMenuItemPanelImplState = RightMainMenuItemPanelState;
/** @internal */
export declare class RightMainMenuItemPanelImpl extends PanelImpl<RightMainMenuItemPanelParams, RightMainMenuItemPanelState> {
    constructor(props: RightMainMenuItemPanelParams, state: RightMainMenuItemPanelState);
    renderControl(): JSX.Element;
}
