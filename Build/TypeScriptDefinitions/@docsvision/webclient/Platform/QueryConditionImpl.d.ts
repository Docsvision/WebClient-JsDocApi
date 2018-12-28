import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { QueryConditionParams } from "@docsvision/webclient/Platform/QueryCondition";
/** @internal */
export interface QueryConditionState extends QueryConditionParams, PanelState {
}
/** @internal */
export declare class QueryConditionImpl extends PanelImpl<QueryConditionParams, QueryConditionState> {
    constructor(props: QueryConditionParams, state: QueryConditionState);
    getCssClass(): string;
    renderLabel(): JSX.Element;
    renderSwitch(): JSX.Element;
    /** @internal */
    renderControl(): JSX.Element;
}
