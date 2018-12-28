import { DisplayInitiatorImpl } from '@docsvision/webclient/BackOffice/DisplayInitiatorImpl';
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams, BaseControlState } from '@docsvision/webclient/System/BaseControl';
import { $LayoutInfo } from '@docsvision/webclient/System/LayoutServices';
import { IBindingResult } from '@docsvision/webclient/System/IBindingResult';
/**
 * Содержит публичные свойства элемента управления [Отображение инициатора]{@link DisplayInitiator}.
 */
export declare class DisplayInitiatorParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Формат отображения во всплывающей подсказке информации о выбранном сотруднике. */
    tipMode?: GenModels.PartnerTipModeItems;
    /** Текст всплывающей подсказки */
    tip?: string;
    /** Значение элемента управления. */
    value?: GenModels.EmployeeDataModel;
    /**
     * Текст метки.
     *
     * Метка - текст отображаемый рядом (слева или вверху) с элементом управления.
     */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /**
     * Флаг, определяющий, должно ли переноситься на следующую строку тектовое содержимое, когда оно не помещается в одну строку:
     * true - переносить,
     * false - не переносить.
     */
    wrapLongValueUnderLabel?: boolean;
    /** Сервисы. */
    services?: $LayoutInfo;
}
/** @internal */
export interface DisplayInitiatorState extends DisplayInitiatorParams, BaseControlState {
}
/**
 * Класс элемента управления Отображение инициатора.
 */
export declare class DisplayInitiator extends BaseControl<DisplayInitiatorParams, DisplayInitiatorState> {
    protected createParams(): DisplayInitiatorParams;
    private readonly DisplayInitiatorImpl;
    protected createImpl(): DisplayInitiatorImpl;
    private displayInitiatorBinding;
    protected getBindings(): IBindingResult<any>[];
}
