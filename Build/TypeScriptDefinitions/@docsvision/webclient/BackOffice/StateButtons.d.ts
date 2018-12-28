import { StateButtonsImpl, StateButtonsState } from "@docsvision/webclient/BackOffice/StateButtonsImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства элемента управления [Автомат состояния]{@link StateButtons}.
 */
export declare class StateButtonsParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Список операций. */
    operations: GenModels.OperationDataModel[];
    /** Включена ли вертикальная ориентация. */
    verticalOrientation?: boolean;
    /** Ограничение количества отображаемых кнопок (остальные кнопки будут доступны по кнопке "..."). */
    buttonsLimit?: number;
    services?: $EditOperationStore & $Layout;
}
/**
 * Класс элемента управления Автомат состояния
 *
 * Добавляет в web-разметку элемент управления для изменения состояния карточки.
 */
export declare class StateButtons extends BaseControl<StateButtonsParams, StateButtonsState> {
    /** @internal */
    protected createParams(): StateButtonsParams;
    /** @internal */
    protected createImpl(): StateButtonsImpl;
    private readonly stateButtonsImpl;
    private bindingStateButtons;
    /**
     * Показать меню со всеми кнопками.
     */
    showMenu(): void;
    /**
     * Скрыть меню со всеми кнопками.
     */
    hideMenu(): void;
    /**
     * Выполнить нажатие по кнопке с указанной операцией
     * @param operationId Идентификатор операции
     */
    performClick(operationId: string): void;
    /**
     * Добавить операцию.
     * @param operationData Данные об операции.
     */
    add(operationData: GenModels.OperationDataModel): void;
    /**
     * Удалить операцию.
     * @param operationId Идентификатор операции.
     */
    remove(operationId: string): void;
    /** @internal */
    protected processEditOperations(operationsData?: GenModels.OperationDataModel[]): GenModels.OperationDataModel[];
}
