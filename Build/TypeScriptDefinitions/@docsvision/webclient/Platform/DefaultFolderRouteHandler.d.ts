import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class DefaultFolderRouteHandler implements IRouteHandler<IFolderRouteData> {
    name: string;
    prepareRouteDataLoad(knownRouteData: Partial<IFolderRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    loadRouteData(knownRouteData: Partial<IFolderRouteData>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    mountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<{}>;
    /**
     * Load filter and filter settings
     * @param folderInfo Folder info
     * @param folderView  Folder view
     */
    private loadFilter;
    /**
     * Load viewId and view settings
     * @param folderInfo Folder info
     * @param folderView  Folder view
     */
    private loadViewSettings;
    /**
     * Load search parameters stuff
     * @param folderInfo Folder info
     * @param folderView  Folder view
     */
    private loadSearchParametres;
}
