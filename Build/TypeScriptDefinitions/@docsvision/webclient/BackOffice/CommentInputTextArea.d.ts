import * as React from 'react';
export interface ICommentInputTextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string;
    text: string;
    placeHolder: string;
    onTextChange: (newValue: any) => void;
    innerRef: any;
}
export declare const CommentInputTextAreaStyle: import("styled-components").StyledComponent<"textarea", any, {
    className: string;
}, "className">;
export declare const CommentInputTextArea: (props: ICommentInputTextAreaProps) => JSX.Element;
