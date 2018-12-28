import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ISearchDropdown } from "@docsvision/webclient/Legacy/ISearchDropdown";
/** @internal */
export declare class SearchDropdown implements ISearchDropdown {
    private dropdown;
    private optionList;
    private options;
    private selectedText;
    private selectedElement;
    private selectedValue;
    private callback;
    private DROP_DOWN_ICO;
    constructor(dropdown: HTMLElement, callback: (oldVal?: GenModels.SearchContextOption, newVal?: GenModels.SearchContextOption) => void);
    UpdateDropDownVisibility(): void;
    ShowOptions(selectedOption: string, displayOptions?: Array<GenModels.SearchContextOption>): void;
    Hide(): void;
    readonly SearchContext: string;
    readonly Element: HTMLElement;
    private Initialize;
    Show(): void;
    private AddDropdownMissClickEvent;
    private AddDropdownClickEvent;
    private AddOptionListClickEvent;
    private UpdateSelectedOption;
}
