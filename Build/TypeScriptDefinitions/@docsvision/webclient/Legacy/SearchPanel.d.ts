import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { SearchDropdown } from "@docsvision/webclient/Legacy/SearchDropdown";
import { ISearchPanel } from "@docsvision/webclient/Legacy/$SearchPanel";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
/** @internal */
export declare class SearchPanel implements ISearchPanel {
    private services;
    private isNotOpened;
    private fullTextSearchEnabled;
    private dropdown;
    private isMobile;
    private timer;
    private traceProvider;
    private hidden;
    private prevNavBarMode;
    private searchText;
    constructor(services: $DeviceType);
    ShouldResetInstanceBeforeSearch: boolean;
    /** @obsolete */
    readonly DeviceType: GenModels.DeviceType;
    readonly IsDashboard: boolean;
    readonly IsSearchResults: boolean;
    readonly Dropdown: SearchDropdown;
    readonly IsNotOpened: boolean;
    readonly FullTextSearchEnabled: boolean;
    Hide(): void;
    Expand(): void;
    Show(): void;
    SearchText: string;
    SearchTextFromInput: string;
    Search(refresh?: boolean): void;
    Reset(): void;
    Clear(): void;
    Rebuild(): void;
    private buildSearchRequestParams;
    /** Called when search expanded */
    private OnExpaned;
    /** Called when search collapsed or hidden */
    private OnClosed;
    private readonly SearchButton;
    readonly SearchInput: HTMLElement;
    readonly SearchTextInput: HTMLInputElement;
    private readonly SearchClearButton;
    private Initialize;
    private onSearchAreaSelected;
    private AddSearchInputClickEvent;
    private AddSearchInputMissClickEvent;
    private AddSearchButtonClickEvent;
    private readonly Expanded;
    private Toggle;
    private UpdateCaption;
    private AddClearButtonClickEvent;
    private AddOnTextInputEvent;
    private ToggleClearButton;
    private CheckFullTextSearchAvailability;
}
