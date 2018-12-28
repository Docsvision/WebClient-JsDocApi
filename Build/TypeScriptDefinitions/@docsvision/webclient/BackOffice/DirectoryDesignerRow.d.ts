import { DirectoryDesignerRowImpl, DirectoryDesignerRowState } from "@docsvision/webclient/BackOffice/DirectoryDesignerRowImpl";
import { $LayoutDirectoryDesignerController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства элемента управления [Строка конструктора справочников]{@link DirectoryDesignerRow}.
 */
export declare class DirectoryDesignerRowParams extends InputBasedControlParams<GenModels.DirectoryDesignerRowModel> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Флаг, указывающий на состояние окна выбора строки: true - открыто, false - закрыто. */
    isDictionaryShown?: boolean;
    /**
     * Идентификатор узла Конструктора справочников, из которого выбираются записи.
     *
     * Если ограничение по узлам отсутствует, то свойство имеет значение Guid.Empty.
     */
    itemType?: string;
    /**  Область выбора (и поиска) элементов из Конструктора справочников. */
    selectionArea?: GenModels.DirectoryDesignerSearchArea;
    /** Задержка перед поиском (в мс) */
    searchDelay?: number;
    services?: $LayoutDirectoryDesignerController & $EditOperationStore & $LayoutInfo;
}
/**
 * Класс элемента управления Строка конструктора справочников.
 *
 * Добавляет в web-разметку поле ввода с кнопкой вызова диалогового окна для выбора записи из *Конструктора справочников*.
 */
export declare class DirectoryDesignerRow extends InputBasedControl<GenModels.DirectoryDesignerRowModel, DirectoryDesignerRowParams, DirectoryDesignerRowState> {
    private readonly departmentImpl;
    protected createParams(): DirectoryDesignerRowParams;
    protected getServices(): $LayoutDirectoryDesignerController & $EditOperationStore & $LayoutInfo;
    private DirectoryDesignerRowBinding;
    private DefaultBindingHandler;
    private DefaultHandler;
    readonly isDictionaryShown: boolean;
    /**
     * Проверяет возможность открытия модального окна выбора строки.
     * @return true - возможно (если значение редактируемое), false - невозможно.
     */
    canShowDictionary(): boolean;
    /**
     * Открывает окно выбора строки.
     */
    showDictionary(): void;
    /**
     * Закрывает окно выбора строки.
     */
    hideDictionary(): void;
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): DirectoryDesignerRowImpl;
}
