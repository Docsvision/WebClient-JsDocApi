import { ISearchDropdown } from "@docsvision/webclient/Legacy/ISearchDropdown";
export interface ISearchPanel {
    Hide(): void;
    Expand(): void;
    Show(): void;
    Search(refresh: boolean): void;
    Reset(): void;
    Clear(): void;
    Rebuild(): void;
    SearchText: string;
    readonly SearchInput: HTMLElement;
    readonly SearchTextInput: HTMLInputElement;
    SearchTextFromInput: string;
    readonly FullTextSearchEnabled: boolean;
    readonly IsNotOpened: any;
    readonly Dropdown: ISearchDropdown;
}
export declare type $SearchPanel = {
    searchPanel: ISearchPanel;
};
