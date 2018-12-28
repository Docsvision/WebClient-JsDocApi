/** @deprecated */
export declare class UrlResolver {
    resolveUrlPart(urlPart: string): string;
    resolveUrl(action: string, controller: string, isApi?: boolean, relativePath?: boolean): string;
    resolveApiUrl(action: string, controller: string, relativePath?: boolean): string;
}
