import { MultipleEmployeesImpl, MultipleEmployeesState } from "@docsvision/webclient/BackOffice/MultipleEmployeesImpl";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/**
 * Содержит публичные свойства элемента управления [Сотрудники]{@link MultipleEmployees}.
 */
export declare class MultipleEmployeesParams extends InputBasedControlParams<GenModels.EmployeeDataModel[]> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Массив выбранных сотрудников. */
    value?: GenModels.EmployeeDataModel[];
    /** Формат отображения во всплывающей подсказке информации о выбранном сотруднике. */
    tipMode?: GenModels.PartnerTipModeItems;
    /**
     * Флаг, указывающий, что при быстром поиске последние выбранные сотрудники должны отображаться в начале списка:
     * true - отображать сначала последних выбранных, false - обычный порядок отображения сотрудников.
     */
    supportFavourites?: boolean;
    /**
     * Флаг, указывающий, что при быстром поиске 10 последних из профиля пользователя должны отображаться в начале списка (актуально для Заданий и ГЗ):
     * true - отображать сначала последних выбранных, false - обычный порядок отображения сотрудников.
     */
    usePerformers?: boolean;
    /** Идентификатор подразделения, из которого можно выбирать сотрудников. Если значение не указано, то можно выбирать из любого подразделения. */
    restrictUnitId?: string;
    /** Список последних выбранных в элементе управления сотрудников. */
    favoriteMultipleEmployeess?: GenModels.EmployeeDataModel[];
    /**
     * Флаг, определяющий формат отображения выбранных сотрудников в элементе управления:
     * true - выбранные сотрудники отображаются в виде вертикального списка; false - в виде горизонтального списка.
     */
    verticalOrientation?: boolean;
    /** Путь к полю карточки с идентификатором сотрудника. */
    fieldPath?: string;
    /** События возникает при добавлении сотрудника. */
    addingEmployee?: CancelableApiEvent<GenModels.EmployeeDataModel>;
    /** События возникает после добавления сотрудника. */
    addedEmployee?: BasicApiEvent<GenModels.EmployeeDataModel>;
    /** События возникает при удалении сотрудника из списка. */
    removingEmployee?: CancelableApiEvent<GenModels.EmployeeDataModel>;
    /** События возникает после удаления сотрудника из списка. */
    removedEmployee?: BasicApiEvent<GenModels.EmployeeDataModel>;
    services?: $LayoutStaffController & $EditOperationStore & $Layout & $LayoutInfo & $LocalStorage;
}
/**
 * Класс элемента управления Сотрудники.
 *
 * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора нескольких сотрудников из *Справочника сотрудников*.
 */
export declare class MultipleEmployees extends InputBasedControl<GenModels.EmployeeDataModel[], MultipleEmployeesParams, MultipleEmployeesState> {
    protected createParams(): MultipleEmployeesParams;
    private readonly multipleEmployeeImpl;
    protected getServices(): $LayoutStaffController & $EditOperationStore & $Layout & $LayoutInfo & $LocalStorage;
    private employeeBinding;
    private defaultMultipleEmployeesBinding;
    /** Добавление ограничения выбора исполнителей по указанному подразделению/организации. */
    restrictUnitId: string;
    /** Установка всплывающей подсказки. */
    tipMode: any;
    /** Установка вспомогательных исполнителей. */
    supportFavourites: any;
    /** Установка использующихся исполнителей. */
    usePerformers: any;
    /** Получение избранных исполнителей. */
    /** Установка избранных исполнителей. */
    favoriteEmployees: GenModels.EmployeeDataModel[];
    /**
     * Добавляет указанного сотрудника в список последних выбранных.
     * @param item Добавляемый сотрудник.
     */
    addToFavorite(item: GenModels.EmployeeDataModel): void;
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): MultipleEmployeesImpl;
}
