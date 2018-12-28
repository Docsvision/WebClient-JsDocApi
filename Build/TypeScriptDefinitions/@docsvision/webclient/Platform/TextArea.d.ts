import { TextAreaImpl, TextAreaState } from "@docsvision/webclient/Platform/TextAreaImpl";
import { TextControlBase, TextControlBaseParams } from "@docsvision/webclient/Platform/TextControlBase";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства элемента управления [Текст]{@link TextArea}.
 */
export declare class TextAreaParams extends TextControlBaseParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    services?: $LayoutInfo & $EditOperationStore;
}
/**
 * Класс элемента управления Текст
 *
 * Добавляет в web-разметку элемент управления для хранения текстовой информации.
 */
export declare class TextArea extends TextControlBase<TextAreaParams, TextAreaState> {
    protected createParams(): TextAreaParams;
    /** @internal */
    protected createImpl(): TextAreaImpl;
    /** @internal */
    protected getServices(): $LayoutInfo & $EditOperationStore;
}
