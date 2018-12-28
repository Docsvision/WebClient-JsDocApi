import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ComboBoxTitle } from "@docsvision/webclient/Helpers/ComboBox/ComboBoxTitle";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { Dropdown, DropdownParams } from "@docsvision/webclient/Platform/Dropdown";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { CancelableEventArgs } from "@docsvision/webclient/System/CancelableEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import React from "react";
/** @internal */
export interface DropdownState extends DropdownParams, InputBasedControlState<string> {
    binding: IBindingResult<string>;
}
/** @internal */
export declare type DropdownImplState = DropdownState;
/** @internal */
export declare class DropdownImpl extends InputBasedControlImpl<string, DropdownParams, DropdownState> {
    /**
     * Корневой узел дропдауна
     */
    protected el: HTMLElement;
    /**
     * Сфокусированный элемент
     */
    protected focusedElement: GenModels.BindingMetadata;
    /**
     * Заголовок комбобокса
     */
    protected comboboxTitle: ComboBoxTitle;
    /**
     * Предыдущий сфокусированный элемент (глобально)
     */
    protected prevActiveElement: HTMLElement;
    protected prevActiveElementEvent: (event: FocusEvent) => void;
    static readonly EMPTY_ELEMENT: GenModels.BindingMetadata;
    constructor(props: DropdownParams, state: DropdownState);
    componentWillMount(): void;
    componentWillUnmount(): void;
    protected handleDocumentClick: (event?: Event) => void;
    protected handleDocumentFocus: (event: FocusEvent) => void;
    setValue(value: string, redraw: boolean): void;
    protected getTextValue(): string;
    protected onDropdownContainerClick(e?: any): void;
    protected onElementClick(element: GenModels.BindingMetadata): void;
    protected onClearValueClick(e: React.MouseEvent<any>): void;
    protected onPlaceholderClick(event: any): void;
    protected toggleCollapsed: () => CancelableEventArgs<IEventArgs>;
    protected expandDropdown: () => CancelableEventArgs<IEventArgs>;
    protected collapseDropdown: () => CancelableEventArgs<IEventArgs>;
    protected onCloseDropdownTriggered: () => void;
    protected isNotSameDropdown: (target: HTMLElement) => boolean;
    protected onInputFocus(event: React.FocusEvent<any>): void;
    protected onInputBlur(event: React.FocusEvent<any>): void;
    /**
     * При фокусе элемента списка
     * @param event Событие фокуса
     * @param element Текущий элемент
     */
    protected onFocusElement: (event: React.FocusEvent<any>, element: GenModels.BindingMetadata) => void;
    /**
     * При снятии фокуса у элемента списка
     * @param event Событие снятия фокуса
     * @param element Текущий элемент
     */
    protected onBlurElement: (event: React.FocusEvent<any>, element: GenModels.BindingMetadata) => void;
    /**
     * При фокусе соседнего элемента в списке
     * @param element Текущий элемент
     * @param mode Какой из соседних элементов должен получить фокус (предыдущий или следующий)
     */
    protected onFocusSiblingElement: (element: GenModels.BindingMetadata, mode: "prev" | "next") => void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<Dropdown>;
    protected renderInto(props: DropdownParams, container: HTMLElement): void;
    protected renderInput(): React.ReactNode;
    protected renderPlaceholder(): any;
}
