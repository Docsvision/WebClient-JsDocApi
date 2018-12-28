import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { MasterGroupMainMenuItemParams } from "@docsvision/webclient/Platform/MasterGroupMainMenuItem";
import React from "react";
/** @internal */
export interface MasterGroupMainMenuItemState extends MasterGroupMainMenuItemParams, BaseMainMenuItemState {
}
/** @internal */
export declare type MasterGroupMainMenuItemImplState = MasterGroupMainMenuItemState;
/** @internal */
export declare class MasterGroupMainMenuItemImpl extends BaseMainMenuItemImpl<MasterGroupMainMenuItemParams, MasterGroupMainMenuItemState> {
    constructor(props: MasterGroupMainMenuItemParams, state: MasterGroupMainMenuItemState);
    protected onClick(event: React.MouseEvent<any>): void;
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
