import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
/** См. {@link LayoutManager.showLayout}. */
export interface ShowLayoutParams {
    /** HTML-элемент, в котором необходимо отобразить разметку, либо его идентификатор. */
    root: HTMLElement | string;
    /** Уникальное наименование данного экземпляра разметки. */
    name: string;
    /** Описание разметки и ее контролов. */
    model: GenModels.LayoutViewModel;
    /** Родительская разметка. */
    owner?: string;
    /** Тип разметки (идентификатор разметки на сервере). */
    layoutPosition?: string;
    services?: ServiceContainer;
}
