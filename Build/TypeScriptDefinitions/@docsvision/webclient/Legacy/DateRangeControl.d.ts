import { Control } from "@docsvision/webclient/Legacy/Control";
import { TaskIntervalManager } from "@docsvision/webclient/Legacy/TaskIntervalManager";
/** @internal */
export declare class DateRangeControl extends Control {
    private currentZeroDuration;
    private startDateControl;
    private endDateControl;
    private durationControl;
    constructor(root: HTMLElement);
    IntervalManager: TaskIntervalManager;
    OnChangeCallback: Function;
    readonly Duration: number;
    readonly StartDate: Date;
    readonly EndDate: Date;
    UpdateView(intervalManager: TaskIntervalManager): void;
    private Initialize;
    /**
     * Create control IntervalManager
     */
    private DateRangeCreateTasksIntervalManager;
}
