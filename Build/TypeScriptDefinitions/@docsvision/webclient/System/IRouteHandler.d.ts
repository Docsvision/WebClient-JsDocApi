import { RouteHandleResult } from "@docsvision/webclient/System/RouteHandleResult";
import { RouteType } from "@docsvision/webclient/System/RouteType";
/**
 * Обработчик роута, который собирает и загружает данные роута, а также отображает содержимое в UI.
 *
 * При реализации его методов следует учитывать следующие ньюансы:
 *
 * 1. Прежде читать значения каких-либо свойств в RouteData, необходимо проверить, что они там есть.
 * Если их нет (и они критичны для работы хандлера), то следует вернуть RouteHandleResults.MissingRequiredData. Например:
 *
 *         if (RouteHelpers.someIsUndefined(routeData.gridModel)) {
 *             return RouteHandleResults.MissingRequiredData;
 *         }
 *
 * 2. Прежде чем вычислять и записывать какие-то значения в RouteData, необходимо проверить, нет ли их там. Если они уже есть, то нужно ничего не делать.
 *    Это связано с тем, что хандлер может вызываться многократно, и он не должен выполнять работу, которая уже выполнена.
 *    Например, у нас уже загружено содержимое грида папки, и мы хотим только поменять заголовок.
 *    В этом случае запустятся все хандлеры, но загружать данные папки нет необходимости.
 *    Если нам понадобится обновить содержимое грида, то следует очистить соответствующее свойство в информации о роуте и вызвать setCurrentRoute.
 *    Тогда соответствующий хандлер увидит, что свойство пустое и заново загрузит эти данные.
 * 3. Хандлер должен выполнять только одну, как можно меньшую задачу.
 *    Должно быть легко сформулировать эту задачу в двух словах, она должна быть понятна из названия.
 *
 * Регистрируются хандлеры после объявления класса следующим образом:
 *
 *       export class MyRouteHandler implements IRouteHandler<IFolderRouteData> {
 *            ...
 *       }
 *
 *       SammyHelper.RouterInitialization.subscribe((sammy: SammyHelper) => {
 *           sammy.addHandler(StandardRoutes.AllRoutes, new MyRouteHandler());
 *       });
 *
 * @param T Тип данных роута. Например, {@link IFolderRouteData}.
 */
export interface IRouteHandler<T> {
    /** Имя хандлера для отладочных целей. */
    name: string;
    /**
     * Подготавливает информацию, которая необходима для загрузки основной информации роута.
     * Например, при открытии папки в этом обработчике собирается информация о представлении, фильтре, сортировке и т.д.
     */
    prepareRouteDataLoad?(routeData: Partial<T>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    /** Загружает основную информацию роута. */
    loadRouteData?(routeData: Partial<T>, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    /** Делает предварительную обработку загруженной информации, перед тем как ее отображать. */
    prepareRouteMount?(routeData: T, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    /** Отображает содержимое роута в UI. */
    mountRoute?(data: T, routeType: RouteType): JQueryDeferred<RouteHandleResult>;
    /** Очищает UI от содержимого роута, освобождает все занятые ресурсы (таймеры, подписки на события и т.д.). */
    unmountRoute?(data: T, routeType: RouteType): JQueryDeferred<{}>;
}
