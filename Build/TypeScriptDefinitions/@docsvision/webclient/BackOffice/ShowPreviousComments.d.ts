export interface IShowPreviousCommentsProps {
    className?: string;
    allCommentsCount: number;
    currentLoadedCommentsCount: number;
    onClick: () => void;
}
export declare const ShowPreviousCommentsStyle: import("styled-components").StyledComponent<"div", any, {
    className: string;
}, "className">;
export declare const ShowPreviousCommentsTextStyle: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const ShowPreviousComments: (props: IShowPreviousCommentsProps) => JSX.Element;
