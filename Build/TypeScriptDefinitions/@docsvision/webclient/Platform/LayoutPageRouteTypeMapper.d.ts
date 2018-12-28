import { ILayoutPageRouteData } from "@docsvision/webclient/Platform/ILayoutPageRouteData";
import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
/** @internal */
export declare class LayoutPageRouteTypeMapper implements IRouteTypeMapper<ILayoutPageRouteData> {
    hashPattern: string;
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<ILayoutPageRouteData>>;
    tryGetUrl(route: IRouteInfo<ILayoutPageRouteData>): string | undefined;
}
