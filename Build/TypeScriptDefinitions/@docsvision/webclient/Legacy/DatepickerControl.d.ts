import { Control } from "@docsvision/webclient/Legacy/Control";
/** @internal */
export declare class DatepickerControl extends Control {
    private hiddenInput;
    private dateInput;
    private timeInput;
    private dateTimeBox;
    private clearButton;
    private currentTime;
    private dateTimeFormat;
    private minDate;
    private maxDate;
    private lastValidTime;
    constructor(root: HTMLElement, time: string, minDate?: Date, maxDate?: Date);
    Update(time?: Date): void;
    Clear(): void;
    SetMinMaxDate(minDate?: Date, maxDate?: Date): void;
    Disable(): void;
    private Initialize;
    readonly Value: Date;
    private CheckDateTime;
    private GetDateAttribute;
    private ClearBtnShow;
    private ClearBtnHide;
}
