import { StateImpl, StateState } from "@docsvision/webclient/BackOffice/StateImpl";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
/**
 * Содержит публичные свойства элемента управления [Состояние]{@link State}.
 */
export declare class StateParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Значение состояния. */
    value: GenModels.StateModel;
    /** Текст всплывающей подсказки. */
    tip: string;
    /** Текст метки. */
    labelText: string;
}
/**
 * Класс элемента управления Состояние
 *
 * Добавляет в web-разметку элемент управления для просмотра состояния карточки.
 */
export declare class State extends BaseControl<StateParams, StateState> {
    /** @internal */
    protected createParams(): StateParams;
    private binding;
    /** @internal */
    protected createImpl(): StateImpl;
}
