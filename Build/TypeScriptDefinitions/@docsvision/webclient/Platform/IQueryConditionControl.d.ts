import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
/** Интерфейс, через который поисковая форма взаимодействует с контролами поисковых параметров. Реализуется {@link QueryCondition} */
export interface IQueryConditionControl {
    /** Должен возвращать true. */
    readonly isQueryCondition: boolean;
    /** Веденое пользователем значение параметра. */
    queryParameterValue: string;
    /** Имя параметра, которое будет передано в поисковый запрос. */
    readonly queryParameterAlias: string;
    /** Содержит false если ползователь исключил условие из поиска. */
    queryParameterEnabled: boolean;
    readonly fieldType: GenModels.FieldType;
    readonly fieldSubType: GenModels.FieldSubtype;
    /** Полное значение контрола, содержащее отображаемое имя и дополнительные сведения. */
    contorlValue: any;
}
