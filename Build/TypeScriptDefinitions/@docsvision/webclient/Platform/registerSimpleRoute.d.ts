import { ISimpleRouteData } from "@docsvision/webclient/Platform/ISimpleRouteData";
import { RequestMethods } from "@docsvision/webclient/System/IRequestInfo";
import { RouteParameters } from "@docsvision/webclient/System/RouteParameters";
export interface SimpleRouteOptions {
    /**
     * Шаблон url-адреса роута.
     * Например: #/CardView/:CardId
     * Более подробную информацию см. в [документации к sammyjs](http://sammyjs.org/docs/routes).
     */
    hashPattern: string;
    /**
     * Уникальная строка, идентифицирующая данный роут.
     * Строка не должна пересекаться с уже сующествующими роутами ЛК (см. {@see StandardRoutes}).
     */
    routeType: string;
    /** GET или POST запрос необходим отправить к серверу для получения данных роута. */
    requestMethod?: RequestMethods;
    /** Функция, которая принимает на вход параметры из url-адреса, и возвращает url адрес к которому следует обратиться для загрузки данных роута. */
    requestUrlResolver?: (parameters: RouteParameters) => string;
    /** Функция, которая принимает на вход параметры из url-адреса, и возвращает объект служащий телом для POST-запроса при загрузке данных роута. */
    requestPayloadResolver?: (parameters: RouteParameters) => any;
    /** Адрес по которому необходимо загрузить данные роута. Если адрес зависит от параметров, то используйте {@see requestUrlResolver} */
    requestUrl?: string;
    /** Функция, осуществяющая отображение содержимого роута в окне браузера. Если она не задана, то ответ сервера записывается как основное содержимое. */
    customMount?: (data: ISimpleRouteData) => JQueryDeferred<any>;
}
/** Регистрирует простой обработчик роута, способный обработать параметры из строки адреса, загрузить данные с сервера и некоторым образом их отобразить. */
export declare function registerSimpleRoute(options: SimpleRouteOptions): void;
