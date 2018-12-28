import { ITasksTreeEdgeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeEdgeContainer";
import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ITasksTreeContainerState {
    network: vis.Network;
    shouldContainerUpdate: boolean;
    propertyProcessors: any;
    nodes: ITasksTreeNodeContainer[];
    edges: ITasksTreeEdgeContainer[];
    helpBoxDelegationExpanded: boolean;
    helpBoxDelegationClick: (e: React.MouseEvent<any>) => void;
    helpBoxRender: any;
    selectedNode: ITasksTreeNodeContainer;
    helpModel: GenModels.TreeNodeHelpModel;
    data: vis.Data;
    roots: vis.IdType[];
}
