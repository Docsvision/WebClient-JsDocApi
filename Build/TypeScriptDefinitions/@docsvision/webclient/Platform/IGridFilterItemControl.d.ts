import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** Интерфейс, через который поисковая форма взаимодействует с контролами фильтров представления. Реализуется {@link GridFilterItem} */
export interface IGridFilterItemControl {
    /** Должен возвращать true. */
    readonly isGridFilterItem: boolean;
    /** Веденое пользователем значение параметра. */
    filterItemValues: string[];
    /** Имя столбца, которое будет передано в поисковый запрос. */
    readonly columnName: string;
    /** Содержит false если ползователь исключил условие из поиска. */
    filterItemEnabled: boolean;
    readonly columnType: GenModels.ColumnType;
    /** Полное значение контрола, содержащее отображаемое имя и дополнительные сведения. */
    contorlValue: any;
    /** В свернутом состоянии элемент управления для ввода значения не отображается. */
    filterItemExpanded: boolean;
}
