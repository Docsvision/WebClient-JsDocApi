import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { Layout, LayoutParams } from "@docsvision/webclient/System/Layout";
import { ControlStore } from "@docsvision/webclient/System/ControlStore";
import { IEditOperationStore } from "@docsvision/webclient/System/IEditOperationStore";
import { LayoutContainer } from "@docsvision/webclient/System/LayoutContainer";
/** @internal */
export interface LayoutState extends LayoutParams, PanelState {
    isInitialized: boolean;
    controlStore: ControlStore;
    cardInfo: GenModels.CardInfoModel;
    layoutInfo: GenModels.LayoutInfoModel;
    layoutContainer: LayoutContainer;
    editOperations: IEditOperationStore;
    saved: boolean;
    cardTypeName: string;
}
/** @internal */
export interface LayoutImplProps extends LayoutParams {
}
/** @internal */
export declare type LayoutImplState = LayoutState;
/** @internal */
export declare class LayoutImpl extends PanelImpl<LayoutImplProps, LayoutImplState> {
    constructor(props: LayoutImplProps, state: LayoutImplState);
    protected readonly wrapper: Layout;
    protected prepareChildren(): void;
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
