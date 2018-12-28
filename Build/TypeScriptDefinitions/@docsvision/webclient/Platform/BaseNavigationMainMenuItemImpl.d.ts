import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { BaseNavigationMainMenuItemParams } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItem";
/** @internal */
export interface BaseNavigationMainMenuItemState extends BaseNavigationMainMenuItemParams, BaseMainMenuItemState {
}
/** @internal */
export declare type BaseNavigationMainMenuItemImplState = BaseNavigationMainMenuItemState;
/** @internal */
export declare abstract class BaseNavigationMainMenuItemImpl<PropsT extends BaseNavigationMainMenuItemParams, StateT extends BaseNavigationMainMenuItemState> extends BaseMainMenuItemImpl<PropsT, StateT> {
    constructor(props: PropsT, state: StateT);
    onContentClick(): void;
    protected getCssClass(): string;
    abstract getNavigationHref(): string;
    renderSelfContent(): JSX.Element;
}
