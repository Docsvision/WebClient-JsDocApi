import { ISavingButtonClickEventArgs } from "@docsvision/webclient/Platform/ISavingButtonClickEventArgs";
import { SavingButtonsImpl, SavingButtonsState } from "@docsvision/webclient/Platform/SavingButtonsImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
/**
 * Содержит публичные свойства элемента управления [Кнопки сохранения]{@link SavingButtons}.
 */
export declare class SavingButtonsParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Текст кнопки ОК */
    okButtonText: string;
    /** Текст кнопки Отмена */
    cancelButtonText: string;
    /** Выключена ли кнопка ОК */
    okButtonDisabled: boolean;
    /** Выключена ли кнопка Отмена */
    cancelButtonDisabled: boolean;
    /** Событие, возникающее перед нажатием на кнопку ОК или кнопку Отмена */
    clicking?: CancelableApiEvent<ISavingButtonClickEventArgs>;
    services?: $Layout;
}
/**
 * Класс элемента управления Кнопки сохранения
 *
 * Добавляет в web-разметку элемент управления для сохранения изменений карточки.
 */
export declare class SavingButtons extends BaseControl<SavingButtonsParams, SavingButtonsState> {
    constructor(props: SavingButtonsParams);
    /** @internal */
    protected createParams(): SavingButtonsParams;
    /** @internal */
    componentDidMount(): void;
    /** @internal */
    componentWillUnmount(): void;
    private readonly savingButtonsImpl;
    /** Выполнить сохранение */
    performSave(): JQueryDeferred<any>;
    /** Выполнить отмену */
    performCancel(): void;
    /** @internal */
    protected onCardSaving(): void;
    /** @internal */
    protected onCardSavedOrFailed(): void;
    /** @internal */
    protected createImpl(): SavingButtonsImpl;
}
