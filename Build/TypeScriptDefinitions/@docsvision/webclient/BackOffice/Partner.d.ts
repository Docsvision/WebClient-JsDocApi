import { IPartnerDataLoadingEventArgs } from "@docsvision/webclient/BackOffice/IPartnerDataLoadingEventArgs";
import { IPartnerFilterChangeEventArgs } from "@docsvision/webclient/BackOffice/IPartnerFilterChangeEventArgs";
import { PartnerImpl, PartnerState } from "@docsvision/webclient/BackOffice/PartnerImpl";
import { PartnerSelectDialog } from "@docsvision/webclient/BackOffice/PartnerSelectDialog";
import { $LayoutPartnerController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Сотрудник контрагента]{@link Partner}.
 */
export declare class PartnerParams extends InputBasedControlParams<GenModels.EmployeeDataModel> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Формат отображения информации о выбранном сотруднике в контроле. */
    partnerViewMode?: GenModels.EmployeeViewMode;
    /** Формат отображения информации о выбранном сотруднике во всплывающей подсказке. */
    partnerTipMode?: GenModels.PartnerTipModeItems;
    /**
     * Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
     * Внимание: при изменении значения параметра, значение {@link selectedFilterPath} сбрасывается.
     */
    predefinedFilter?: GenModels.DepartmentModel;
    /** Значение фильтра, которое было выбрано пользователем. */
    selectedFilterPath?: GenModels.DepartmentModel[];
    /** Текущий фильтр. Объединяет значения {@link predefinedFilter} и {@link selectedFilter}  */
    currentFilterPath?: GenModels.DepartmentModel[];
    /** Задержка в милисекундах после изменения поискового запроса и перед отправкой запроса на сервер. */
    searchDelay?: number;
    /** Флаг, указывающий на состояние окна выбора организации/подразделения: true - открыто, false - закрыто. */
    isDirectoryWindowShown?: boolean;
    /** Ссылка на компонент модального окна для выбора контрагентов. */
    directoryWindow?: PartnerSelectDialog;
    /** Событие, возникающее перед открытием модального окна для выбора контрагентов. */
    directoryWindowOpening?: CancelableApiEvent<void>;
    /** Событие, возникающее после открытия модального окна для выбора контрагентов. */
    directoryWindowOpened?: BasicApiEvent<void>;
    /** Событие, возникающее перед закрытием модального окна для выбора контрагентов. */
    directoryWindowClosing?: CancelableApiEvent<void>;
    /** Событие, возникающее после закрытия модального окна для выбора контрагентов. */
    directoryWindowClosed?: BasicApiEvent<void>;
    /**
     * Событие, возникающее перед выполнением поиска записей на сервере. В обработчике события можно изменить параметры запроса.
     * Если в обработчике задать значение result, то запрос на сервер выполнен не будет.
     */
    searchResultsLoading?: CancelableApiEvent<IPartnerDataLoadingEventArgs>;
    /** Событие, возникающее после выполнения поиска записей на сервере. В обработчике события можно изменить возвращенные данные. */
    searchResultsLoaded?: BasicApiEvent<IPartnerDataLoadingEventArgs>;
    /** Событие, возникающее перед изменением фильтра контрагентов. */
    currentFilterChanging?: CancelableApiEvent<IPartnerFilterChangeEventArgs>;
    /** Событие, возникающее после изменения фильтра контрагентов. */
    currentFilterChanged?: BasicApiEvent<IPartnerFilterChangeEventArgs>;
    services?: $LayoutPartnerController & $EditOperationStore & $LayoutInfo;
}
/**
 * Класс элемента управления Сотрудник контрагента.
 *
 * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Справочника сотрудников* или *Справочника контрагентов*.
 */
export declare class Partner extends InputBasedControl<GenModels.EmployeeDataModel, PartnerParams, PartnerState> {
    private isSelectedFilterPathInitialized;
    private isBindingInitialized;
    private isParentOrganizationBindingInitialized;
    /** @internal */
    protected createParams(): PartnerParams;
    /** @internal */
    protected getServices(): $LayoutPartnerController & $EditOperationStore & $LayoutInfo;
    /** @internal */
    protected readonly partnerImpl: PartnerImpl;
    private binding;
    private parentOrganizationBinding;
    private readonly currentFilterPath;
    private selectedFilterPath;
    private predefinedFilter;
    /** @internal */
    readonly isDictionaryShown: boolean;
    /** @internal */
    protected partnerTipMode: GenModels.PartnerTipModeItems;
    /** @internal */
    protected partnerViewMode: GenModels.EmployeeViewMode;
    /** @internal */
    protected getParamsToKeep(params: any): {
        selectedFilterPath: any;
        value: GenModels.EmployeeDataModel;
    };
    /**
     * Фильтрует путь selectedPath с учётом predefinedFilter
     *
     * Если selectedPath не существует, то возвращается пустой массив.
     * Если predefinedFilter не существует, то возвращается исходный selectedPath или пустой массив, если selectedPath не существует.
     * Если predefinedFilter входит в состав selectedPath, то selectedPath обрезается так,
     * что остаются только элементы, первый из которых равен predefinedFilter, а остальные идут глубже по дереву.
     * Если predefinedFilter не входит в состав selectedPath, то возвращается исходный selectedPath.
     *
     * @param selectedPath Выбранное значение фильтра.
     * @param predefinedFilter Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
     */
    static filterSelectedPath(selectedPath: GenModels.DepartmentModel[], predefinedFilter: GenModels.DepartmentModel): GenModels.DepartmentModel[];
    /**
     * Входит ли значение predefinedFilter в состав selectedPath.
     * @param selectedPath Выбранное значение фильтра.
     * @param predefinedFilter Значение фильтра, которое которое недоступно для очистки в пользовательском интерфейсе.
     */
    static isFilterInSelectedPath(selectedPath: GenModels.DepartmentModel[], predefinedFilter: GenModels.DepartmentModel): boolean;
    /**
     * Проверяет возможность открытия модального окна выбора организации/подразделения.
     * @return true - возможно (если значение редактируемое), false - невозможно.
     */
    canShowDictionary(): boolean;
    /**
     * Открывает окно выбора организации/подразделения.
     */
    showDictionary(): void;
    /**
     * Закрывает окно выбора организации/подразделения.
     */
    hideDictionary(): void;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): PartnerImpl;
}
