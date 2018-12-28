import { GenModels } from '@docsvision/webclient/Generated/DocsVision.WebClient.Models';
import { $StandardControllers } from "@docsvision/webclient/Legacy/StandardControllers";
import { $StandardServices } from "@docsvision/webclient/StandardServices";
import { FieldSpec } from '@docsvision/webclient/System/GetFieldName';
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
import { Factories, ServiceContainer, ServiceGetter, ServiceSetter } from "@docsvision/webclient/System/ServiceContainer";
export interface IApp extends ServiceContainer {
    initialize(applicationSettings: GenModels.ApplicationSettings): void;
    GoToDashBoard(refresh?: boolean): JQueryDeferred<void>;
    HideLogo(): void;
    ShowLogo(): void;
    ResetSettings(): void;
}
export declare var app: IApp & $StandardControllers & $StandardServices;
export declare var AppInitialized: IBasicEvent<IApp>;
/**
 * Регистрирует сервис через вызов `app.registerService` при инициализации приложения (по событию {@link AppInitialized}).
 *
 * @see {@link ServiceContainer.registerService}
 */
export declare function registerService<T>(name: FieldSpec<any, T>, service: T, meta?: object): void;
/**
 * Регистрирует сервис через вызов `app.registerServiceFactory` при инициализации приложения (по событию {@link AppInitialized}).
 *
 * @see {@link ServiceContainer.registerServiceFactory}
 */
export declare function registerServiceFactory<T>(name: FieldSpec<any, T>, serviceFactory: (services: any) => T, meta?: object): void;
/**
 * Регистрирует сервис через вызов `app.registerServiceAccessors` при инициализации приложения (по событию {@link AppInitialized}).
 *
 * @see {@link ServiceContainer.registerServiceAccessors}
 */
export declare function registerServiceAccessors<T = any, I = any>(name: FieldSpec<T, I>, get: ServiceGetter<I>, set?: ServiceSetter<I>, meta?: object): void;
/**
 * Регистрирует сервис через вызов `app.addService` при инициализации приложения (по событию {@link AppInitialized}).
 *
 * @see {@link ServiceContainer.addService}
 */
export declare function addService<$T>(container: $T, meta?: object): void;
/**
 * Регистрирует сервис через вызов `app.addServiceFactory` при инициализации приложения (по событию {@link AppInitialized}).
 *
 * @see {@link ServiceContainer.addServiceFactory}
 */
export declare function addServiceFactory<$T>(container: Factories<$T>, meta?: object): void;
export declare function setApp(application: IApp & $StandardControllers & $StandardServices): void;
