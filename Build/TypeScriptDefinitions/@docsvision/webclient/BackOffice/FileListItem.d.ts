import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { IFileListItem } from "@docsvision/webclient/BackOffice/IFileListItem";
import { FileListItemComponent } from "@docsvision/webclient/BackOffice/FileListItemComponent";
import { FileListItemState } from "@docsvision/webclient/BackOffice/FileListItemState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/**
 * Предоставляет данные файла для элемента управления [Список файлов]{@link FileListControl}.
 */
export declare class FileListItem implements IFileListItem {
    data: GenModels.LayoutFileModel;
    settingsMenuExpaned: boolean;
    versionsListExanded: boolean;
    versionsListAnimating: boolean;
    comentsDialogOpen: boolean;
    uploadVersionAttachedElements: FileListAttachedElements;
    versionListElement: HTMLElement;
    itemComponent: FileListItemComponent;
    file: File;
    state: FileListItemState;
}
