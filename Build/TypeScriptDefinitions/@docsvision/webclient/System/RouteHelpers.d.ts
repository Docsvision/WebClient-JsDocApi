import { FieldSpec } from "@docsvision/webclient/System/GetFieldName";
export declare class RouteHelpers {
    /**
     * Формирует хэш-паттерн для роутера.
     * @param path Статическая часть пути (без параметров)
     * @param parameters Имена параметров
     *
     * Пример использования:
     *
     *      let hashPattern = RouteHelpers.makeHashPattern('#/Folder/', ["FolderId"]);
     */
    static makeHashPattern(path: string, parameters: string[]): string;
    /**
     * Формирует URL на основе хэш-паттерна и значений параметров.
     *
     * Например, при передаче `#/CardView/:CardID` и `{ name: "CardID", value: "db7ed65b-f088-4f3a-9846-cd7f9a993d6a"}` будет возвращено
     * `#/CardView/db7ed65b-f088-4f3a-9846-cd7f9a993d6a`.
     */
    static makeUrlFromHashPattern(hashPattern: string, parameters: {
        name: string;
        value: string;
    }[], queryParameters?: {
        name: string;
        value: string;
    }[]): string;
    /** Одно из значений не определено. */
    static someIsUndefined(...args: any[]): boolean;
    /** Присваивает свойство объекта target, если оно не задано. */
    static assignIfUndefined<SourceT, TargetT>(target: TargetT, map?: {
        value: FieldSpec<SourceT, any>;
        field: FieldSpec<TargetT, any>;
    }[]): void;
    /** Формирует идентификатор роута на основе переданных значений. */
    static makeIdentity(...values: any[]): string;
}
