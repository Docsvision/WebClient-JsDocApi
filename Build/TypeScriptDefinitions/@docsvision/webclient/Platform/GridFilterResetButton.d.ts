import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ControlImpl } from "@docsvision/webclient/System/ControlImpl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
/**
 * Содержит публичные свойства элемента управления [Ссылка]{@link GridFilterClearButton}.
 */
export declare class GridFilterResetButtonParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    services?: $Layout;
}
/** @internal */
export interface GridFilterResetButtonState extends GridFilterResetButtonParams, BaseControlState {
}
/**
 * Контрол для отображения кнопки сброса фильтра
 */
export declare class GridFilterResetButton extends BaseControl<GridFilterResetButtonParams, GridFilterResetButtonState> {
    constructor(props: any);
    /** @internal */
    protected createParams(): GridFilterResetButtonParams;
    /** @internal */
    protected createImpl(): ControlImpl;
    /** @internal */
    protected onClick(): void;
    /** @internal */
    protected renderControl(): JSX.Element;
}
