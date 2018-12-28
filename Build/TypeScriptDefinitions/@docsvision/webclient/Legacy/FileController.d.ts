import { IFilePreviewModel } from "@docsvision/webclient/Legacy/IFilePreviewModel";
import { ServerController } from "@docsvision/webclient/System/ServerController";
import { IGetFilePreviewModelParams } from "@docsvision/webclient/Legacy/IGetFilePreviewModelParams";
export declare class FileController extends ServerController {
    GetFilePreviewModel(model: IGetFilePreviewModelParams): JQueryDeferred<IFilePreviewModel>;
    GetDownloadUrl(fileId: string, fileName: string): string;
    GetUploadFilesUrl(): string;
}
export declare type $FileController = {
    fileController: FileController;
};
