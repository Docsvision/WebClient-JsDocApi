import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { TabPageImpl, TabPageState } from "@docsvision/webclient/Platform/TabPageImpl";
/**
 * Содержит публичные свойства элемента управления [Страница вкладок]{@link StateButtons}.
 */
export declare class TabPageParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Всплывающая подсказка. */
    tip?: string;
}
/**
 * Класс элемента управления Страница вкладок
 *
 * Добавляет в web-разметку элемент управления для отображения страницы вкладок и её содержимого.
 */
export declare class TabPage extends Panel<TabPageParams, TabPageState> {
    protected createParams(): TabPageParams;
    /** @internal */
    protected createImpl(): TabPageImpl;
}
