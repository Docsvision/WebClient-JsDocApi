import { TextControlBaseState } from "@docsvision/webclient/Platform/TextControlBaseImpl";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
/**
 * Содержит публичные свойства класса [TextControlBase]{@link TextControlBase}.
 */
export declare class TextControlBaseParams extends InputBasedControlParams<string> {
}
/**
 * Класс, позволяющий создавать на своей основе контролы для редактирования текстовой информации
 */
export declare abstract class TextControlBase<P extends TextControlBaseParams, S extends TextControlBaseState> extends InputBasedControl<string, P, S> {
    /** В производных классах должен возвращать совместимый контейнер сервисов. */
    protected abstract getServices(): $LayoutInfo & $EditOperationStore;
    /** Использует свойства `this.state.binding` и параметр labelText. */
    protected getBindings(): IBindingResult<string>[];
}
