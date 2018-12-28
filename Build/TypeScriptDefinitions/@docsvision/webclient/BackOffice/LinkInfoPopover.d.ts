import { ILinkInfoPopoverProps } from "@docsvision/webclient/BackOffice/LinkInfoPopoverProps";
import { ILinkInfoPopoverState } from "@docsvision/webclient/BackOffice/LinkInfoPopoverState";
import React from "react";
/** @internal */
export declare class LinkInfoPopover extends React.Component<ILinkInfoPopoverProps, ILinkInfoPopoverState> {
    protected commentEditInput: HTMLTextAreaElement;
    constructor(props: ILinkInfoPopoverProps);
    onTextClick(event: React.MouseEvent<any>): void;
    beginEdit(): void;
    saveComment(): void;
    onSaveClick(): void;
    onCommentChange(event: React.SyntheticEvent<any>): void;
    render(): JSX.Element;
}
