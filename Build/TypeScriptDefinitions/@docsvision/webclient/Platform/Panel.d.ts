import { PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { BaseControl, BaseControlParams, BaseControlState, LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { IBindingsWriteRequest } from "@docsvision/webclient/System/IBindingsWriteRequest";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
/**
 * Содержит публичные свойства элемента управления [Panel]{@link Panel}.
 */
export declare class PanelParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Ширина панели в процентах */
    width?: number;
    /** Минимальная ширина панели в пикселях */
    minWidth?: number;
    /** Порядок панели */
    order?: number;
    /** Дочерние контролы */
    childControls?: LayoutControl[];
}
/**
 * Базовый  класс для элементов управления, содержащих дочерние элементы управления.
 */
export declare abstract class Panel<P extends PanelParams, S extends PanelState> extends BaseControl<P, S> {
    constructor(props: P);
    /**
     * Позволяет проверить, является ли контрол панелью
     */
    isPanel(): boolean;
    /** @internal */
    protected childrenHandler: any;
    private readonly childControls;
    /**
     * Регистрирует контрол, так что он становится доступен в {@link PanelParams.childControls}.
     * Автоматически вызывается дочерними контролами.
     */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** Выполняет операцию, обратную {@link registerChild}. */
    protected unregisterChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    init(): void;
    /**
     * Подготавливает собственные значения и значения всех дочерних контролов для отправки на сервер.
     * Метод вызывает {@link getBindings} для получения значений.
     * @param withChildren Включать в результат значения дочерних контролов или нет.
     */
    getBindingsWriteRequests(withChildren?: boolean): IBindingsWriteRequest[];
    /**
     * Проверяет корректность значения элемента управления.
     *
     * К примеру, если у элемента управления с флагом "обязательный" отсутствует значение,
     * валидация не будет пройдена (см. {@link InputBasedControl}). При этом можно показать предупреждающее сообщение.
     * @param params Параметры выполнения валидации. Например, показывать ли сообщение о неудаче в UI или нет.
     */
    validate(params: any): IValidationResult[];
}
