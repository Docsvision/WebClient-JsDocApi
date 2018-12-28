/** @internal */
export declare class GroupTaskCardUpdateModel {
    AuthorId: string;
    AuthorName: string;
    TaskGroupId: string;
    PerformerId: string;
    Name: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    ControlDate: string;
    Duration: string;
    ExecutionType: string;
    OnControl: boolean;
    ControllerId: string;
    ControlHour: string;
    RequiresAcceptance: boolean;
    IsNew: boolean;
    Timestamp: string;
    KindId: string;
    IsStartTask: boolean;
    ParentCardKey: ParentCardKey;
    DocumentsId: Array<string>;
    PerformerSettingUpdateModels: Array<PerformerSettingUpdateModel>;
}
export declare class ParentCardKey {
    CardId: string;
    CardTypeId: string;
}
export declare class PerformerSettingUpdateModel {
    PerformerId: string;
    StartDate: string;
    EndDate: string;
    Duration: string;
    Description: string;
}
