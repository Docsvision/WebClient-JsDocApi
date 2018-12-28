import { INumberInfo } from "@docsvision/webclient/BackOffice/INumberInfo";
import { NumeratorImpl, NumeratorState } from "@docsvision/webclient/BackOffice/NumeratorImpl";
import { $LayoutDocumentController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Нумератор]{@link Numerator}.
 */
export declare class NumeratorParams extends InputBasedControlParams<INumberInfo> {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Правило генерации номера */
    generationRule: string;
    /** Разрешён ли ручной ввод */
    allowManualEdit: boolean;
    services?: $LayoutDocumentController & $EditOperationStore & $Layout & $LayoutInfo;
    /** Событие, возникающее перед началом генерации нового номера. */
    generating?: CancelableApiEvent<void>;
    /** Событие, возникающее после начала генерации нового номера. */
    generated?: BasicApiEvent<boolean>;
}
/**
 * Класс элемента управления Нумератор.
 */
export declare class Numerator extends InputBasedControl<INumberInfo, NumeratorParams, NumeratorState> {
    /** @internal */
    protected createParams(): NumeratorParams;
    private readonly numeratorImpl;
    /** @internal */
    protected getServices(): $LayoutDocumentController & $EditOperationStore & $Layout & $LayoutInfo;
    private numeratorBinding;
    /** Set the name of the current value of the control */
    setNumberText(num: string): void;
    /**
     * Send request to the server to generate new number, with sepcified rule.
     * With default parameters values equal to press generate button.
     * @param saveToTheCard Should be new number saved as the current card number or not.
     * @param ruleId Generation rule id.
     * @param saveCardBefore Should control save the card, before generate number.
     *        Saving a card required, because card fields can be used in number generation rule.
     */
    generateNewNumber(saveToTheCard?: boolean, saveCardBefore?: boolean): JQueryDeferred<INumberInfo>;
    /**
     * Clear number value
     */
    clearNumber(): JQueryDeferred<any>;
    /** @internal */
    protected getBindings(): IBindingResult<any>[];
    /** @internal */
    protected createImpl(): NumeratorImpl;
}
