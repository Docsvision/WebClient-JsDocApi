import { DisplayPerformersParams, DisplayPerformersState } from "@docsvision/webclient/BackOffice/DisplayPerformers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalHost } from "@docsvision/webclient/Helpers/ModalHost";
import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
export interface DisplayPerformersImplState extends BaseControlImplState, DisplayPerformersState {
    startPerformersWidth: number;
    endPerformersWidth: number;
    historyModalHost: ModalHost;
}
export declare class DisplayPerformersImpl extends BaseControlImpl<DisplayPerformersParams, DisplayPerformersImplState> {
    /** Контейнер контрола. */
    protected containerEl: HTMLElement;
    /** Элемент, отвечающий за настоящий размер списка начальных исполнителей. */
    protected startPerformersSizeEl: HTMLElement;
    /** Элемент, отвечающий за настоящий размер списка конечных исполнителей. */
    protected endPerformersSizeEl: HTMLElement;
    /** Элемент, отображающий разделитель между начальными и конечными исполнителями. */
    protected performersDelimiterEl: HTMLElement;
    constructor(props: DisplayPerformersParams);
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentWillUnmount(): void;
    /**
     * Форматирует список исполнителей.
     * @param performers Список исполнителей
     */
    protected formatPerformers: (performers: GenModels.DisplayPerformersPerformer[]) => JSX.Element[];
    /**
     * Форматирует всплывающую подсказку для всего списка исполнителей.
     * @param performers Список исполнителей
     */
    protected createPerformersTip: (performers: GenModels.DisplayPerformersPerformer[]) => string;
    /** При открытии модального окна с историей исполнения. */
    protected openHistoryWindow: () => void;
    /** Существуют ли конечные исполнители. */
    protected endPerformersExists: () => boolean;
    /** Загружает информацию о делегировании. */
    protected getDelegationRecords: () => JQueryDeferred<GenModels.DelegateRecords>;
    /** Отрисовывает всех исполнителей. */
    protected renderPerformers: () => JSX.Element;
    /**
     * Отрисовывает список исполнителей
     * @param performers Список исполнителей
     * @param width Ширина списка исполнителей
     */
    protected renderPerformersList: (performers: GenModels.DisplayPerformersPerformer[], width: number) => JSX.Element;
    /** Отрисовывает блоки для расчёта размеров всех исполнителей. */
    protected renderPerformersSizes: () => JSX.Element;
    /** Отрисовывает содержимого модального окна с историей исполнения. */
    protected renderHistoryWindow(): React.ReactNode;
    /** При закрытии модального окна */
    protected closeHistoryWindow: () => void;
    /** Перерисовывает списки исполнителей с учётом размера родительского контейнера. */
    resize: () => void;
    /** @inheritDoc */
    getTabIndex(): 0 | -1;
    /** @internal */
    renderControl(): JSX.Element;
}
