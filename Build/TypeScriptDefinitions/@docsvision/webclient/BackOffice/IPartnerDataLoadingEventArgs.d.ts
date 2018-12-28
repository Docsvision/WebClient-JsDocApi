import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export declare enum PartnerQueryTypes {
    QuickSearch = 0,
    LoadTree = 1,
    DirectorySearch = 2
}
export declare class IPartnerDataLoadingEventArgs {
    /** Из какого места контрола производится загрузка данных. */
    queryType: PartnerQueryTypes;
    /**
     * Запрашиваемая информация, включая текущий фильтр.
     *
     * В зависимости от значения {@link queryType} объект может быть представлен одним из производных интерфейсов:
     * 1) при `PartnerQueryTypes.QuickSearch` объект типа {@link WebClient.GenModels.PartnerQuickSearchQuery}
     * 2) при `PartnerQueryTypes.DirectorySearch` объект типа {@link WebClient.GenModels.PartnerQuickSearchQuery}
     * 3) при `PartnerQueryTypes.LoadTree` объект типа {@link WebClient.GenModels.PartnerLoadQuery}
     */
    query: GenModels.PartnerLoadQuery | GenModels.PartnerQuickSearchQuery;
    /**
     * Результат выполнения запроса.
     *
     * В зависимости от значения {@link queryType} объект может быть представлен одним из производных интерфейсов:
     * 1) при `PartnerQueryTypes.QuickSearch` объект типа {@link WebClient.GenModels.PartnerQuickSearchResponse}
     * 2) при `PartnerQueryTypes.DirectorySearch` объект типа {@link WebClient.GenModels.PartnerSearchResponse}
     * 3) при `PartnerQueryTypes.LoadTree` объект типа {@link WebClient.GenModels.PartnerTreeLoadResponse}
     */
    result?: GenModels.PartnerSearchResponse | GenModels.PartnerTreeLoadResponse;
}
