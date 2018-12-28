import { IRouteInfo } from "@docsvision/webclient/System/IRouteInfo";
import { RouteParameters } from "@docsvision/webclient/System/RouteParameters";
/** Интерфейс для классов, сопоставляющий url на тип роута. Для регистрации маппера используется метод {@link SammyHelper.addRouteTypeMapper} */
export interface IRouteTypeMapper<T> {
    /**
     * Должно возвращать описание [пути роута для SammyJS](http://sammyjs.org/docs/routes).
     *
     * При реализации можно использовать методы класса {@link RouteHelpers}, например:
     *
     *      // В результате получится #/Folder/:FolderId
     *      hashPattern = RouteHelpers.makeHashPattern('#/Folder/', [FolderRouteParameters.FolderId]);
     *
     */
    readonly hashPattern: string;
    /**
     * При реализации должен анализировать параметры роута и формировать начальный RouteData объект.
     * Допустим, если у нас роут папки, то мы извлекаем из url id папки, проверяем
     * что это корректный id, и возвращаем объект {@link IFolderRouteData} с заполненным `folderId`.
     * @param path Путь текущего роута, включая имя приложения, хэш, и query-параметры.
     * Например: `/DocsvisionWebClient/#/Folder/5bf0fb94-23fa-4212-80c3-c598e9859901?Color=folder-default`
     * @param parameters Объединяют в себе как параметры указанные через двоеточие в hashPattern,
     * так и query-параметры, добавленные через знак вопроса (после #).
     */
    resolve(path: string, parameters: RouteParameters): JQueryDeferred<IRouteInfo<T>>;
    /** Используется в том случае, если мы вызываем SammyHelper.setCurrentRoute для того, чтобы обновить url в браузере. */
    tryGetUrl(route: IRouteInfo<T>): string | undefined;
}
