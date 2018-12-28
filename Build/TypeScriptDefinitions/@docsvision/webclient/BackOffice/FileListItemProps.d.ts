import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { FileListItem } from "@docsvision/webclient/BackOffice/FileListItem";
import { FileListControlLogic } from "@docsvision/webclient/BackOffice/FileListControlLogic";
import { $LayoutFileController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { EditMode } from "@docsvision/webclient/System/EditMode";
/** @internal */
export declare class FileListItemProps {
    fileListItem: FileListItem;
    mode: EditMode;
    autoUpload: boolean;
    logic: FileListControlLogic;
    renderUploadForm: (attach: FileListAttachedElements, action: string, main?: boolean, fileItem?: FileListItem) => any;
    key: string;
    services: $LayoutFileController & $DeviceType;
}
