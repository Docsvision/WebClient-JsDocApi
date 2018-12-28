import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ApprovalCycleListProps {
    cycles: GenModels.ApprovalHistoryCycleModel[];
    currentCycle: any;
    onCycleClick: Function;
}
