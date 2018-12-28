import { BaseNavigationMainMenuItemImpl, BaseNavigationMainMenuItemState } from '@docsvision/webclient/Platform/BaseNavigationMainMenuItemImpl';
import { LayoutPageMainMenuItemParams } from "@docsvision/webclient/Platform/LayoutPageMainMenuItem";
/** @internal */
export interface LayoutPageMainMenuItemState extends LayoutPageMainMenuItemParams, BaseNavigationMainMenuItemState {
}
/** @internal */
export declare type LayoutPageMainMenuItemImplState = LayoutPageMainMenuItemState;
/** @internal */
export declare class LayoutPageMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<LayoutPageMainMenuItemParams, LayoutPageMainMenuItemState> {
    constructor(props: LayoutPageMainMenuItemParams, state: LayoutPageMainMenuItemState);
    getNavigationHref(): string;
}
