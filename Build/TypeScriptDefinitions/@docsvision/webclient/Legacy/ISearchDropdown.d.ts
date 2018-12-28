import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface ISearchDropdown {
    UpdateDropDownVisibility(): void;
    ShowOptions(selectedOption: string, displayOptions: Array<GenModels.SearchContextOption>): void;
    Hide(): void;
    Show(): void;
}
