import React from "react";
/** @internal */
export interface ITableHelperProps {
    mode: TableHelperMode;
    className?: string;
    /** Children tags, created by TableRow, TableHeaderRow */
    children?: React.ReactNode;
    /** Should row to be higlighted on hover. Default value: false */
    notHighlightOnHover?: boolean;
}
/** @internal */
export interface ITableHelperBodyProps {
    className?: string;
    /** Children tags, created by TableRow, TableHeaderRow */
    children?: React.ReactNode;
}
/** @internal */
export declare enum TableHelperMode {
    /** Use flex-box for layout. Width should be provided for all cells */
    Blocks = 0,
    /** Use display: table. */
    Table = 1
}
/** @internal */
export declare const TableHelper: (props: ITableHelperProps) => JSX.Element;
