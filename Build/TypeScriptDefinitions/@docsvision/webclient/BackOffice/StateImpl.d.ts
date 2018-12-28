import { StateParams } from "@docsvision/webclient/BackOffice/State";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface StateState extends StateParams, BaseControlState {
}
/** @internal */
export declare type StateImplState = StateState;
/** @internal */
export declare class StateImpl extends BaseControlImpl<StateParams, StateState> {
    constructor(props: StateParams, state: StateState);
    renderControl(): JSX.Element;
}
