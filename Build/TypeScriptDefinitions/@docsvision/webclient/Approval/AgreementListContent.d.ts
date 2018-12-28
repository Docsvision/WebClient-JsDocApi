import { IAgreementListContentProps } from "@docsvision/webclient/Approval/IAgreementListContentProps";
import { IAgreementListContentState } from "@docsvision/webclient/Approval/IAgreementListContentState";
import { IAgreementListTableColumn } from "@docsvision/webclient/Approval/IAgreementListTableColumn";
import { IAgreementListRenderEventArgs } from "@docsvision/webclient/Approval/IAgreementListRenderEventArgs";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import React from "react";
/** @internal */
export declare class AgreementListContent extends React.Component<IAgreementListContentProps, IAgreementListContentState> {
    rootElem: HTMLElement;
    constructor(props: IAgreementListContentProps);
    readonly onRender: IBasicEvent<IAgreementListRenderEventArgs>;
    readonly root: HTMLElement;
    columns: IAgreementListTableColumn[];
    commentColumn: IAgreementListTableColumn;
    protected preRenderPrepareColumns(columns: IAgreementListTableColumn[]): IAgreementListTableColumn[];
    protected calculateWidths(columns: IAgreementListTableColumn[]): void;
    protected renderTable(columnsParam: IAgreementListTableColumn[]): JSX.Element;
    protected renderHeader(columns: IAgreementListTableColumn[]): JSX.Element;
    protected renderRow(item: GenModels.AgreementListItemModel, columns: IAgreementListTableColumn[]): JSX.Element;
    protected getCaption(): string;
    render(): JSX.Element;
}
