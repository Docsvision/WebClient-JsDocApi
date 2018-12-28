import { ITaskListItemProps } from "@docsvision/webclient/BackOffice/ITaskListItemProps";
import { ITaskListItemState } from "@docsvision/webclient/BackOffice/ITaskListItemState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export declare class TaskListItemComponent extends React.Component<ITaskListItemProps, ITaskListItemState> {
    state: ITaskListItemState;
    constructor(props: any);
    protected getClassName(): string;
    protected groupTaskIconClassName(): string;
    protected getTaskStateIconClassName(): string;
    protected getUrl(): string;
    protected getEndDate(): string;
    protected getEndDateClassName(): string;
    protected inState(taskState: GenModels.TaskStateType[], taskGroupState: GenModels.TaskGroupStateType[]): boolean;
    protected getTabIndex(): 0 | -1;
    private onOpen;
    private handleLinkRef;
    render(): JSX.Element;
    protected renderFullView(): JSX.Element;
}
