import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
/** @deprecated */
export declare type LayoutControlWrapper = ApiControlWrapper<any, any>;
/** @deprecated */
export declare class ApiControlWrapper<P extends BaseControlParams, S extends BaseControlState> {
    control: BaseControl<P, S>;
}
