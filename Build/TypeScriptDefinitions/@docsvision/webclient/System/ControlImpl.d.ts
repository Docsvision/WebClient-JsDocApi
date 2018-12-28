import { BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
import * as React from 'react';
export declare class ControlImpl extends BaseControlImpl<BaseControlParams, BaseControlImplState> {
    private renderControlFunction?;
    constructor(props: BaseControlParams, state?: BaseControlImplState, renderControlFunction?: () => React.ReactNode);
    readonly isControlImpl: boolean;
    renderControl(): React.ReactNode;
}
