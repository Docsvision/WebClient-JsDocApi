import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
import { IExistingCardRouteData } from "@docsvision/webclient/Platform/IExistingCardRouteData";
export declare class CardViewRouteTypeMapper implements IRouteTypeMapper<IExistingCardRouteData> {
    hashPattern: string;
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<IExistingCardRouteData>>;
    tryGetUrl(route: IRouteInfo<IExistingCardRouteData>): string | undefined;
}
