import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IExistingCardRouteData {
    cardId: string;
    layoutType: GenModels.LayoutType;
    refresh?: boolean;
    layoutModel?: GenModels.LayoutCardViewModel;
    loadingError?: string | XMLHttpRequest;
    invalidCardIdError?: boolean;
}
