import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { QueryConditionsTableParams } from "@docsvision/webclient/Platform/QueryConditionsTable";
import React from 'react';
/** @internal */
export interface QueryConditionsTableState extends QueryConditionsTableParams, PanelState {
}
/** @internal */
export declare class QueryConditionsTableImpl extends PanelImpl<QueryConditionsTableParams, QueryConditionsTableState> {
    constructor(props: QueryConditionsTableParams, state: QueryConditionsTableState);
    /** @internal */
    renderControl(): React.ReactNode[];
}
