import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare class LayoutPageRouteHelpers {
    static makeRouteUrl(position: string, header: string, color: string): string;
    static loadLayout(position: string): JQueryDeferred<GenModels.LayoutViewModel>;
}
