import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/** @internal */
export declare class BaseRazorControlParams extends BaseControlParams {
    razorContent: IBindingResult<string>;
}
/** @internal */
export interface BaseRazorControlState extends BaseRazorControlParams, BaseControlState {
}
/** @internal */
export declare abstract class BaseRazorControl<PropsT extends BaseRazorControlParams = BaseRazorControlParams, StateT extends BaseRazorControlState = BaseRazorControlState> extends BaseControl<PropsT, StateT> {
    constructor(props: any);
    /** @internal */
    shouldComponentUpdate(): boolean;
    protected createImpl(): ControlImpl;
    mountRazorContent(razorContainer: HTMLElement): void;
    /** @internal */
    renderControl(): JSX.Element;
}
