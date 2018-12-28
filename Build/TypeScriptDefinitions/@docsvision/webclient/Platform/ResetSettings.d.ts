import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { $CurrentDialog } from "@docsvision/webclient/System/$CurrentDialog";
import { Optional } from "@docsvision/webclient/System/ServiceContainer";
/**
 * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
 */
export declare class Params extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    services?: Optional<$CurrentDialog>;
}
export interface State extends Params, BaseControlState {
}
/**
 * Элемент управления для отборажения имени и должности пользователя
 */
export declare class ResetSettings extends BaseControl<Params, State> {
    constructor(props: any);
    /** @internal */
    protected createParams(): Params;
    /** @internal */
    protected createImpl(): ControlImpl;
    onResetClick: () => void;
    link: import("styled-components").StyledComponent<"button", any, {}, never>;
    icon: import("styled-components").StyledComponent<"div", any, {}, never>;
    renderControl(): JSX.Element;
}
