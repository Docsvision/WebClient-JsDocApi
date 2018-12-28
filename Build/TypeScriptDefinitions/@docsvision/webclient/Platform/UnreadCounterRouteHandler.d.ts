import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IUnreadCounter } from "@docsvision/webclient/Platform/IUnreadCountersData";
import { NotyDef } from "@docsvision/webclient/System/PopupNotification";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class UnreadCounterRouteHandler implements IRouteHandler<IFolderRouteData> {
    protected currentFolderCounter?: IUnreadCounter;
    protected currentFolderId: string;
    protected popupNotification?: NotyDef;
    name: string;
    mountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<{}>;
    protected onUnreadCountersChanged: () => void;
}
