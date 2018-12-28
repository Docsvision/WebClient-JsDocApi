import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { FolderCardsDashboardWidgetParams } from "@docsvision/webclient/Platform/FolderCardsDashboardWidget";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export interface FolderCardsDashboardWidgetState extends FolderCardsDashboardWidgetParams, PanelState {
    gridModel: any;
    loader: RequestHelper;
    gridContainer: HTMLElement;
}
/** @deprecated */
export declare type FolderCardsDashboardWidgetImplState = FolderCardsDashboardWidgetState;
/** @internal */
export declare class FolderCardsDashboardWidgetImpl<PropsT extends FolderCardsDashboardWidgetParams, StateT extends FolderCardsDashboardWidgetState> extends PanelImpl<PropsT, StateT> {
    static readonly size = 5;
    constructor(props: PropsT, state: StateT);
    componentDidMount(): void;
    loadGridModel(): void;
    protected gridDataLoader(): JQueryDeferred<GenModels.CardListViewModel>;
    protected gridModelLoader: (requestData: any, isMobile: boolean) => JQueryDeferred<GenModels.GridViewModel>;
    mountGrid(): void;
    attachGridContainer: (elem: HTMLElement) => void;
    renderControl(): JSX.Element;
}
