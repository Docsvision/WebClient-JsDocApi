import { IExtension } from "@docsvision/webclient/System/IExtension";
import { ILocalizationsMap } from "@docsvision/webclient/System/ILocalizationsMap";
import { IUrlMap } from "@docsvision/webclient/System/IUrlMap";
import { UrlResolver } from "@docsvision/webclient/System/UrlResolver";
/** Базовый класс клиентского расширения Web-клиента. */
export declare abstract class BasicExtension implements IExtension {
    /** Вызывается при регистрации расширения. */
    initialize(): void;
    /** При переопределении в производных классах служит для добавления адресов в {@link urls} */
    getUrls(urlResolver: UrlResolver): IUrlMap;
    /** При переопределении в производных классах служит для добавления локализаций в {@link resources} */
    getLocalizations(): ILocalizationsMap;
}
