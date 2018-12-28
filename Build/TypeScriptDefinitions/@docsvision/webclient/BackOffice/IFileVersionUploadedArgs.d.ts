import { IFileListItem } from "@docsvision/webclient/BackOffice/IFileListItem";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IFileVersionUploadedArgs {
    fileItem: IFileListItem;
    version: GenModels.VersionedFileModel;
}
