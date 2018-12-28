import { BasicExtension } from "@docsvision/webclient/System/BasicExtension";
import { ILocalizationsMap } from "@docsvision/webclient/System/ILocalizationsMap";
import { IUrlMap } from "@docsvision/webclient/System/IUrlMap";
import { UrlResolver } from "@docsvision/webclient/System/UrlResolver";
/** @internal */
export declare class PlatformExtension extends BasicExtension {
    constructor();
    initialize(): void;
    protected addLegacyCardTypes(): void;
    protected getCaption(name: string): string;
    getUrls(urlResolver: UrlResolver): IUrlMap;
    getLocalizations(): ILocalizationsMap;
}
