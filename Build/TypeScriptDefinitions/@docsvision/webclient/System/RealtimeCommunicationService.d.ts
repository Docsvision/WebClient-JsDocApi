import { $CurrentEmployeeId } from "@docsvision/webclient/StandardServices";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
import { IRealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
import { RealtimeServerSender } from "@docsvision/webclient/System/RealtimeServerSender";
import { RealtimeSubscriber } from "@docsvision/webclient/System/RealtimeSubscriber";
/** @internal */
export interface IRealtimeMasterTabInfo {
    masterTabId?: string;
    connectionId?: string;
    masterLastSeen?: Date;
    tabs: string[];
}
/** @internal */
export interface IReceivedRealtimeMessageQueueItem {
    message: IRealTimeCommunicationMessage<any>;
    receivedTime: Date;
    targetTabs?: string[];
}
/** @internal */
export interface ISendRealtimeMessageQueueItem {
    message: IRealTimeCommunicationMessage<any>;
    senderTabId: string;
}
/** @internal */
export interface ITabClosedData {
    isMaster: boolean;
    tabId: string;
}
/** @deprecated Use RealtimeSubscriber instead. */
export declare type RealtimeSubsriber<T> = RealtimeSubscriber<T>;
/** Интерфейс отправителя сообщений к серверу в режиме реального времени, используемый в {@link RealtimeCommunicationService} */
export declare class RealtimeCommunicationService implements IRealtimeCommunicationService {
    private services;
    private static MasterChanelType;
    private static TabChanelType;
    private static RegisterTabChanel;
    private static RegisterTabMessage;
    private static TabRegisteredMessage;
    private static TabUnregisteredMessage;
    /** Тип сообщения об установлении соединения с сервером. */
    static ConnectedMessage: string;
    /** Тип сообщения о потере соединения с сервером. */
    static DisconnectedMessage: string;
    /** @internal Timeout to try reconnect after connection completely lost (server is unavablable more then 30 sec). */
    static ReconnectTimeout: number;
    /** Тип сообщения о закрытии вкладки. */
    static TabClosed: string;
    private mainLocalStorageKey;
    private messagesFromMaster;
    private messagesFromTabs;
    private messagesToMaster;
    private masterBroadcast;
    private registerTabChanel?;
    private customSenders;
    private tabId;
    private masterTabMonitorTimer;
    private masterTabMonitorInterval;
    private tabChanelTimeToDead;
    private hub?;
    private lastMasterTabId?;
    private registeredAsSlave;
    /** Закрывается ли эта вкладка в данный момент */
    private isClosing;
    private reconnectTimeout;
    private pendingMessagesToServer;
    /** @internal */
    constructor(services: $CurrentEmployeeId & $LocalStorage);
    /** Идентификатор текущей пользовательской сессии. */
    readonly sessionId: string;
    /** Отправить сообщение на сервер. */
    sendToServer<T>(message: IRealTimeCommunicationMessage<T>): void;
    /** Отправить сообщение между вкладками. */
    sendBetweenTabs<T>(message: IRealTimeCommunicationMessage<T>, targetTabs?: string[], sync?: boolean): void;
    /** Отправить сообщение конкретной вкладке. */
    sendToTab<T>(tabId: string, message: IRealTimeCommunicationMessage<T>): void;
    /** Отправить сообщение вкладке, которая осуществляет взаимодействие с сервером. */
    sendToMasterTab<T>(message: IRealTimeCommunicationMessage<T>): void;
    /** Существуют ли подписчики данного сообщения в текущей вкладке. */
    hasSubscribers(messageType: string): boolean;
    /** Подписаться на сообщения определенного типа. */
    subscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    /** Отписаться от сообщений определенного типа. */
    unsubscribe<T>(messageType: string, callback: RealtimeSubscriber<T>): void;
    /** Подменяет способ отправки сообщений на сервер для определенного типа сообщений. */
    setServerSender(messageType: string, processor: RealtimeServerSender<any>): void;
    /** Возвращает объект, заданный в {@link setServerSender}. */
    getServerSender(messageType: string): RealtimeServerSender<any>;
    /** Возвращает информацию о том, был ли сервис инициализирован и готов ли он к работе. */
    initialized(): boolean;
    /** Осуществляет ли текущая вкладка взаимодействие с сервером. */
    readonly isMasterTab: boolean;
    /** Идентификатор текущей вкладки. */
    readonly currentTabId: string;
    /** Идентификатор вкладки, осуществляющей взаимодействие с сервером. */
    readonly masterTabId: string;
    /** @internal */
    protected onMonitorMasterTabTimerTick: () => void;
    /** @internal */
    protected onInitializeSlaveTab(info: IRealtimeMasterTabInfo): void;
    /** @internal */
    protected onRegisteredAsSlave: (message: IRealTimeCommunicationMessage<string>) => void;
    /** @internal */
    protected onUnregisteredAsSlave: (message: IRealTimeCommunicationMessage<string>) => void;
    /** @internal */
    protected onInitializeMasterTab(info: IRealtimeMasterTabInfo): void;
    /** @internal */
    protected ensureDeinitializedMaster(): void;
    /** @internal */
    protected onHubMessage: (message: IRealTimeCommunicationMessage<any>) => void;
    /** @internal */
    protected onMessageToServer: (message: IRealTimeCommunicationMessage<any>) => Promise<void>;
    /** @internal */
    protected onMessageToTabs(item: IRealTimeCommunicationMessage<any>, sync?: boolean): void;
    /** @internal */
    protected onTabOpened: (message: IRealTimeCommunicationMessage<string>) => void;
    /** @internal */
    protected onCurrentTabClose: () => void;
    /** @internal */
    protected onTabClose: (message: IRealTimeCommunicationMessage<ITabClosedData>) => void;
    /** @internal */
    protected closeChanelFromTab(tabId: string): void;
    /** @internal */
    protected openChanelFromTab(tabId: string): void;
    /** @internal */
    protected getMasterTabInfo(): IRealtimeMasterTabInfo;
    /** @internal */
    protected setMasterTabInfo(data: IRealtimeMasterTabInfo): void;
    /** @internal */
    protected getCurrentEmployee(): string;
    /** @internal */
    protected getCurrentEmployeeAccountName(): string;
    /** Возвращает значение настройки из web-конфигурации. */
    static readonly EnableSignalRLogging: boolean;
    /**
     * Возвращает настройку из web-конфигурации - таймаут перед инициализацией соединения с сервером,
     * для уменьшения нагрузки на сетевой канал при открытии приложения.
     */
    static readonly SignalRInitTimeout: number;
    /** @internal */
    static log(msg: string): void;
    /** @internal */
    static logMessage(caption: string, message: IRealTimeCommunicationMessage<any>): void;
}
