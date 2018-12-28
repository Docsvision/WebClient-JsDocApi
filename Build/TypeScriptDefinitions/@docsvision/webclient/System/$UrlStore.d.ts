import { IUrlCollection } from "@docsvision/webclient/System/IUrlCollection";
import { UrlResolver } from "@docsvision/webclient/System/UrlResolver";
export interface IUrlStore {
    registerUrlCollection(urlCollection: IUrlCollection): void;
    urlResolver: UrlResolver;
}
export declare type $UrlStore = {
    urlStore: IUrlStore;
};
