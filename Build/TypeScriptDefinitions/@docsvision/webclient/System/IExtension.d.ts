import { ILocalizationsMap } from "@docsvision/webclient/System/ILocalizationsMap";
import { IUrlCollection } from "@docsvision/webclient/System/IUrlCollection";
/** Интерфейс расширения Web-клиента. */
export interface IExtension extends IUrlCollection {
    /** Вызывается при регистрации расширения. */
    initialize(): any;
    /** Служит для добавления локализаций в {@link resources} */
    getLocalizations(): ILocalizationsMap;
}
