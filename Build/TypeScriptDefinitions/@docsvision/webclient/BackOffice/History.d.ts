import { IRecordsChangedEventArgs } from "@docsvision/webclient/BackOffice/RecordsChangedEventArgs";
import { HistoryImpl, HistoryState } from "@docsvision/webclient/BackOffice/HistoryImpl";
import { HistoryView } from '@docsvision/webclient/BackOffice/HistoryView';
import { $LayoutHistoryController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { Optional } from "@docsvision/webclient/System/ServiceContainer";
/**
 * Содержит публичные свойства элемента управления [История]{@link History}.
 */
export declare class HistoryParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст, отображаемый в кнопке. */
    buttonText?: string;
    /** Текст всплывающей подсказки. */
    tip?: string;
    /**
     * Флаг, определяющий, что пользователь может просматривать историю:
     * true - разрешено (разрешена настроенная операция редактирования),
     * false - не разрешено.
     */
    canViewHistory?: boolean;
    /** Показывать таблицу с записями на странице или нет. По умолчанию - нет. */
    showPreview?: boolean;
    /** Количество записей, загружаемых с сервера за раз. */
    recordsOnPage?: number;
    /** Отображаемые в данный момент записи истории. */
    records?: GenModels.HistoryRecord[];
    /** Сотрудник, по которому производится фильтрация записей в текущий момент. */
    authorFilterValue?: GenModels.EmployeeDataModel;
    /** Дата, по которой производится фильтрация записей в текущий момент. */
    dateFilterValue?: string;
    /** Текст события, по которому производится фильтрация записей в текущий момент. */
    eventFilterValue?: string;
    /** Показывать кнопку "показать еще" на странице или нет. По умолчанию: false */
    showMoreButtonInPreview?: boolean;
    /** Показывать кнопку открытия модального окна. По умолчанию - true  */
    showOpenButton?: boolean;
    /** Показывать фильтры на странице или нет. По умолчанию - false */
    showFiltersInPreview?: boolean;
    /** Идентификатор карточки. Необходим только в случае, когда контрол находится вне разметки. */
    cardId?: string;
    /** Массив идентификаторов операций, которые не отображаются в элементе управления */
    operationsToHide: string[];
    /**
     * Событие, возникающее после изменения списка отображаемых записей истории (см. {@link records})
     * (например, при применении фильтра или подгрузке новых страниц).
     */
    recordsChanged?: BasicApiEvent<IRecordsChangedEventArgs>;
    /** Событие, возникающее перед открытием окна с историей. */
    windowOpeninig?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия окна с историей. */
    windowOpened?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед закрытием окна с историей. */
    windowClosing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после закрытия окна с историей. */
    windowClosed?: BasicApiEvent<IEventArgs>;
    services?: $LayoutHistoryController & Optional<$CardId> & $EditOperationStore;
}
/**
 * Класс элемента управления История.
 *
 * Добавляет в web-разметку кнопку для отображения истории операций над карточкой.
 */
export declare class History extends BaseControl<HistoryParams, HistoryState> {
    constructor(props: HistoryParams);
    /** @internal */
    protected createParams(): HistoryParams;
    private readonly myControlImpl;
    private operationsToHideBinding;
    private binding;
    /** @internal */
    records: GenModels.HistoryRecord[];
    /** @internal */
    recordsOnPage: number;
    /** @internal */
    authorFilterValue: GenModels.EmployeeDataModel;
    /** @internal */
    dateFilterValue: Date;
    /** @internal */
    eventFilterValue: string;
    /** @internal */
    protected readonly currentView: HistoryView;
    /**
     * Открывает окно просмотра истории.
     */
    openHistoryWindow(): void;
    /**
     * Закрывает окно просмотра истории.
     */
    closeHistoryWindow(): void;
    /**
     * Загружает с сервера очередную порцию данных и отображает в интерфейсе.
     * @param pageSize Размер страницы (по умолчанию берется значение соответствующего параметра).
     * @returns JQueryDeferred объект для отслеживания процесса загрузки.
     */
    loadNextPage(pageSize?: number): JQueryDeferred<GenModels.HistorySearchResult>;
    /** @internal */
    createImpl(): HistoryImpl;
}
