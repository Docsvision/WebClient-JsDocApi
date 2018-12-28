import { $BusinessCalendarController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IEditPopoverProps } from "@docsvision/webclient/Helpers/PopoverHelpers/EditPopover/IEditPopoverProps";
import { DateTimeFormat } from "@docsvision/webclient/Legacy/DateTimeFormat";
import { DateTimePicker, DateTimePickerParams } from "@docsvision/webclient/Platform/DateTimePicker";
import { InputBasedControlImpl, InputBasedControlState } from "@docsvision/webclient/System/InputBasedControlImpl";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { $Router } from "@docsvision/webclient/System/$Router";
import React from "react";
/** @internal */
export interface DateTimePickerState extends DateTimePickerParams, InputBasedControlState<Date> {
    binding: IBindingResult<Date>;
    showClearButton: boolean;
    timeInput: HTMLInputElement;
    dateTimeFormat: DateTimeFormat;
    timeInputText: string;
    clearButton: HTMLElement;
    loadingCalendarSettings: RequestHelper;
    worktimeSettings: GenModels.CalendarYearSettings[];
    currentValueDefaultTime: Date;
    services?: $LayoutInfo & $BusinessCalendarController & $EditOperationStore & $Router;
}
/** @internal */
export declare type DateTimePickerImplState = DateTimePickerState;
/** @internal */
export declare class DateTimePickerImpl extends InputBasedControlImpl<Date, DateTimePickerParams, DateTimePickerState> {
    constructor(props: DateTimePickerParams, state: DateTimePickerState);
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected addGlobalListeners(): void;
    protected removeGlobalListeners(): void;
    protected getTextValue(): string;
    protected renderInto(props: DateTimePickerParams, container: HTMLElement): void;
    getDefaultValue(): Date;
    protected getDateString(): string;
    protected getTimeString(): string;
    protected readonly dateInput: HTMLInputElement;
    protected onInPlaceEditOpened(): void;
    protected onEditPopoverShowed(control: any): void;
    protected onPlaceholderClick(event: any): void;
    protected showEditPopover(popoverOptions?: IEditPopoverProps): JQueryDeferred<DateTimePicker>;
    setValue(value: Date, redraw: boolean): void;
    protected onSelectedDate(newValue: Date): void;
    protected setTimeFor(date: Date, time: Date): Date;
    protected getDefaultTime(newValue: Date, loadSettings: boolean, onLoaded?: () => void): Date;
    protected timeIsEqual(date1: Date, date2: Date): boolean;
    protected updateTimeForSelectedDate(date: Date): Date;
    protected getTimeFromWorkTime(mode: GenModels.DateTimeDefaultTimeModes, workTime: GenModels.CalendarWorkTime): Date;
    protected loadWorktimeSettings(year: number): JQueryDeferred<GenModels.CalendarYearSettings[]>;
    /**
     * From DatepickerControl.ts Initialize()
     * @deprecated Use this.initializeJQueryDatePicker instead
     */
    protected initializeJQuryDatePicker(): void;
    /** From DatepickerControl.ts Initialize() */
    protected initializeJQueryDatePicker(): void;
    showDatePicker(): void;
    hideDatePicker(): void;
    protected onDateInputClick(): void;
    protected onDateInputKeyDown(ev: React.KeyboardEvent<any>): void;
    protected onCalendarIconClick(): void;
    protected onTimeInputKeypress(ev: React.KeyboardEvent<any>): void;
    protected hideCalendar(): void;
    protected onTimeInputChange(ev: React.ChangeEvent<any>): void;
    protected processTimeInputChange(newText: string, input: HTMLInputElement, newCursorPos?: number): void;
    protected onTimeInputBlur(): void;
    protected isOverdue(): boolean;
    protected getCssClass(): string;
    protected renderInputWithPlaceholder(): JSX.Element;
    protected renderInput(): React.ReactNode;
    clear(): void;
    canClear(): boolean;
}
