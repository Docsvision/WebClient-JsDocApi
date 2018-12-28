import { $LayoutTasksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $CardId, $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { Optional } from "@docsvision/webclient/System/ServiceContainer";
export declare class DisplayPerformersParams extends BaseControlParams {
    /** Стандартный класс контрола. */
    standardCssClass?: string;
    /** Текст метки. */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /** Текст всплывающей подсказки. */
    tip: string;
    /** Имеется ли история исполнения */
    hasHistory?: boolean;
    /** Идентификатор карточки. Необходим только в случае, когда контрол находится вне разметки. */
    cardId?: string;
    /** Формат отображения контрола. */
    viewMode?: GenModels.DisplayPerformersViewMode;
    /** Формат отображения метки при наведении на исполнителя. */
    tipMode?: GenModels.DisplayPerformersTipMode;
    /** Формат отображения метки при наведении на многоточие. */
    extendedTipMode?: GenModels.DisplayPerformersTipMode;
    /** Формат отображения метки при наведении на многоточие. */
    startPerformersMode?: GenModels.DisplayPerformersStartPerformersMode;
    endPerformersMode?: GenModels.DisplayPerformersEndPerformersMode;
    /** Начальные исполнители. */
    startPerformers?: GenModels.DisplayPerformersPerformer[];
    /** Конечные исполнители. */
    endPerformers?: GenModels.DisplayPerformersPerformer[];
    /** Событие, возникающее перед открытием окна с историей. */
    historyOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия окна с историей. */
    historyOpened?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед закрытием окна с историей. */
    historyClosing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после закрытия окна с историей. */
    historyClosed?: BasicApiEvent<IEventArgs>;
    services?: $LayoutTasksController & Optional<$CardId> & $EditOperationStore & $LayoutInfo;
}
export interface DisplayPerformersState extends DisplayPerformersParams, BaseControlState {
}
export declare class DisplayPerformers extends BaseControl<DisplayPerformersParams, DisplayPerformersState> {
    protected createParams(): DisplayPerformersParams;
    private readonly DisplayPerformersImpl;
    private binding;
    /** Перерисовывает списки исполнителей с учётом размера родительского контейнера. */
    resize(): void;
    /** @internal */
    render(): JSX.Element;
}
