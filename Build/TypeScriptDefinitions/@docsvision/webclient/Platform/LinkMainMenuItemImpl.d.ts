import { NavigationLink } from "@docsvision/webclient/Helpers/MainMenu/NavigationLink";
import { BaseNavigationMainMenuItemImpl, BaseNavigationMainMenuItemState } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItemImpl";
import { LinkMainMenuItemParams } from "@docsvision/webclient/Platform/LinkMainMenuItem";
/** @internal */
export interface LinkMainMenuItemState extends LinkMainMenuItemParams, BaseNavigationMainMenuItemState {
    navigationClickElement: NavigationLink;
}
/** @internal */
export declare type LinkMainMenuItemImplState = LinkMainMenuItemState;
/** @internal */
export declare class LinkMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<LinkMainMenuItemParams, LinkMainMenuItemState> {
    constructor(props: LinkMainMenuItemParams, state: LinkMainMenuItemState);
    getNavigationHref(): string;
    attach: (element: NavigationLink) => void;
    click: () => void;
    renderSelfContent(): JSX.Element;
}
