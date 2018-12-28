import { EmployeeImpl, EmployeeState } from "@docsvision/webclient/BackOffice/EmployeeImpl";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/**
 * Содержит публичные свойства элемента управления [Сотрудник]{@link Employee}.
 */
export declare class EmployeeParams extends InputBasedControlParams<GenModels.EmployeeDataModel> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
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
    favoriteEmployees?: GenModels.EmployeeDataModel[];
    services?: $LayoutStaffController & $EditOperationStore & $LayoutInfo & $LocalStorage;
}
/**
 * Класс элемента управления Сотрудник.
 *
 * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора сотрудника из *Справочника сотрудников*.
 */
export declare class Employee extends InputBasedControl<GenModels.EmployeeDataModel, EmployeeParams, EmployeeState> {
    protected createParams(): EmployeeParams;
    protected createImpl(): EmployeeImpl;
    protected getServices(): $LayoutStaffController & $EditOperationStore & $LayoutInfo & $LocalStorage;
    private readonly employeeImpl;
    private employeeBinding;
    private defaultEmployeeBinding;
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
    /** Установка новых сервисов. */
    servicesChanged: any;
    /**
     * Добавляет указанного сотрудника в список последних выбранных.
     * @param item Добавляемый сотрудник.
     */
    addToFavorite(item: GenModels.EmployeeDataModel): void;
    protected getBindings(): IBindingResult<any>[];
}
