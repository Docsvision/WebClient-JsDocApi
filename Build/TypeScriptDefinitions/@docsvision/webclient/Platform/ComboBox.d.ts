import { ComboBoxImpl, ComboBoxState } from "@docsvision/webclient/Platform/ComboBoxImpl";
import { IComboBoxVariant } from "@docsvision/webclient/Platform/IComboBoxVariant";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
/** @deprecated @internal */
export declare class ComboBoxParams extends InputBasedControlParams<IComboBoxVariant> {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Выбранное значение. */
    selectedValue?: IComboBoxVariant;
    /** Список вариантов значений. */
    variants: IComboBoxVariant[];
    /** Раскрыт ли выпадающий список. */
    expanded?: boolean;
    /** При выборе нового значения. */
    onSelect?: (variant: IComboBoxVariant) => void;
    /** Название класса. */
    className?: string;
    services?: $LayoutInfo & $EditOperationStore;
}
/** @deprecated @internal */
export declare class ComboBox extends InputBasedControl<IComboBoxVariant, ComboBoxParams, ComboBoxState> {
    protected createParams(): ComboBoxParams;
    protected getServices(): $LayoutInfo & $EditOperationStore;
    protected createImpl(): ComboBoxImpl;
}
