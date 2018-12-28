import { DisplayInitiatorParams, DisplayInitiatorState } from '@docsvision/webclient/BackOffice/DisplayInitiator';
import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
export interface DisplayInitiatorImplState extends BaseControlImplState, DisplayInitiatorState {
}
export declare class DisplayInitiatorImpl extends BaseControlImpl<DisplayInitiatorParams, DisplayInitiatorImplState> {
    private employeeVisualizer;
    /** @internal */
    componentWillReceiveProps(nextProps: DisplayInitiatorParams): void;
    constructor(props: DisplayInitiatorParams, state?: DisplayInitiatorImplState);
    private getTip;
    renderControl(): JSX.Element;
}
