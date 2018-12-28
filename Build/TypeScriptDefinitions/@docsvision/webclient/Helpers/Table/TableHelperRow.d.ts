import React from "react";
/** @internal */
export interface ITableRowHelperProps {
    className?: string;
    /** Children tags, created by TableRowCell */
    children?: React.ReactNode;
    /** Highlight row as selected. Default value: false */
    selected?: boolean;
    /** Fix row height to 50px. Default value: true */
    standardHeight?: boolean;
    key?: string;
    /** Value of data-row-name attribute for autotesting purposes */
    name?: string;
}
/** @internal */
export interface ITableRowCellHelperProps {
    /** Width in percent, pixel, as css calc() etc. */
    width?: string;
    className?: string;
    onClick?: (ev: React.MouseEvent) => void;
    tabIndex?: number;
    onKeyDown?: (ev: React.KeyboardEvent) => void;
    /** React.ReactNode that repersents cell content */
    children?: React.ReactNode;
    key: string;
}
/** @internal */
export declare const TableHelperRow: (props: ITableRowHelperProps) => JSX.Element;
/** @internal */
export declare const TableHelperCell: React.ForwardRefExoticComponent<ITableRowCellHelperProps & React.RefAttributes<HTMLDivElement>>;
