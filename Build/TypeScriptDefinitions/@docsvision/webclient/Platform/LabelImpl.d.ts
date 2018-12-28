import { LabelParams } from "@docsvision/webclient/Platform/Label";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface LabelState extends LabelParams, BaseControlState {
}
/** @internal */
export declare type LabelImplState = LabelState;
/** @internal */
export declare class LabelImpl extends BaseControlImpl<LabelParams, LabelState> {
    constructor(props: LabelParams, state: LabelState);
    renderControl(): JSX.Element;
}
