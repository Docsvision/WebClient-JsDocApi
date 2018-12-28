import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
/**
 * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
 */
export declare class Params extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    services?: $DeviceType;
}
export interface State extends Params, BaseControlState {
}
/**
 * Элемент управления для отборажения имени и должности пользователя
 */
export declare class CryptoProInfo extends BaseControl<Params, State> {
    constructor(props: any);
    /** @internal */
    protected createParams(): Params;
    /** @internal */
    protected createImpl(): ControlImpl;
    componentDidMount(): void;
    renderControl(): JSX.Element;
}
