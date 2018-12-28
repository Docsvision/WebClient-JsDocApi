import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface INewCardRouteData {
    createParams?: GenModels.LayoutCardCreateParams;
    layoutModel?: GenModels.LayoutCardViewModel;
    loadingError?: string | XMLHttpRequest;
}
