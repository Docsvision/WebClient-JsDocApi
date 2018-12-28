/** @review Свойства для {@link LinkItemViewWithSeparator}  */
interface IPredefinedLinkItemViewProps {
    /** Является ли элемент первым в списке */
    first?: boolean;
}
export declare const PredefinedLinkItemView: import("styled-components").StyledComponent<"div", any, {
    className: "breadcrumbs-link-item-view-helper text-trim";
} & IPredefinedLinkItemViewProps, "className">;
export declare const PredefinedSeparator: import("styled-components").StyledComponent<"div", any, {
    className: "breadcrumbs-simple-separator-helper";
}, "className">;
export declare const Item: import("styled-components").StyledComponent<(props: import("../../../Helpers/Breadcrumbs/ButtonItem").IBreadcrumbsItemProps) => JSX.Element, any, {}, never>;
export {};
