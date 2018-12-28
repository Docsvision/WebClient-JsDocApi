import { StateButtonsParams } from "@docsvision/webclient/BackOffice/StateButtons";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RightSidebar } from "@docsvision/webclient/Legacy/RightSidebar";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface StateButtonsState extends StateButtonsParams, BaseControlState {
    /** Изменяется ли в данный момент состояние. */
    isChanging: boolean;
}
/** @deprecated */
export declare type StateButtonsImplState = StateButtonsState;
/** @internal */
export declare class StateButtonsImpl extends BaseControlImpl<StateButtonsParams, StateButtonsState> {
    protected sidebar: RightSidebar;
    protected sidebarRoot: HTMLElement;
    constructor(props: StateButtonsParams, state: StateButtonsState);
    protected initSidebar(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    showMenu(): void;
    hideMenu(): void;
    performClick(operationId: string): void;
    add(operationData: GenModels.OperationDataModel): void;
    remove(operationId: string): void;
    protected getStateButtons(): JSX.Element[];
    protected getSidebarButtons(): JSX.Element[];
    protected getCssClass(): string;
    protected getMenuButtonClassName(): string;
    renderControl(): JSX.Element;
}
