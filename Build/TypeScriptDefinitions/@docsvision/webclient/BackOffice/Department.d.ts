import { DepartmentImpl, DepartmentState } from "@docsvision/webclient/BackOffice/DepartmentImpl";
import { $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства элемента управления [Подразделение]{@link Department}.
 */
export declare class DepartmentParams extends InputBasedControlParams<GenModels.DepartmentModel> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Флаг, указывающий, что из справочника разрешено выбирать организации: true - разрешено, false - не разрешено. */
    selectOrganisations?: boolean;
    /** Флаг, указывающий, что из справочника разрешено выбирать подразделения: true - разрешено, false - не разрешено. */
    selectDepartments?: boolean;
    /** Справочник, из которого осуществляется выбор организации/подразделения. */
    source?: GenModels.DepartmentDataSource;
    /** Флаг, указывающий на состояние окна выбора организации/подразделения: true - открыто, false - закрыто. */
    isDictionaryShown?: boolean;
    /** Режим диалога */
    dialogMode?: GenModels.DepartmentDialogMode;
    /** Задержка перед поиском (в мс) */
    searchDelay?: number;
    services?: $LayoutStaffController & $EditOperationStore & $LayoutInfo;
}
/**
 * Класс элемента управления Подразделение.
 *
 * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Справочника сотрудников* или *Справочника контрагентов*.
 */
export declare class Department extends InputBasedControl<GenModels.DepartmentModel, DepartmentParams, DepartmentState> {
    protected createParams(): DepartmentParams;
    private readonly departmentImpl;
    protected getServices(): $LayoutStaffController & $EditOperationStore & $LayoutInfo;
    private DepartmentBinding;
    /** Показано ли модальное окно выбора организации/подразделения. */
    readonly isDictionaryShown: boolean;
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
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): DepartmentImpl;
}
