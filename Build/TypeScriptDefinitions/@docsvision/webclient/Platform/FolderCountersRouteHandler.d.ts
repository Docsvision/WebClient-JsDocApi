/// <reference types="node" />
import { Grid } from "@docsvision/webclient/Legacy/Grid";
import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IRouteHandler } from "@docsvision/webclient/System/IRouteHandler";
import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
import { $RealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
/** @internal */
export declare class FolderCountersRouteHandler implements IRouteHandler<IFolderRouteData> {
    protected services: $RealtimeCommunicationService;
    name: string;
    protected timer: any;
    protected grid: Grid;
    protected isNotificating: boolean;
    protected sessionSuspended: boolean;
    /** @deprecated Use {@link SessionExpiredHandler.SuspednedMessageType} */
    static readonly SuspednedMessageType: string;
    /** @deprecated Use {@link SessionExpiredHandler.AwokenMessageType} */
    static readonly AwokenMessageType: string;
    /** @deprecated Use {@link SessionExpiredHandler.DisposedMessageType} */
    static readonly DisposedMessageType: string;
    /** @deprecated Use {@link SessionExpiredHandler.CreatedMessageType} */
    static readonly CreatedMessageType: string;
    constructor(services: $RealtimeCommunicationService);
    mountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    unmountRoute(data: IFolderRouteData, routeType: RouteType): JQueryDeferred<{}>;
    protected createTimer(gridModel: any, refreshTimeout: number): NodeJS.Timeout;
    protected clearTimer(): void;
    protected onSessionAwokenOrCreated: () => void;
    protected onSessionSuspendedOrDisposed: () => void;
    protected onGridRefresh: () => void;
    protected onCountersChanged: (message: IRealTimeCommunicationMessage<any>) => void;
}
