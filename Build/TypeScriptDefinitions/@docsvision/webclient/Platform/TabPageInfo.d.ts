import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { LoadingState } from "@docsvision/webclient/System/LodingState";
export declare class TabPageInfo {
    header: string;
    key: string;
    data: GenModels.ControlModel;
    loadingState: LoadingState;
    mobileTab: HTMLElement;
    constructor(data: GenModels.ControlModel);
    readonly loaded: boolean;
}
