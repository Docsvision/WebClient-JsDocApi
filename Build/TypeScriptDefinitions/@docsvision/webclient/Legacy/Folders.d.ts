import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IFolders } from "@docsvision/webclient/Legacy/$Folders";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
import { $Router } from "@docsvision/webclient/System/$Router";
/** Сервис для хранения загруженной информации о папках. */
export declare class Folders implements IFolders {
    private services;
    constructor(services: $LayoutFolderController & $Router & $LocalStorage);
    private LoadedFolderInfo;
    /** Зарегистрировать загруженную инфомрацию о папке. */
    registerFolderInfo(folderId: string, info: GenModels.FolderNode): void;
    /** Очистить сохраненные сведения для папки. */
    unregisterFolderInfo(folderId: string, info: GenModels.FolderNode): void;
    /** Возвращает загруженную ранее информацию о папке, если таковая присутствует в локальном хранилище. */
    getCachedFolderInfo(folderId: string): GenModels.FolderNode | undefined;
    /** Загружает или возвращает загруженную ранее информацию о папке. */
    getFolderInfo(folderId: string): JQueryDeferred<GenModels.FolderNode>;
    /** Возвращает идентификатор текущей папки, открытой в Web-клиенте. */
    getCurrentFolderId(): string | undefined;
    /** @internal */
    static SaveFolderSettings(folderId: any, settingName: any, value: any): void;
    /** @internal */
    static LoadFolderSetting(folderId: any, settingName: any): any;
}
