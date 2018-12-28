import { EditPopover } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/EditPopover";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { InputBasedControl, InputBasedControlParams } from "@docsvision/webclient/System/InputBasedControl";
import { ICancelableEventArgs } from "@docsvision/webclient/System/ICancelableEventArgs";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import React from "react";
/** Базовый класс состояния {@link InputBasedControl}. */
export interface InputBasedControlState<ModelT> extends BaseControlState, InputBasedControlParams<ModelT> {
    currentValue: ModelT;
    inputText: string;
    inputFocused: boolean;
    validationMessage: string;
    hadValue: boolean;
}
/** @deprecated */
export declare type InputBasedControlImplState<ModelT> = InputBasedControlState<ModelT>;
/** Базовый класс реализации {@link InputBasedControl}. */
export declare abstract class InputBasedControlImpl<ModelT, PropsT extends InputBasedControlParams<ModelT>, StateT extends InputBasedControlImplState<ModelT>> extends BaseControlImpl<PropsT, StateT> {
    editPopoverControl: InputBasedControl<ModelT, any, any>;
    text: HTMLElement;
    /** Edit popover, that showed copy of control in edit-in-place mode */
    editPopover: EditPopover;
    /** Edit popover, where control currently located */
    containingEditPopover: EditPopover;
    input: HTMLElement;
    constructor(props: PropsT, state?: StateT);
    canShowEditDialog(): boolean;
    /**
     * Показывает диалог редактирования по месту.
     *
     * Внимание, в связи с изменениями в React 16, в Web-клиент начиная с версии 10 данный метод асинхронный.
     */
    showEditDialog(): JQueryDeferred<InputBasedControl<ModelT, PropsT, StateT>>;
    hideEditDialog(): void;
    hasValue(): boolean;
    protected onDataChanged(eventArgs: IDataChangedEventArgs): void;
    protected onInPlaceEditOpening(callback?: () => void): JQueryDeferred<any>;
    protected onInPlaceEditOpened(): void;
    protected onInPlaceEditClosinig(sender: any, args: ICancelableEventArgs<any>): void;
    protected onInPlaceEditClosed(): void;
    validate(params: any): IValidationResult;
    protected readonly editAvailable: boolean;
    getTabIndex(): 0 | -1;
    protected attachInput(elem: HTMLElement): void;
    protected getInputElem(): HTMLElement;
    protected attachText(textElem: any): void;
    /**
     * Создает и рендерит диалог редактирования по месту.
     *
     * Внимание, в связи с изменениями в React 16, в Web-клиент начиная с версии 10 данный метод асинхронный.
     */
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<InputBasedControl<ModelT, PropsT, StateT>>;
    protected onEditPopoverShowed(control: InputBasedControlImpl<any, PropsT, StateT>): void;
    componentWillUnmount(): void;
    componentWillMount(): void;
    protected getCssClass(): string;
    protected onInputFocus(event: React.FocusEvent<any>): void;
    protected onInputBlur(event: React.FocusEvent<any>): void;
    protected onPlaceholderClick(event: any): void;
    protected onValueClick(event: any): void;
    protected renderValidationMessage(): JSX.Element;
    protected getInputTitle(): string;
    protected renderInputWithPlaceholder(): React.ReactNode;
    protected updateValidationMessage(): void;
    protected editModeRender(): JSX.Element;
    protected getValueTitle(): string;
    protected renderWithText(): JSX.Element;
    protected editInPlaceModeRender(): JSX.Element;
    protected viewModeRender(): JSX.Element;
    renderControl(): JSX.Element;
    protected abstract getTextValue(): string;
    /**
     * При переопределении в производных классах должен рендерить контрол в соответствующий элемент.
     *
     * Например:
     *
     *      protected renderInto(props: NumberParams, container: HTMLElement): void {
     *          ReactDOM.render(<NumberControl {...props } key={props.name} />, container);
     *      }
     *
     * Внимание! В Web-клиенте версии 9 данный метод возвращал экземпляр контрола.
     * В версии 10 он не возвращает значение, т.к. в React 16 изменилась логик метода ReactDOM.render.
     *
     * @param props Параметры контрола
     * @param container DOM-элемент, куда следует отрендерить контрол.
     */
    protected abstract renderInto(props: PropsT, container: HTMLElement): void;
    protected getDefaultValue(): ModelT;
    protected onInputChange(event: any): void;
    protected readonly editPopoverControlImpl: InputBasedControlImpl<ModelT, any, any>;
    setValue(value: ModelT, redraw: boolean): void;
    protected setValueInternal(value: ModelT): void;
    getValue(): ModelT;
    /** Тоже что и {@link InputBasedControlParams.value} */
    value: ModelT;
    protected getEditAvailable(): boolean;
    protected initEditPopover(popover: EditPopover): void;
    protected renderEditPopover(popover: EditPopover): JQueryDeferred<InputBasedControl<ModelT, PropsT, StateT>>;
    protected renderPlaceholder(): JSX.Element;
    protected onInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected renderInput(): React.ReactNode;
    protected readonly editInPlaceAvailable: boolean;
    defaultValue: ModelT;
}
