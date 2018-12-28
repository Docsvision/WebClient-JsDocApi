import { ITaskListProps } from "@docsvision/webclient/BackOffice/ITaskListProps";
import { ITaskListState } from "@docsvision/webclient/BackOffice/ITaskListState";
import React from "react";
/** @internal */
export declare class TaskListComponent extends React.Component<ITaskListProps, ITaskListState> {
    protected refItems: HTMLElement;
    constructor(props: any);
    componentWillReceiveProps(newProps: any): void;
    protected getTaskListItems(): JSX.Element[];
    private onTaskOpen;
    protected getClassName(): string;
    protected getLoaderWidth(i: number): number;
    protected renderEmptyItemList(): any[] | JSX.Element;
    protected renderItemList(): JSX.Element;
    render(): any[] | JSX.Element;
}
