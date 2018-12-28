import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
export interface IRowInfo {
    rowId: string;
    htmlElem: HTMLElement;
    columns: GenModels.ControlModel[];
    removeRowHelper: RequestHelper;
}
