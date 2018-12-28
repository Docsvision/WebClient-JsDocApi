import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RadioGroupImpl, RadioGroupState } from "@docsvision/webclient/Platform/RadioGroupImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $ControlStore, $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства элемента управления [Группа радиокнопок]{@link RadioGroup}.
 */
export declare class RadioGroupParams extends InputBasedControlParams<string> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Положение метки элемента - cлева/cправа. */
    labelPlacement: GenModels.RadioGroupLabelLocation;
    /** Количество колонок для расположения радио-кнопок. */
    columnCount: number;
    /** Список элементов, доступных для выбора */
    items: GenModels.BindingMetadata[];
    services?: $EditOperationStore & $LayoutInfo & $Layout & $ControlStore;
}
/**
 * Класс элемента управления Группа радиокнопок
 *
 * Добавляет в web-разметку элемент управления для выбора и отображения варианта из набора доступных.
 */
export declare class RadioGroup extends InputBasedControl<string, RadioGroupParams, RadioGroupState> {
    /** @internal */
    protected createParams(): RadioGroupParams;
    /** @internal */
    protected getServices(): $EditOperationStore & $LayoutInfo & $Layout & $ControlStore;
    private setRadioGroupElements;
    private setBinding;
    private setDefault;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected getDefault(): string;
    /** @internal */
    protected createImpl(): RadioGroupImpl;
}
