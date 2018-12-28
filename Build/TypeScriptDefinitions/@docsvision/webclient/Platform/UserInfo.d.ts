import { $CurrentEmployee } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { EmployeeVisualizer } from "@docsvision/webclient/BackOffice/EmployeeVisualizer";
/**
 * Содержит публичные свойства [EmptyControlStub]{@link EmptyControlStub}.
 */
export declare class Params extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    services?: $CurrentEmployee;
}
export interface State extends Params, BaseControlState {
    employeeVisualiser: EmployeeVisualizer;
}
/**
 * Элемент управления для отборажения имени и должности пользователя
 */
export declare class UserInfo extends BaseControl<Params, State> {
    constructor(props: any);
    /** @internal */
    protected createParams(): Params;
    /** @internal */
    protected createImpl(): ControlImpl;
    fio: import("styled-components").StyledComponent<"div", any, {}, never>;
    position: import("styled-components").StyledComponent<"div", any, {}, never>;
    email: import("styled-components").StyledComponent<"a", any, {}, never>;
    body: import("styled-components").StyledComponent<"div", any, {}, never>;
    renderControl(): JSX.Element;
}
