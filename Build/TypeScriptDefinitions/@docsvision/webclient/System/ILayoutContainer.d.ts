import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ILayout } from "@docsvision/webclient/System/$Layout";
export interface ILayoutContainer {
    destroy(): JQueryDeferred<any>;
    initialize(deferred: JQueryDeferred<ILayout>): void;
    /**
     * Возвращает разметку карточки.
     */
    layout: ILayout;
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
}
