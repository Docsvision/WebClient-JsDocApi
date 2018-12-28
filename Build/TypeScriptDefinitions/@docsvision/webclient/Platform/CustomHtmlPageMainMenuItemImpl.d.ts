import { BaseNavigationMainMenuItemImpl, BaseNavigationMainMenuItemState } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItemImpl";
import { CustomHtmlPageMainMenuItemParams } from "@docsvision/webclient/Platform/CustomHtmlPageMainMenuItem";
/** @internal */
export interface CustomHtmlPageMainMenuItemState extends CustomHtmlPageMainMenuItemParams, BaseNavigationMainMenuItemState {
}
/** @internal */
export declare type CustomHtmlPageMainMenuItemImplState = CustomHtmlPageMainMenuItemState;
/** @internal */
export declare class CustomHtmlPageMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<CustomHtmlPageMainMenuItemParams, CustomHtmlPageMainMenuItemState> {
    constructor(props: CustomHtmlPageMainMenuItemParams, state: CustomHtmlPageMainMenuItemState);
    getNavigationHref(): string;
}
