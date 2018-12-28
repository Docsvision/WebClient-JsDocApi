import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
export interface PerformingHistoryViewProps {
    tipMode: GenModels.DisplayPerformersTipMode;
    getRecords: () => JQueryDeferred<GenModels.DelegateRecords>;
}
export interface PerformingHistoryViewState {
    loader: RequestHelper;
    recordsModel: GenModels.DelegateRecords;
}
export declare class PerformingHistoryView extends React.Component<PerformingHistoryViewProps, PerformingHistoryViewState> {
    protected eventColumnWidth: string;
    protected initiatorColumnWidth: string;
    protected arrowColumnWidth: string;
    protected performersColumnWidth: string;
    protected dateColumnWidth: string;
    protected commentColumnWidth: string;
    constructor(props: PerformingHistoryViewProps);
    /** @internal */
    componentDidMount(): void;
    /**
     * Загружает записи с информацией о делегировании.
     */
    private loadRecords;
    /**
     * Форматирует событие делегирвоания.
     * @param event Событие делегирования
     */
    private formatEvent;
    private createTip;
    /** Отображение назначенных исполнителей (поле "До"). */
    renderStartPerformers(): JSX.Element;
    /** Отображение истории делегирования. */
    renderTableBody(): JSX.Element;
    render(): JSX.Element;
}
