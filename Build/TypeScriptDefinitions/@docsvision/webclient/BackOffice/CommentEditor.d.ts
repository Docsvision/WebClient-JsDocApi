import { ICommentInputTextAreaProps } from "@docsvision/webclient/BackOffice/CommentInputTextArea";
import { $DeviceType } from '@docsvision/webclient/StandardServices';
import React from "react";
import { StyledComponent } from 'styled-components';
export interface CommentEditorProps {
    className?: string;
    text: string;
    placeHolder: string;
    onTextChange: (newValue: any) => void;
    onAccept: () => void;
    onCancel: () => void;
    inputComponent: React.ComponentType<ICommentInputTextAreaProps>;
    wrapper?: StyledComponent<"div", any, {}, never>;
    cancelOnBlur?: boolean;
    services: $DeviceType;
}
export declare const CommentEditorWrapper: StyledComponent<"div", any, {}, never>;
export declare class CommentEditor extends React.Component<CommentEditorProps> {
    input: HTMLTextAreaElement;
    componentDidUpdate(prevProps: any): void;
    private onKeyDown;
    private attachInput;
    private onBlur;
    private updateInputSize;
    protected readonly wrapper: StyledComponent<"div", any, {}, never>;
    render(): JSX.Element;
}
