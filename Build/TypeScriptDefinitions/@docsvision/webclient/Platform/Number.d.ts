import { NumberImpl, NumberState } from "@docsvision/webclient/Platform/NumberImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства элемента управления [Число]{@link NumberControl}.
 */
export declare class NumberParams extends InputBasedControlParams<number> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Количество символов в дробной части. Если значение = NumberImpl.INFINITY_FRACTION_DIGITS, то можно писать сколько угодно чисел после запятой. */
    fractionDigits?: number;
    services?: $EditOperationStore & $LayoutInfo;
}
/**
 * Класс элемента управления Число.
 */
export declare class NumberControl extends InputBasedControl<number, NumberParams, NumberState> {
    /** @internal */
    protected createParams(): NumberParams;
    /** @internal */
    protected getServices(): $EditOperationStore & $LayoutInfo;
    /** @internal */
    private RealNumberBinding;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): NumberImpl;
}
