import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства [LayoutScript]{@link LayoutScript}.
 */
export declare class LayoutScriptParams extends BaseControlParams {
    services?: $ControlStore;
}
/** @internal */
export interface LayoutScriptState extends LayoutScriptParams, BaseControlState {
}
/**
 * Класс, позволяющий хранить различную логику для элементов управления.
 */
export declare abstract class LayoutScript<ParamsT extends LayoutScriptParams, StateT extends BaseControlState = LayoutScriptState> extends BaseControl<ParamsT, StateT> {
    constructor(props: ParamsT);
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    render(): any;
}
