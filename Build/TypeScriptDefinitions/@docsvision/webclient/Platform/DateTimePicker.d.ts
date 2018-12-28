import { $BusinessCalendarController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { DateTimePickerImpl, DateTimePickerState } from "@docsvision/webclient/Platform/DateTimePickerImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { $Router } from "@docsvision/webclient/System/$Router";
/**
 * Содержит публичные свойства элемента управления [Дата/время]{@link DateTimePicker}.
 */
export declare class DateTimePickerParams extends InputBasedControlParams<Date> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Режим представления данных в элементе управления. */
    dateTimePickerMode?: GenModels.DateTimePickerType;
    /** @deprecated Синоним defaultCurrentDate. Начиная с WebClient 11 выбором времени управляет параметр {link defaultTime}. */
    defaultCurrentDateTime?: boolean;
    /**
     * Флаг, указывающий, что для значения по умолчанию должны использоваться текущая дата: true - использовать текущие дату,
     * false - использовать предустановленное {@link defaultDateTime} в значение.
     */
    defaultCurrentDate?: boolean;
    /** Возвращает строку с датой и временем, которые по умолчанию устанавливаются в значение. */
    defaultDateTime?: string;
    /**
     * Возвращает смещение времени (в часах) для значения времени по умолчанию.
     *
     * Значение *defaultDateTimeShift* прибавляется к часам в значении {@link defaultDateTime}.
     * В элементе управления отображается итоговое значение.
     */
    defaultDateTimeShift?: number;
    /** Возвращает максимальная дату, которая может быть выбрана. */
    minDate?: Date;
    /** Возвращает минимальную дату, которая может быть выбрана. */
    maxDate?: Date;
    /** Время, которое будет установлено по умолчанию при выборе даты. */
    defaultTime?: GenModels.DateTimeDefaultTimeModes;
    /** Настройка рабочего времени по умолчанию. */
    defaultWorkTimeSettings?: GenModels.CalendarWorkTime;
    /**
     * Выделять значение особым образом, если оно меньше чем текущая дата.
     * Для задания собственного выделения используйте класс 'overdue', добавляемый к контролу. Например:
     *
     *      .system-datetimepicker.highlight-overdue.overdue:not(.edit-mode) .labeled-text-helper .text-cell .labeled-text {
     *          font-weight: bold;
     *          color: red;
     *      }
     *
     */
    highlightOverdue?: boolean;
    services?: $LayoutInfo & $BusinessCalendarController & $EditOperationStore & $Router;
}
/**
 * Класс элемента управления Дата/время.
 *
 * Добавляет в web-разметку элемент управления для изменения значения даты и времени.
 */
export declare class DateTimePicker extends InputBasedControl<Date, DateTimePickerParams, DateTimePickerState> {
    protected createParams(): DateTimePickerParams;
    protected getServices(): $LayoutInfo & $BusinessCalendarController & $EditOperationStore & $Router;
    private readonly dateTimePickerImpl;
    private dateTimePickerBinding;
    private defaultDateTimeBinding;
    protected defaultValue: Date;
    private defaultWorkTimeBinding;
    private dateTimePickerMode;
    private readonly defaultCurrentDateTime;
    /**
     * Проверяет возможность очистки значения элемента управления.
     * @return true - значение может быть очищено (если оно установлено и его можно изменять), false - если значение не может быть очищено.
     */
    canClear(): boolean;
    /**
     * Очищает значение (выбранную дату).
     */
    clear(): void;
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): DateTimePickerImpl;
}
