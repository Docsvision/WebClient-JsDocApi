import React from "react";
/** @internal */
export interface ITableHelperHeaderRowProps {
    className?: string;
    /** Children tags, created by TableRowCell */
    children?: React.ReactNode;
    /** Show header row only on hover. Default value: false */
    showOnHover?: boolean;
    key?: string;
    /** Value of data-row-name attribute for autotesting purposes */
    name?: string;
}
/** @internal */
export interface ITableHeaderCellHelperProps {
    /** Width in percent, pixel, as css calc() etc. */
    width?: string;
    className?: string;
    /** React.ReactNode that repersents cell content */
    children?: React.ReactNode;
    key: string;
    /** Tooltip */
    title?: string;
}
/** @internal */
export declare const TableHelperHeaderRow: (props: ITableHelperHeaderRowProps) => JSX.Element;
/** @internal */
export declare const TableHelperHeaderCell: (props: ITableHeaderCellHelperProps) => JSX.Element;
