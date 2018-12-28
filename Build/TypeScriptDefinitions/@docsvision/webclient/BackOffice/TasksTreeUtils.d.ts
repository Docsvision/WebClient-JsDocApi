import { ITasksTreeNodeContainer } from "@docsvision/webclient/BackOffice/ITasksTreeNodeContainer";
import { IndicatorType } from "@docsvision/webclient/BackOffice/IndicatorType";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export declare function getIndicator(parentId: vis.IdType, indicatorType: IndicatorType, image: string, hidden?: boolean, size?: number): ITasksTreeNodeContainer;
/** @internal */
export declare function openTask(id: string): void;
/** @internal */
export declare function openLink(linkItemData: GenModels.LayoutLinkModel): void;
