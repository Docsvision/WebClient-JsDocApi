import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** @internal */
export interface ITaskListItemProps {
    taskListItem: GenModels.TaskDataModel;
    digestView: boolean;
    tabStop: boolean;
    onOpen: (url: string) => void;
}
