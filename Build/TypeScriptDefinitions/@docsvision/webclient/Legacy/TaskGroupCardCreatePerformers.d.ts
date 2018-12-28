import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import "@docsvision/webclient/Legacy/NativeFunctions";
import { GroupTaskPerformersUpdateModel } from "@docsvision/webclient/Legacy/GroupTaskPerformersUpdateModel";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
/** @internal */
export declare class TaskGroupCardCreatePerformers {
    private form;
    private intervalManager;
    private performersTable;
    private dateTimeFormat;
    private responsePerformer;
    private employeeAutocomplete;
    private changePerformerControls;
    private allowResponsiveAcceptance;
    private allowAcceptance;
    private controlHour;
    executionTypeChanged: IBasicEvent<GenModels.ExecutionType>;
    constructor(formName: HTMLFormElement);
    protected Initialize(): void;
    getExecutinType(): GenModels.ExecutionType;
    taskGroupStartDate: Date;
    taskGroupEndDate: Date;
    taskGroupDuration: number;
    executionType: GenModels.ExecutionType;
    setTaskGroupInterval(startDate: Date, endDate: Date, duration: number): void;
    validate(): boolean;
    getData(): GroupTaskPerformersUpdateModel;
    /** Called when start date, end date or duration changed in dates range control  */
    protected onIntervalChanged(): void;
    private UpdateIntervalManager;
    private UpdateIntervalsView;
    private disableSelection;
    private fixHelper;
    private CompareTaskIntervals;
    private GetExistingPerformers;
    private ChangeExecutionTypeEventHandler;
    private EditTaskIntervalEventHandler;
    private UpdateTaskInterval;
    private EditTaskDescriptionEventHandler;
    private RemovePerformerEventHandler;
    private MoveUpPerformerEventHandler;
    private MoveDownPerformerEventHandler;
    private ChangePerformerEventHandler;
    private ChangePerformerResponseEventHandler;
}
