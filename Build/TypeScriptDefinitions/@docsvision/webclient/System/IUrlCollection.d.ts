import { IUrlMap } from "@docsvision/webclient/System/IUrlMap";
import { UrlResolver } from "@docsvision/webclient/System/UrlResolver";
/** @deprecated */
export interface IUrlCollection {
    getUrls(urlResolver: UrlResolver): IUrlMap;
}
