import { IFolderRouteData } from "@docsvision/webclient/Platform/IFolderRouteData";
import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { IRouteTypeMapper } from "@docsvision/webclient/System/IRouteTypeMapper";
/** @internal */
export declare class FolderRouteTypeMapper implements IRouteTypeMapper<IFolderRouteData> {
    static SearchResultsId: string;
    static RecentCardsId: string;
    hashPattern: string;
    resolve(path: string, parameters: {
        [id: string]: string;
    }): JQueryDeferred<IRouteInfo<IFolderRouteData>>;
    tryGetUrl(route: IRouteInfo<IFolderRouteData>): string | undefined;
}
