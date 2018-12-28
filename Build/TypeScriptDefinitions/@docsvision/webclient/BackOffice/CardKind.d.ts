import { CardKindImpl, CardKindState } from "@docsvision/webclient/BackOffice/CardKindImpl";
import { $LayoutCardKindController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { EditMode } from "@docsvision/webclient/System/EditMode";
/**
 * Содержит публичные свойства элемента управления [Вид карточки]{@link CardKind}.
 */
export declare class CardKindParams extends InputBasedControlParams<GenModels.CardKindModel> {
    /** Возвращает режим редактирования. */
    editMode?: EditMode;
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Список типов видов карточек, доступных для выбора (по умолчанию все типы доступны). */
    availableTypes?: string[];
    /** Список видов карточек, доступных для выбора (по умолчанию все виды доступны). */
    availableKinds?: string[];
    /** Сервисы. */
    services?: $LayoutCardKindController & $LayoutInfo & $EditOperationStore;
}
/**
 * Класс элемента управления Вид карточки.
 *
 * Добавляет в web-разметку текстовый блок с меткой, в котором отображается название текущего вида карточки.
 */
export declare class CardKind extends InputBasedControl<GenModels.CardKindModel, CardKindParams, CardKindState> {
    protected createParams(): CardKindParams;
    protected getServices(): $LayoutCardKindController & $LayoutInfo & $EditOperationStore;
    protected createImpl(): CardKindImpl;
    protected getBindings(): IBindingResult<any>[];
    private cardKindData;
}
