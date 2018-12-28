import { BlockParams } from "@docsvision/webclient/Platform/Block";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { CancelableEventArgs } from "@docsvision/webclient/System/CancelableEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import React from "react";
/** @internal */
export interface BlockState extends PanelState, BlockParams {
}
/** @internal */
export declare class BlockImpl extends PanelImpl<BlockParams, BlockState> {
    constructor(props: BlockParams, state: BlockState);
    protected handleHeaderClick(event: React.MouseEvent<any>): void;
    toggleCollapsed(): CancelableEventArgs<IEventArgs>;
    protected getCssClass(): string;
    protected onCollapsed(): void;
    protected onExpanded(): void;
    protected getItemsStyle(): React.CSSProperties;
    isCollapsed: boolean;
    renderControl(): JSX.Element;
}
