import { IBoxWithButtonsButtonInfo } from "@docsvision/webclient/Helpers/BoxWithButtons";
import { ITypeaheadProps } from "@docsvision/webclient/Helpers/Typeahead/ITypeaheadProps";
import { ITypeaheadState } from "@docsvision/webclient/Helpers/Typeahead/ITypeaheadState";
import { ITypeaheadSearchResult } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadSearchResult";
import { ITypeaheadVariant } from "@docsvision/webclient/Helpers/Typeahead/Models/ITypeaheadVariant";
import { TypeaheadItem } from "@docsvision/webclient/Helpers/Typeahead/Models/TypeaheadItem";
import React from "react";
/** @internal */
export declare class Typeahead extends React.Component<ITypeaheadProps, ITypeaheadState> {
    static FirstPageSize: number;
    static NextPageSize: number;
    static SearchTimeout: number;
    /** @internal */
    state: ITypeaheadState;
    constructor(props: ITypeaheadProps);
    componentWillUnmount(): void;
    componentDidMount(): void;
    closeDropdown(): void;
    openDropdown(): void;
    variantsDropdownOpen: boolean;
    readonly variants: TypeaheadItem[];
    showAll(): void;
    protected onShowAll(): void;
    protected onClearValueClick(): void;
    componentWillReceiveProps(nextProps: ITypeaheadProps, nextContext: any): void;
    protected getTextValue(): string;
    protected getFirstPageSize(): number;
    protected getNextPageSize(): number;
    protected getSearchIndex(): number;
    protected createItem(data: ITypeaheadVariant): TypeaheadItem;
    protected onSelected(item: TypeaheadItem): void;
    protected select(item: TypeaheadItem): void;
    protected loadVariants(searchText: string, page: number): JQueryDeferred<ITypeaheadSearchResult>;
    protected readonly searchTimeout: number;
    protected onInputChange(newText: string): void;
    private documentClick;
    protected onShowMore(): JQueryDeferred<ITypeaheadSearchResult>;
    protected onShowVariants(): void;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onItemClick(ev: React.MouseEvent<any>, item: TypeaheadItem): void;
    /** Contains logic for keyboard navigation */
    protected onDropdownKeydown(ev: React.KeyboardEvent<any>): void;
    private rednerVariantText;
    protected renderVariant(x: TypeaheadItem): JSX.Element;
    protected attachDropdown(elem: HTMLElement): void;
    protected getFavoredVariants(): TypeaheadItem[];
    protected getUsualVariants(): TypeaheadItem[];
    protected getButtons(): IBoxWithButtonsButtonInfo[];
    render(): React.ReactNode;
}
