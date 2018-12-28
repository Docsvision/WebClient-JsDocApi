import { IApp } from "@docsvision/webclient/App";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $StandardControllers } from "@docsvision/webclient/Legacy/StandardControllers";
import { IFolderViews } from "@docsvision/webclient/Legacy/$FolderViews";
import { INavBar } from "@docsvision/webclient/Legacy/$NavBar";
import { ISearchPanel } from "@docsvision/webclient/Legacy/$SearchPanel";
import { IFolders } from "@docsvision/webclient/Legacy/$Folders";
import { ISidebar } from "@docsvision/webclient/Legacy/$Sidebar";
import { IUserMenu } from "@docsvision/webclient/Legacy/$UserMenu";
import { ILegacyRouter } from "@docsvision/webclient/Legacy/ILegacyRouter";
import { IUnreadCounter } from "@docsvision/webclient/Platform/$UnreadCounter";
import { $StandardServices } from "@docsvision/webclient/StandardServices";
import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { IRouter } from "@docsvision/webclient/System/$Router";
import { IRealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
import { Factories, ServiceContainer, ServiceGetter, ServiceSetter } from "@docsvision/webclient/System/ServiceContainer";
/** Входная точка приложения Web-клиента. */
export declare class Application extends ServiceContainer implements IApp {
    private localization;
    private canPromise;
    private static logEnabled;
    private static isIE10;
    private static routeTimestampVal;
    private static isMobileSafary;
    private traceProvider;
    /** Экземпляр приложения Web-клиента. */
    static Instance: Application & $StandardControllers & $StandardServices;
    constructor();
    /**
     * Регистрирует сервис через вызов `app.registerService` при инициализации приложения (по событию {@link AppInitialized}).
     *
     * @see {@link ServiceContainer.registerService}
     */
    static registerService<T>(name: FieldSpec<any, T>, service: T, meta?: object): void;
    /**
     * Регистрирует сервис через вызов `app.registerServiceFactory` при инициализации приложения (по событию {@link AppInitialized}).
     *
     * @see {@link ServiceContainer.registerServiceFactory}
     */
    static registerServiceFactory<T>(name: FieldSpec<any, T>, serviceFactory: (services: any) => T, meta?: object): void;
    /**
     * Регистрирует сервис через вызов `app.registerServiceAccessors` при инициализации приложения (по событию {@link AppInitialized}).
     *
     * @see {@link ServiceContainer.registerServiceAccessors}
     */
    static registerServiceAccessors<T>(name: FieldSpec<any, T>, get: ServiceGetter<T>, set?: ServiceSetter<T>, meta?: object): void;
    /**
     * Регистрирует сервис через вызов `app.addService` при инициализации приложения (по событию {@link AppInitialized}).
     *
     * @see {@link ServiceContainer.addService}
     */
    static addService<$T>(container: $T, meta?: object): void;
    /**
     * Регистрирует сервис через вызов `app.addServiceFactory` при инициализации приложения (по событию {@link AppInitialized}).
     *
     * @see {@link ServiceContainer.addServiceFactory}
     */
    static addServiceFactory<$T>(container: Factories<$T>, meta?: object): void;
    /** Событие инициализации приложения. */
    static readonly Initialized: IBasicEvent<IApp>;
    /** Является ли текущий браузер IE10. */
    readonly isIE10: boolean;
    /** Логирование включено. */
    static readonly IsIE10: boolean;
    logEnabled: boolean;
    static LogEnabled: boolean;
    readonly routeTimestamp: number;
    updateRouteTimestamp(): void;
    /** Временная метка роута - при смене роута она изменяется. */
    static readonly RouteTimestamp: number;
    /** Обновить {@link RouteTimestamp}. */
    static UpdateRouteTimestamp(): void;
    /** Является ли текущий браузер мобильной версией Safary. */
    readonly isMobileSafary: boolean;
    static readonly IsMobileSafary: boolean;
    /** @internal */
    initialize(applicationSettings: GenModels.ApplicationSettings): void;
    /** Открыть домашнюю страницу. */
    GoToDashBoard(refresh?: boolean): JQueryDeferred<void>;
    /** Скрыть логотип Docsvision в шапке приложения. */
    HideLogo(): void;
    /** Отобразить логотип Docsvision в шапке приложения. */
    ShowLogo(): void;
    /** Сбрасывает локальные настройки и кеши пользователя сохраненные в браузере. */
    ResetSettings(): Promise<void>;
    /** @deprecated */
    readonly CurrentFolderUri: string;
    /** @deprecated */
    LastSearchRequest: string;
    /** @deprecated */
    lastSearchRequest: string;
    /** @deprecated Используйте сервис `{@link $UserMenu}`. */
    readonly UserMenu: IUserMenu;
    /** @deprecated Используйте сервис `{@link $Sidebar}`. */
    readonly Sidebar: ISidebar;
    /** @deprecated Используйте сервис `{@link $FolderViews}`. */
    readonly FolderViews: IFolderViews;
    /** @deprecated Используйте сервис `{@link $SearchPanel}`. */
    readonly SearchPanel: ISearchPanel;
    /** @deprecated Используйте сервис `{@link $NavBar}`. */
    readonly NavBar: INavBar;
    /** @deprecated */
    readonly CompanyLogo: HTMLElement;
    /** @deprecated Используйте сервис `{@link $FullTextSearchEnabled}`. */
    readonly FullTextSearchEnabled: boolean;
    /** @deprecated  Используйте сервис `{@link $Router}` */
    readonly SammyHelper: IRouter & ILegacyRouter;
    /** @deprecated  Используйте сервис `{@link $Folders}` */
    readonly Folders: IFolders;
    /** @deprecated  Используйте сервис `{@link $UnreadCounter}` */
    readonly UnreadCounters: IUnreadCounter;
    /** @deprecated  Используйте сервис `{@link $DeviceType}` */
    readonly DeviceType: GenModels.DeviceType;
    /** @deprecated  Используйте сервис `{@link $DeviceType}` */
    readonly DefaultDeviceType: GenModels.DeviceType;
    /** @deprecated  Используйте сервис `{@link $InstalledCSP}` */
    InstalledCSP: boolean;
    /** @deprecated  Используйте сервис `{@link $ApplicationTimestamp}` */
    readonly ApplicationTimestamp: number;
    /** @deprecated */
    readonly Localization: any;
    /** @deprecated  Используйте сервис `{@link $SiteUrl}` */
    readonly SiteUrl: string;
    /** @deprecated  Используйте сервис `{@link $LayoutManager}` */
    readonly LayoutManager: any;
    /** @deprecated  Используйте сервис `{@link $RealtimeCommunicationService}` */
    readonly RealtimeCommunicationService: IRealtimeCommunicationService;
    /** @deprecated  Используйте сервис `{@link $CurrentEmployeeId}` */
    readonly CurrentEmployeeId: string;
    private AddBackButtonEventClick;
    private isApple;
    private DetectBrowsers;
}
export declare type App = Application;
export declare const App: typeof Application;
