export interface ICommentStyleProps {
    isAddCommentBlock?: boolean;
    isAuthor?: boolean;
    commentWidth: string;
}
export declare const CommentStyle: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & ICommentStyleProps, "className">;
