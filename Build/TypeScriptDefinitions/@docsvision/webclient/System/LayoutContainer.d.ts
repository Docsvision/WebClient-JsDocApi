import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Layout } from "@docsvision/webclient/System/Layout";
import { ILayoutContainer } from "@docsvision/webclient/System/ILayoutContainer";
import { ILayoutContainerParams } from "@docsvision/webclient/System/ILayoutContainerParams";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
/** Сервисный класс, обеспечивающий функционирование разметки. */
export declare class LayoutContainer implements ILayoutContainer {
    private readonly layoutContainerParams;
    private layoutResolver;
    private initialized;
    layoutServiceContainer: ServiceContainer;
    /**
     * Возвращает разметку карточки.
     */
    readonly layout: Layout;
    /**
     * @deprecated Используйте свойство positionName.
     */
    readonly PositionName: string;
    /**
     * Возвращает наименование позиции разметки
     */
    readonly positionName: string;
    /**
     * Возвращает наименование разметки
     */
    readonly name: string;
    /**
     * Возвращает наименование родительской разметки
     */
    readonly owner: string;
    /**
     * Возвращает наименования дочерних разметок
     */
    /**
    * Устанавливает наименования дочерних разметок
    */
    children: string[];
    /**
     * Возвращает идентификатор корневого элемента, в котором расположена разметка.
     */
    readonly rootElementId: string;
    /**
     * Возвращает корневой элемент, в котором расположена разметка.
     */
    readonly rootElement: HTMLElement;
    /** Модель разметки, поступившая с сервера Web-клиента. */
    readonly layoutCardModel: GenModels.LayoutCardViewModel;
    constructor(layoutContainerParams: ILayoutContainerParams);
    /**
     * Уничтожение разметки.
     */
    destroy(): JQueryDeferred<any>;
    /**
     * Инициализация разметки.
     */
    initialize(deferred: JQueryDeferred<Layout>): Promise<void>;
    /** @internal */
    protected mapLayout(layoutResolver: () => Layout): void;
    /** @internal */
    protected reactJsUnmount(): void;
    /** @internal */
    protected renderLayout(deferred: JQueryDeferred<Layout>): void;
    /** @internal */
    protected prepareModel(deferred: JQueryDeferred<Layout>): void;
    /** Обрабатывает параметры с суфиксом -res в имени, добавляя значение ресурса в соответствующий параметр. */
    protected processResParameters(layoutModel: GenModels.LayoutModel): void;
}
