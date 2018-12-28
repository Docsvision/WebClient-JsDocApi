import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { DropdownImpl, DropdownState } from "@docsvision/webclient/Platform/DropdownImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Содержит публичные свойства элемента управления [Раскрывающийся список]{@link Dropdown}.
 */
export declare class DropdownParams extends InputBasedControlParams<string> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Список элементов, доступных для выбора */
    items: GenModels.Element[];
    /** @deprecated Используйте {@link items} */
    elements?: GenModels.Element[];
    /** Флаг развернутости Раскрывающегося списка */
    isCollapsed?: boolean;
    /** Доступно ли нулевое значение для выбора. Как правило значение сооветствует настройкам привязанного поля карточки в метаданных. */
    isEmptyKeyAllowed?: boolean;
    /** Событие возникает при сворачивании Раскрывающегося списка. */
    collapsing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после сворачивания Раскрывающегося списка. */
    collapsed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при разворачивании Раскрывающегося списка. */
    expanding?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после разворачивания Раскрывающегося списка. */
    expanded?: BasicApiEvent<IEventArgs>;
    services?: $EditOperationStore & $LayoutInfo;
}
/**
 * Класс элемента управления Раскрывающийся список.
 */
export declare class Dropdown extends InputBasedControl<string, DropdownParams, DropdownState> {
    protected createParams(): DropdownParams;
    protected getServices(): $EditOperationStore & $LayoutInfo;
    private setElements;
    private readonly getElements;
    private setBinding;
    private setDefault;
    protected getBindings(): IBindingResult<any>[];
    protected getDefault(): string;
    /** @internal */
    protected createImpl(): DropdownImpl;
}
