import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { NotyDef } from "@docsvision/webclient/System/PopupNotification";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/** @internal */
export declare class SessionExpiredHandler implements IRouteHandler<IFolderRouteData> {
    static SuspednedMessageType: string;
    static AwokenMessageType: string;
    static DisposedMessageType: string;
    static CreatedMessageType: string;
    static PauseNotificationsMessageType: string;
    static ContinueNotificationsMessageType: string;
    static readonly SessionInactiveMessageHide: boolean;
    protected popupNotification?: NotyDef;
    protected notificationsPaused: boolean;
    name: string;
    constructor();
    unmountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<any>;
    protected onSessionDisposed: () => void;
    protected onSessionCreated: () => void;
    protected onSessionAwoken: () => void;
    protected onSessionSuspended: () => void;
    protected onSessionNotificationsPaused: () => void;
    protected onSessionNotificationsContinued: () => void;
    protected showSessionInactiveMessage: () => void;
    protected restoreSession: () => JQueryDeferred<any>;
}
