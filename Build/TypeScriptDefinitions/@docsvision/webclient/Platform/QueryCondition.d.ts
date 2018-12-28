import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { Panel } from "@docsvision/webclient/Platform/Panel";
import { IQueryConditionControl } from "@docsvision/webclient/Platform/IQueryConditionControl";
import { QueryConditionImpl, QueryConditionState } from "@docsvision/webclient/Platform/QueryConditionImpl";
import { $DeviceType } from "@docsvision/webclient/StandardServices";
import { BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
/**
 * Содержит публичные свойства элемента управления [QueryCondition]{@link QueryCondition}.
 */
export declare class QueryConditionParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Значение по-умолчанию настроенное для прамаметра. */
    parameterDefaultValue?: any;
    /** Текст, определяющий тип условия (содержит, больше, меньше, равно...). Используется для отображения пользователю. */
    conditionText?: string;
    /** Используется контрол внутри {@link QueryConditionsTable} или нет. В табличном режиме используются теги `<tr>` и `<td>`. */
    tableMode?: boolean;
    /** Включен ли параметр в поиск или нет. */
    parameterEnabled?: boolean;
    parameterName: string;
    parameterAlias: string;
    parameterValue: string;
    queryId?: string;
    fieldType?: GenModels.FieldType;
    fieldSubType?: GenModels.FieldSubtype;
    services?: $DeviceType;
}
/**
 * Класс элемента управления для отображения параметров поискового запроса и взаимодействия с контролом ввода значения поискового запроса.
 */
export declare class QueryCondition extends Panel<QueryConditionParams, QueryConditionState> implements IQueryConditionControl {
    /** Служит для отличения контрола от других элементов управления. */
    readonly isQueryCondition: boolean;
    /** @internal */
    init(): void;
    /** @internal */
    componentDidUpdate(): void;
    /** @internal */
    protected updateControlPlaceholder(): void;
    /** Введеное пользователем значение параметра. */
    /** Устанавливает значение поискового параметра. */
    queryParameterValue: any;
    /** Имя параметра, которое будет передано в поисковый запрос. */
    readonly queryParameterAlias: string;
    /** Содержит false если пользователь исключил условие из поиска. */
    queryParameterEnabled: boolean;
    /** Тип данных поискового параметра. */
    readonly fieldType: GenModels.FieldType;
    readonly fieldSubType: GenModels.FieldSubtype;
    /** Возвращает значение дочернего контрола, служащего для ввода значения фильтра. */
    contorlValue: any;
    /** Возвращает дочерний контрол, служащий для ввода значения фильтра. */
    protected getValueControl(): InputBasedControl<any, InputBasedControlParams<any>, InputBasedControlState<any>>;
    /** @internal */
    protected createParams(): QueryConditionParams;
    /** @internal */
    protected createImpl(): QueryConditionImpl;
}
