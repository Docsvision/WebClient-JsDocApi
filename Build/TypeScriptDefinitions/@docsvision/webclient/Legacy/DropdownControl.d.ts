import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class DropdownControl extends Control {
    private optionList;
    private options;
    private selectedText;
    private selectedElement;
    private selectedValue;
    private isDisabled;
    private DATA_VALUE;
    SelectingItemCallback: (value: string, name: string) => JQueryDeferred<any>;
    SelectItemCallback: (value: string, name: string) => void;
    constructor(root: HTMLElement, disabled: string);
    ShowOptions(selectedOption: string, displayOptions?: Array<GenModels.SearchContextOption>): void;
    Hide(): void;
    Show(): void;
    readonly SelectedValue: string;
    readonly SelectedOption: HTMLElement;
    readonly Element: HTMLElement;
    private Initialize;
    private AddDropdownMissClickEvent;
    private AddDropdownClickEvent;
    private AddOptionListClickEvent;
    private UpdateSelectedOption;
    private SetSelectedText;
}
