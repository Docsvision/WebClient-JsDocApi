import { ICustomHtmlPageRouteData } from "@docsvision/webclient/Platform/ICustomHtmlPageRouteData";
import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
/** @internal */
export declare class CustomHtmlPageRouteTypeMapper implements IRouteTypeMapper<ICustomHtmlPageRouteData> {
    hashPattern: string;
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<ICustomHtmlPageRouteData>>;
    tryGetUrl(route: IRouteInfo<ICustomHtmlPageRouteData>): string | undefined;
}
