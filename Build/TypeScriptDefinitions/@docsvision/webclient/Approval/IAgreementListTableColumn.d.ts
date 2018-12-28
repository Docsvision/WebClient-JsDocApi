import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
export interface IAgreementListTableColumn {
    class?: string;
    name: any;
    weight: number;
    calculatedWidth?: string;
    value: (item: GenModels.AgreementListItemModel) => string;
    hidden?: boolean;
    order: number;
}
