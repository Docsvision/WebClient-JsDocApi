import { ICommandMenuProps } from "@docsvision/webclient/BackOffice/ICommandMenuProps";
import { ICommandMenuState } from "@docsvision/webclient/BackOffice/ICommandMenuState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import React from "react";
/** @internal */
export declare class CommandMenuComponent extends React.Component<ICommandMenuProps, ICommandMenuState> {
    constructor(props: any);
    componentWillUnmount(): void;
    protected handleComponentClick(event?: Event): void;
    protected handleCommandMenuClick(event?: React.MouseEvent<any>): void;
    protected toggleMenu(): void;
    protected onMenuItemClick(item: GenModels.CreateKindDataModel, ev: React.MouseEvent<any>): void;
    protected getCommandMenuItems(filter: (ICommandMenuItem: any) => boolean): JSX.Element[];
    protected getKindItems(): JSX.Element[];
    protected getTemplates(): JSX.Element[];
    protected attachCommandBarButton(elem: HTMLElement): void;
    render(): JSX.Element;
}
