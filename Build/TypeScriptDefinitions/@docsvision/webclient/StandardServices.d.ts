import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FolderViews } from "@docsvision/webclient/Legacy/$FolderViews";
import { $NavBar } from "@docsvision/webclient/Legacy/$NavBar";
import { $SearchPanel } from "@docsvision/webclient/Legacy/$SearchPanel";
import { $Folders } from "@docsvision/webclient/Legacy/$Folders";
import { $Sidebar } from "@docsvision/webclient/Legacy/$Sidebar";
import { $UserMenu } from "@docsvision/webclient/Legacy/$UserMenu";
import { $UnreadCounter } from "@docsvision/webclient/Platform/$UnreadCounter";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardId, $CardInfo, $ControlStore, $EditOperationStore, $LayoutInfo, $OwnerLayout } from "@docsvision/webclient/System/LayoutServices";
import { $LayoutControlFactory } from "@docsvision/webclient/System/$LayoutControlFactory";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { $UrlStore } from "@docsvision/webclient/System/$UrlStore";
import { $LayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
import { $Router, $RouterNavigation } from "@docsvision/webclient/System/$Router";
import { $RealtimeCommunicationService } from "@docsvision/webclient/System/$RealtimeCommunicationService";
/** Сервис доступа к идентификатору текущего пользователя. */
export declare type $CurrentEmployeeId = {
    currentEmployeeId: string;
};
/** Сервис доступа к логину текущего пользователя. */
export declare type $CurrentEmployeeAccountName = {
    currentEmployeeAccountName: string;
};
/** Сервис информации о типе устройства, в котором открыт Web-клиент. */
export declare type $DeviceType = {
    deviceType: GenModels.DeviceType;
    defaultDeviceType: GenModels.DeviceType;
};
/** Сервис доступа к временной метке запуска сервера. */
export declare type $ApplicationTimestamp = {
    applicationTimestamp: number;
};
/** Сервис доступа к адресу сайта. */
export declare type $SiteUrl = {
    siteUrl: string;
};
/** Сервис доступа к текущей локали Web-клиента в двухбуквенном формате (en, ru). */
export declare type $Locale = {
    locale: string;
};
/** Сервис доступа к настройке полнотекстового поиска. */
export declare type $FullTextSearchEnabled = {
    fullTextSearchEnabled: boolean;
};
/** Сервис получения информации плагине КриптоПро. */
export declare type $InstalledCSP = {
    installedCSP: boolean;
};
/** Сервис информации об имени базы, с которой работает Web-клиент. */
export declare type $BaseName = {
    baseName: string;
};
export declare type $RouteTimestamp = {
    readonly routeTimestamp: number;
    updateRouteTimestamp(): any;
};
export declare type $IsMobileSafary = {
    isMobileSafary: boolean;
};
/** Настройка из web.config - включено ли логирование клиентского роутинга. */
export declare type $EnableRouterLogging = {
    enableRouterLogging: boolean;
};
export declare type $LogEnabled = {
    logEnabled: boolean;
};
export declare type $IsIE10 = {
    readonly isIE10: boolean;
};
export declare type $LastSearchRequest = {
    lastSearchRequest: string;
};
export declare type $CurrentEmployee = {
    currentEmployee: GenModels.EmployeeModel;
};
export declare type $ApplicationSettings = {
    applicationSettings: GenModels.ApplicationSettings;
};
/** Стандартные сервисы Web-клиента. */
export declare type $StandardServices = $Layout & $Router & $CurrentEmployeeId & $CurrentEmployeeAccountName & $DeviceType & $SiteUrl & $Locale & $FullTextSearchEnabled & $RequestManager & $Sidebar & $FolderViews & $SearchPanel & $NavBar & $Folders & $UnreadCounter & $InstalledCSP & $ApplicationTimestamp & $LayoutManager & $RealtimeCommunicationService & $UserMenu & $LayoutControlFactory & $EditOperationStore & $LayoutInfo & $CardInfo & $CardId & $ControlStore & $LocalStorage & $BaseName & $RouteTimestamp & $EnableRouterLogging & $IsMobileSafary & $LogEnabled & $IsIE10 & $LastSearchRequest & $UrlStore & $CurrentEmployee & $RouterNavigation & $OwnerLayout & $ApplicationSettings;
