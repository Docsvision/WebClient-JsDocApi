import { TextBoxImpl, TextBoxState } from "@docsvision/webclient/Platform/TextBoxImpl";
import { TextControlBase, TextControlBaseParams } from "@docsvision/webclient/Platform/TextControlBase";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
/**
 * Содержит публичные свойства класса [TextBox]{@link TextBox}.
 */
export declare class TextBoxParams extends TextControlBaseParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    services?: $LayoutInfo & $EditOperationStore;
}
/**
 * Вспомогательный контрол для редактирования текстовой информации.
 */
export declare class TextBox extends TextControlBase<TextBoxParams, TextBoxState> {
    /** @internal */
    protected createParams(): TextBoxParams;
    /** @internal */
    protected createImpl(): TextBoxImpl;
    /** @internal */
    protected getServices(): $LayoutInfo & $EditOperationStore;
}
