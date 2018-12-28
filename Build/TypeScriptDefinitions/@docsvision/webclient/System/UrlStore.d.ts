import { IUrlCollection } from "@docsvision/webclient/System/IUrlCollection";
import { IUrlMap } from "@docsvision/webclient/System/IUrlMap";
import { UrlResolver } from "@docsvision/webclient/System/UrlResolver";
import { IUrlStore } from "@docsvision/webclient/System/$UrlStore";
/** @deprecated */
export declare class UrlStore implements IUrlStore {
    protected urls: IUrlMap;
    protected urlResolverField: UrlResolver;
    constructor();
    registerUrlCollection(urlCollection: IUrlCollection): void;
    readonly urlResolver: UrlResolver;
}
export declare var urls: IUrlMap;
export declare var urlStore: IUrlStore;
export declare function setupUrlStore(urlStorep: IUrlStore): void;
