import { TimeOfPerfomanceImpl, TimeOfPerfomanceState } from "@docsvision/webclient/BackOffice/TimeOfPerfomanceImpl";
import { $BusinessCalendarController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Срок исполнения]{@link TimeOfPerfomance}.
 */
export declare class TimeOfPerfomanceParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Имя элемента управления {@link DateTimePicker}, содержащего дату начала периода */
    startDateControlName: string;
    /** Имя элемента управления {@link DateTimePicker}, содержащего дату завершения периода */
    endDateControlName: string;
    /** Имя элемента управления {@link NumberControl}, содержащего длительность периода */
    durationControlName: string;
    /** Настройка, определяющая как дочерние элементы должны быть расположены в пространстве - в строку или в столбец. */
    orientation?: GenModels.Orientation;
    /**
     * Флаг, определяющий, что использовать для рассчета длительности и даты завершения - бизнес-календарь или обычный календарь.
     * Для заданий и групп заданий значение по умолчанию получается из настроек справочника видов.
     */
    useBusinessCalendar?: boolean;
    /**
     * Параметр, определяющий, какой бизнес-календарь будет использован.
     * 1. Если значение не задано, то будет использован системный календарь
     *    (или настройки по умолчанию рабочий день с 9 до 18, пн-пт, если он не доступен).
     * 2. Если задан сотрудник или подразделение, то календарь настроенный для сотрудника или подразделения в справочнике сотрудников.
     *    Если в справочнике сотрдуников календарь не настрен, то см. пункт 1.
     * 3. Если задано несколько сотрудников одного подразделения, то календарь настроенный для этого подразделения. Иначе см. пункт 1.
     */
    businessClandarSources?: GenModels.BusinessCalendarSource[];
    /** Событие, возникающее перед получением длительности периода. */
    gettingDuration?: CancelableApiEvent<GenModels.CalendarDurationRequestModel>;
    /** Событие, возникающее после получения длительности периода. */
    gotDuration?: BasicApiEvent<number>;
    /** Событие, возникающее перед получением конца периода. */
    gettingEndDate: CancelableApiEvent<GenModels.CalendarEndDateRequestModel>;
    /** Событие, возникающее после получения конца периода. */
    gotEndDate: BasicApiEvent<Date>;
    services?: $BusinessCalendarController & $ControlStore;
}
/**
 * Класс элемента управления Срок исполнения.
 *
 * Добавляет в web-разметку блок с тремя контролами: дата начала, конец и длительность периода. При изменении значения каждого из контролов
 * автоматически обновляется значение других с учетом бизнес календаря (см. {@link useBusinessCalendar} и {@link businessClandarSources}). В частности:
 * 1. При изменении даты начала вычисляется дата заврешения
 * 2. При изменении даты завершения вычисляется длительность
 * 3. При изменении длительности вычисляется дата завершения
 */
export declare class TimeOfPerfomance extends Panel<TimeOfPerfomanceParams, TimeOfPerfomanceState> {
    /** @internal */
    protected createParams(): TimeOfPerfomanceParams;
    /** @internal */
    init(): void;
    /** @internal */
    protected useBusinessCalendarBinding: IBindingResult<boolean>;
    /**
     * Возвращает длительность периода на основе даты начала и конца.
     */
    getDuration(startDate: Date, endDate: Date): JQueryDeferred<number>;
    /**
     * Возвращает конец периода на основе даты начала и длительности.
     */
    getEndDate(startDate: Date, duration: number): JQueryDeferred<Date>;
    /** Запускает перессчет длительности. */
    updateDuration(): JQueryDeferred<void>;
    /** Запускает перессчет даты завершения. */
    updateEndDate(): JQueryDeferred<void>;
    /** @internal */
    createImpl(): TimeOfPerfomanceImpl;
}
