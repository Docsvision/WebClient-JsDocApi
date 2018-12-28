import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ICommandMenuState {
    expanded: boolean;
    popoverOpen: boolean;
    commandMenuItems: GenModels.CreateKindDataModel[];
    /** @deprecated */
    commandBarBtn?: HTMLElement;
}
