import { FileListItemState } from "@docsvision/webclient/BackOffice/FileListItemState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IFileListItem {
    data: GenModels.LayoutFileModel;
    file: File;
    state: FileListItemState;
}
