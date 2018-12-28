import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { TabPageInfo } from "@docsvision/webclient/Platform/TabPageInfo";
import { IActiveTabChangeEventArgs } from "@docsvision/webclient/Platform/IActiveTabChangeEventArgs";
import { TabImpl, TabState } from "@docsvision/webclient/Platform/TabImpl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardId } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Вкладки]{@link Tab}.
 */
export declare class TabParams extends PanelParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Должны ли быть вкладки основными вкладками в мобильной вёрстке. */
    mainTabOnMobile: boolean;
    /** Индекс вкладки по умолчанию. */
    defaultPageIndex: number;
    /** Страницы вкладок. */
    tabPages: TabPageInfo[];
    /** Активная вкладка. */
    activeTabPage: TabPageInfo;
    /** Событие, возникающее после переключения активной вкладки. */
    activeTabChange: BasicApiEvent<IActiveTabChangeEventArgs>;
    /** Событие, возникающее после переключения активной вкладки. */
    activeTabChanging: CancelableApiEvent<IActiveTabChangeEventArgs>;
    services?: $LayoutCardController & $Layout & $CardId;
}
/**
 * Класс элемента управления Вкладки
 *
 * Добавляет в web-разметку элемент управления для отображения вкладок.
 */
export declare class Tab extends Panel<TabParams, TabState> {
    static activeTabs: {
        [key: string]: number;
    };
    /** @internal */
    protected createParams(): TabParams;
    private readonly tabImpl;
    /** @internal */
    protected childrenHandler: any[];
    /** @internal */
    activeTabPage: any;
    /**
     * Установка заголовка указанной вкладки
     * @param tab Вкладка
     * @param header Заголовок
     */
    setTabPageHeader(tab: TabPageInfo, header: string): void;
    /**
     * Загрузить содержимое указанной вкладки
     * @param tab Вкладка
     */
    loadTabPage(tab: TabPageInfo): JQueryDeferred<TabPageInfo>;
    /**
     * Открыть указанную вкладку
     * @param tabNumber Номер вкладки
     */
    openTabPage(tabNumber: number): JQueryDeferred<any>;
    /** @internal */
    protected createImpl(): TabImpl;
}
