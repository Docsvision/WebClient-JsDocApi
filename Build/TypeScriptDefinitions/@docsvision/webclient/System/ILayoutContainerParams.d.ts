import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
/** Параметры для создания экземпляра класса {@link LayoutContainer}. */
export interface ILayoutContainerParams {
    /** Идентификатор DOM-элемента, в котором необходимо расположить разметку. Вместо этого параметра можно передать сам элемент в {@link rootElement}. */
    rootElementId?: string;
    /** DOM-элемент, в котором необходимо расположить разметку. Вместо этого параметра можно передать id элемента в {@link rootElementId}. */
    rootElement?: HTMLElement;
    /** Уникальное имя разметки. */
    name: string;
    /** Название родительской разметки. */
    owner?: string;
    /** Список имён дочерних компонентов. */
    children: string[];
    /** Тип разметки (служит для идентификации файла разметки на сервере). */
    positionName: string;
    /** Вызывается перед выгрузкой разметки. */
    unmountCallback: (positionName: string) => void;
    /** Модель разметки, содержащая описание контролов. */
    layoutCardModel: GenModels.LayoutCardViewModel;
    services?: ServiceContainer;
}
