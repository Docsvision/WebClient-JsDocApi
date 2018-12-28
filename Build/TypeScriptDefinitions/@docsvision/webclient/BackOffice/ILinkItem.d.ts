import { LinkItemState } from "@docsvision/webclient/BackOffice/LinkItemState";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface ILinkItem {
    /** Основная информация о ссылке. */
    data: GenModels.LayoutLinkModel;
    /** Сохранена ли ссылка на сервере, или находится в процессе сохранения. */
    state: LinkItemState;
}
