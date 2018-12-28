import { TimeOfPerfomanceParams } from "@docsvision/webclient/BackOffice/TimeOfPerfomance";
import { Debouncer } from "@docsvision/webclient/Helpers/Debouncer";
import { DateTimePicker } from "@docsvision/webclient/Platform/DateTimePicker";
import { NumberControl } from "@docsvision/webclient/Platform/Number";
import { PanelImpl, PanelState } from "@docsvision/webclient/Platform/PanelImpl";
import { LayoutControl } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
/** @internal */
export interface TimeOfPerfomanceState extends TimeOfPerfomanceParams, PanelState {
    startDate: DateTimePicker;
    endDate: DateTimePicker;
    duration: NumberControl;
    initializationSuccess: boolean;
    lastCalculatedEndDate: Date;
    lastCalculatedDuration: number;
    startDateChangeDebouncer: Debouncer;
    endDateChangeDebouncer: Debouncer;
    durationChangeDebouncer: Debouncer;
}
/** @internal */
export declare class TimeOfPerfomanceImpl extends PanelImpl<TimeOfPerfomanceParams, TimeOfPerfomanceState> {
    constructor(props: TimeOfPerfomanceParams, state: TimeOfPerfomanceState);
    init(): void;
    updateDuration(): Promise<void>;
    updateEndDate(): Promise<void>;
    onStartDateChanged: (sender: any, args: IDataChangedEventArgsEx<Date>) => Promise<void>;
    onEndDateChanged: (sender: any, args: IDataChangedEventArgsEx<Date>) => Promise<void>;
    onDurationChanged: (sender: any, args: IDataChangedEventArgsEx<number>) => Promise<void>;
    showLoader(conrol: LayoutControl): void;
    hideLoader(conrol: LayoutControl): void;
    getDuration(startDate: Date, endDate: Date): JQueryDeferred<number>;
    getEndDate(startDate: Date, duration: number): JQueryDeferred<Date>;
    getCssClass(): string;
    renderControl(): import("react").ReactNode[];
}
