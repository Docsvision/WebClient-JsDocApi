import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { CancelableEventArgs } from '@docsvision/webclient/System/CancelableEventArgs';
import React from "react";
/** @internal */
export interface BaseMainMenuItemState extends BaseMainMenuItemParams, PanelState {
}
/** @internal */
export declare type BaseMainMenuItemImplState = BaseMainMenuItemState;
/** @internal */
export declare class BaseMainMenuItemImpl<PropsT extends BaseMainMenuItemParams, StateT extends BaseMainMenuItemState> extends PanelImpl<PropsT, StateT> {
    constructor(props: PropsT, state?: StateT);
    componentWillMount(): void;
    onSelecting(): CancelableEventArgs<boolean>;
    onSelected(): void;
    onToggling(): CancelableEventArgs<boolean>;
    onToggled(): void;
    protected onClick(event: React.MouseEvent<any>): void;
    protected getCssClass(): string;
    protected onConfiguredToHideToggled: () => void;
    protected getAutoExpandLevelsCount: () => number;
    protected getChildrenAutoExpandLevelsCount: () => number;
    protected canAutoExpand: () => boolean;
    protected autoExpand(): void;
    protected renderChildren(children?: GenModels.ControlModel[]): React.ReactNode[];
    renderSelfContentItems(): (JSX.Element | JSX.Element[])[];
    renderSelfContent(): JSX.Element;
    renderSelf(): JSX.Element;
    renderControl(): JSX.Element;
}
