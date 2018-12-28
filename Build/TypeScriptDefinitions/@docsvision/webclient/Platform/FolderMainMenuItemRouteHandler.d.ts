import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { FolderMainMenuItem } from "@docsvision/webclient/Platform/FolderMainMenuItem";
import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/**
 * Обработчик роута папки, служащий для обеспечения функционирования контролов {@link FolderMainMenuItem},
 * а также для загрузки дополнительной информации о папке при ее открытии.
 */
export declare class FolderMainMenuItemRouteHandler implements IRouteHandler<IFolderRouteData> {
    private services;
    static Components: {
        [folderId: string]: FolderMainMenuItem[];
    };
    constructor(services: $LayoutFolderController);
    name: string;
    prepareRouteDataLoad?(routeData: Partial<IFolderRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    /** Инициирует загрузку элементов меню, для отображение указанной папки. */
    static loadSelectedFolder(parentNodes: string[]): void;
    /**
     * Регистрирует соответствие папки и контрола FolderMainMenuItem.
     * Используется для получения дополнительной информации о папке при ее открытии.
     */
    static register(folderId: string, control: FolderMainMenuItem): void;
}
