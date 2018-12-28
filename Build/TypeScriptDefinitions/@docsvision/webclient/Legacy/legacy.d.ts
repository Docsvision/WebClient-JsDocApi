export declare function UploadFilePanelRenderFileItem(file: any, $container: any, autoupload: any): void;
export declare function UploadPanelAddRemoveFileEventHandler(element: any, callbackRemovedFile: any): void;
export declare function UploadFilePanelAddFileItem(files: any, $container: any, autoupload: any): void;
export declare function FileUploadValidateFileName(data: any): boolean;
export declare function InitUploadFilePanel(formName: any, filesContainer: any, singleFileUploads: any, autoUpload: any, callbackAddedFile: any, fileuploadadded: any, fileuploaddone: any, fileuploadfailed: any, dropZoneId: any, callbackRemovedFile: any): void;
export declare function ToggleUploadSpinner(fileId: any): void;
export declare function UploadFile($formName: any, filesContainer: any, onSuccess: any, onFileAdded: any, dropZoneId: any, onFileRemoved: any): void;
export declare function setDragover(dropZoneElement: any): void;
export declare function InitFileUploadControl($formName: any, filesContainer: any, autoUpload: any, singleFileUploads: any, fileuploadadded: any, fileuploaddone: any, fileuploadfailed: any, dropZoneId: any, fileremoved: any): void;
export declare function DisableFormEnter(formName: any): void;
declare namespace Docsvision.Backoffice.Client.Cards.TaskGroup {
    class BackofficeTaskIntervalsManager {
    }
}
export declare function CreateTaskIntervalManager(): Docsvision.Backoffice.Client.Cards.TaskGroup.BackofficeTaskIntervalsManager;
declare namespace Docsvision.Integration.Javascript.TaskGroup {
    class TaskInterval {
    }
}
export declare function CreateTaskInterval(): Docsvision.Integration.Javascript.TaskGroup.TaskInterval;
export {};
