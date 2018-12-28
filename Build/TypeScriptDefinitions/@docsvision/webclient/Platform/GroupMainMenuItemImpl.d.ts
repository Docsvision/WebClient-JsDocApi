import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { GroupMainMenuItemParams } from "@docsvision/webclient/Platform/GroupMainMenuItem";
import React from "react";
/** @internal */
export interface GroupMainMenuItemState extends GroupMainMenuItemParams, BaseMainMenuItemState {
}
/** @internal */
export declare type GroupMainMenuItemImplState = GroupMainMenuItemState;
/** @internal */
export declare class GroupMainMenuItemImpl<P extends GroupMainMenuItemParams, S extends GroupMainMenuItemState> extends BaseMainMenuItemImpl<P, S> {
    constructor(props: P, state: S);
    protected onClick(event: React.MouseEvent<any>): void;
    protected canAutoExpand: () => boolean;
    protected getChildrenAutoExpandLevelsCount: () => number;
    renderProxyChildren(): React.ReactNode[];
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
