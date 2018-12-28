import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { $Router } from "@docsvision/webclient/System/$Router";
export declare class CardShowRouteTypeMapper implements IRouteTypeMapper<{}> {
    private services;
    constructor(services: $Router);
    hashPattern: string;
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<{}>>;
    tryGetUrl(route: IRouteInfo<{}>): string | undefined;
}
