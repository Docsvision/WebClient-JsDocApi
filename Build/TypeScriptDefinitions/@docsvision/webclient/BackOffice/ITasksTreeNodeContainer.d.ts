import { IndicatorType } from "@docsvision/webclient/BackOffice/IndicatorType";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ITasksTreeNodeContainer extends vis.Node {
    isIndicator?: boolean;
    parentNodeId?: vis.IdType;
    indicatorType?: IndicatorType;
    borderWidth?: number;
    title?: HTMLElement | string | any;
    nodeModel: GenModels.TreeNodeModel;
    collapsed?: boolean;
    collapsedBySetting?: boolean;
}
