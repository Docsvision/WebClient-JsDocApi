import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ITaskListProps {
    digestView: boolean;
    tabStop: boolean;
    items: GenModels.TaskDataModel[];
    itemsLoading?: boolean;
    itemsCount: number;
    onTaskOpen(url: string, item: GenModels.TaskDataModel): any;
}
