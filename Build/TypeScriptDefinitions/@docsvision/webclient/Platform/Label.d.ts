import { LabelImpl, LabelState } from "@docsvision/webclient/Platform/LabelImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
/**
 * Содержит публичные свойства элемента управления [Метка]{@link Label}.
 */
export declare class LabelParams extends BaseControlParams {
    /** Текст метки. */
    text: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
}
/**
 * Класс элемента управления Метка.
 *
 * Добавляет в web-разметку текстовый не редактируемый элемент.
 */
export declare class Label extends BaseControl<LabelParams, LabelState> {
    /** @notest @internal */
    protected createParams(): LabelParams;
    /** @notest @internal  */
    protected createImpl(): LabelImpl;
}
