import { Params } from "@docsvision/webclient/BackOffice/ChildTasksPerforming";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalHost } from "@docsvision/webclient/Helpers/ModalHost";
import { ITableHeaderCellHelperProps } from "@docsvision/webclient/Helpers/Table/TableHelperHeaderRow";
import { ITableRowCellHelperProps } from "@docsvision/webclient/Helpers/Table/TableHelperRow";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import React from "react";
import { StyledComponent } from 'styled-components';
/** @internal */
export interface State extends Params, BaseControlState {
    hasChildTasks: boolean;
    dialogHost: ModalHost;
    data: GenModels.GetChildTasksCommentsResponseModel;
}
/** @internal */
export declare class ChildTasksPerformingImpl extends BaseControlImpl<Params, State> {
    constructor(props: Params, state: State);
    componentDidUpdate(): void;
    /** Открывает диалог (идентичен нажатию на кнпоку). */
    loadAndOpenDialog(): Promise<void>;
    protected loadData(): JQueryDeferred<GenModels.GetChildTasksCommentsResponseModel>;
    open(data: GenModels.ChildTaskCommentModel[]): Promise<void>;
    close(): Promise<void>;
    getComment(comments: GenModels.ChildTaskCommentModel[]): string;
    copyComments(comments?: GenModels.ChildTaskCommentModel[], file?: GenModels.CommonFileModel): JQueryDeferred<void>;
    onSelectCommentKey(ev: React.KeyboardEvent, comment: GenModels.ChildTaskCommentModel): void;
    onSelectComment(comment: GenModels.ChildTaskCommentModel): Promise<void>;
    onSelectCommentFileKey(ev: React.KeyboardEvent, comment: GenModels.ChildTaskCommentModel): void;
    onSelectCommentFile(comment: GenModels.ChildTaskCommentModel, ev: React.MouseEvent<any> | React.KeyboardEvent<any>): Promise<void>;
    onCancel(): void;
    onAccept(): Promise<void>;
    allSelected(): boolean;
    protected onSelectAllCachedChange(ev: React.MouseEvent<HTMLInputElement>): void;
    selectAll(): JQueryDeferred<void>;
    unselectAll(): JQueryDeferred<void>;
    protected HeaderCell: StyledComponent<(props: ITableHeaderCellHelperProps) => JSX.Element, any, {}, never>;
    protected TaskStatus: StyledComponent<"a", any, {}, never>;
    protected SelectableCell: StyledComponent<React.ForwardRefExoticComponent<ITableRowCellHelperProps & React.RefAttributes<HTMLDivElement>>, any, {
        selected: boolean;
    }, never>;
    protected FileCell: StyledComponent<React.ForwardRefExoticComponent<ITableRowCellHelperProps & React.RefAttributes<HTMLDivElement>>, any, {
        selected: boolean;
    }, never>;
    protected SelectAllCheckboxLabel: StyledComponent<"label", any, {}, never>;
    protected SelectAllCheckbox: StyledComponent<"input", any, {}, never>;
    protected HeaderCellText: StyledComponent<"span", any, {}, never>;
    protected Warning: StyledComponent<"div", any, {}, never>;
    protected renderDialog(tasks: GenModels.ChildTaskCommentModel[]): JSX.Element;
    private getRenderTasks;
    private onFilePreviewing;
    private onFilePreviewed;
    private onFileOpening;
    private onFileDownloading;
    protected renderCommentFile(file: GenModels.CommonFileModel): JSX.Element;
    protected renderTaskLink(task: GenModels.ChildTaskCommentModel): JSX.Element;
    /** @internal */
    renderControl(): JSX.Element;
}
