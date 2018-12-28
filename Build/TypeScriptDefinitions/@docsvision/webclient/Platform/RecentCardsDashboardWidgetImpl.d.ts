import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RecentCardsDashboardWidgetParams } from "@docsvision/webclient/Platform/RecentCardsDashboardWidget";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
/** @internal */
export interface RecentCardsDashboardWidgetState extends RecentCardsDashboardWidgetParams, PanelState {
    gridModel: any;
    loader: RequestHelper;
    gridContainer: HTMLElement;
}
/** @deprecated */
export declare type RecentCardsDashboardWidgetImplState = RecentCardsDashboardWidgetState;
/** @internal */
export declare class RecentCardsDashboardWidgetImpl<PropsT extends RecentCardsDashboardWidgetParams, StateT extends RecentCardsDashboardWidgetState> extends PanelImpl<PropsT, StateT> {
    static readonly size = 5;
    constructor(props: PropsT, state: StateT);
    componentDidMount(): void;
    loadGridModel(): void;
    protected gridDataLoader(requestData: any, isMobile: boolean): JQueryDeferred<GenModels.CardListViewModel>;
    protected gridModelLoader: (requestData: any, isMobile: boolean) => JQueryDeferred<GenModels.GridViewModel>;
    mountGrid(): void;
    attachGridContainer: (elem: HTMLElement) => void;
    renderControl(): JSX.Element;
}
