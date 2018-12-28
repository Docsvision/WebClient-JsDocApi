import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { IBindingsWriteRequest } from "@docsvision/webclient/System/IBindingsWriteRequest";
import { IEditOperation } from "@docsvision/webclient/System/IEditOperation";
/** @deprecated */
export interface IBasicEmployeeInfo {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
    displayName: string;
    pathInDirectory?: IDepartmentInfo[];
}
/** @deprecated */
export interface IDelegationRecord {
    fromPerformer: string;
    toPerformer: string;
}
/** @deprecated */
export interface IDocumentTreeNodeModel extends ITreeNodeModel {
    name: string;
}
/** @deprecated */
export interface ITaskCurrentPerformer {
    displayName: string;
    employeeModel: IBasicEmployeeInfo;
}
/** @deprecated */
export interface ITaskGroupSelectedPerformer {
    displayName: string;
    isResponsiblePerformer: boolean;
    employeeModel: IBasicEmployeeInfo;
}
/** @deprecated */
export interface ITaskGroupTreeNodeHelpModel extends ITreeNodeHelpModel {
    executionType: ExecutionType;
    author: IBasicEmployeeInfo;
    selectedPerformers: ITaskGroupSelectedPerformer[];
    name: string;
    content: string;
    endDate: Date;
    controller: IBasicEmployeeInfo;
    controlDate: Date;
}
/** @deprecated */
export interface ITaskGroupTreeNodeHintModel extends ITreeNodeHintModel {
    name: string;
    endDate?: Date;
    executionType: ExecutionType;
    stateDisplayName: string;
    stateClassName: string;
    stateType: number;
    selectedPerformers: ITaskGroupSelectedPerformer[];
}
/** @deprecated */
export interface ITaskGroupTreeNodeModel extends ITreeNodeModel {
    executionType: ExecutionType;
    isOverdue: boolean;
    priority: Priority;
    stateCategory: TaskGroupStateCategory;
    onControl: boolean;
}
/** @deprecated */
export interface ITasksTreeModel {
    nodes: ITreeNodeModel[];
    edges: ITaskTreeEdge[];
}
/** @deprecated */
export interface ITasksTreeNodeHelpRequestModel {
    cardId: string;
    cardTypeId: string;
}
/** @deprecated */
export interface ITasksTreeRequestModel {
    cardId: string;
    taskListId: string;
    kindIds: string[];
    fullTree: boolean;
}
/** @deprecated */
export interface ITaskTreeEdge {
    fromNode: string;
    toNode: string;
}
/** @deprecated */
export interface ITaskTreeNodeHelpModel extends ITreeNodeHelpModel {
    author: IBasicEmployeeInfo;
    currentPerformers: ITaskCurrentPerformer[];
    delegationHint: IDelegationRecord;
    name: string;
    content: string;
    endDate: Date;
    controller: IBasicEmployeeInfo;
    controlDate: Date;
    isOverdue: boolean;
    endDateActual: Date;
    report: string;
    delegationHistory: IDelegationRecord[];
    creationDate: Date;
    reportFiles: ILinkItemData[];
}
/** @deprecated */
export interface ITaskTreeNodeHintModel extends ITreeNodeHintModel {
    name: string;
    endDate?: Date;
    stateDisplayName: string;
    stateClassName: string;
    stateType: number;
    delegationHint: IDelegationRecord;
}
/** @deprecated */
export interface ITaskTreeNodeModel extends ITreeNodeModel {
    hasDelegates: boolean;
    hasReport: boolean;
    hasFileReport: boolean;
    onControl: boolean;
    isResponsiblePerformerTask: boolean;
    gender: PerformerGender;
    isOverdue: boolean;
    priority: Priority;
    stateCategory: TaskStateCategory;
    currentPerformers: ITaskCurrentPerformer[];
}
/** @deprecated */
export interface ITreeNodeHelpModel {
}
/** @deprecated */
export interface ITreeNodeHintModel {
}
/** @deprecated */
export interface ITreeNodeModel {
    nodeId: string;
    cardTypeId: string;
    kindId: string;
    hint: ITreeNodeHintModel;
    accessAllowed: boolean;
}
/** @deprecated Use WebClient.GenModels.SearchContextOption instead */
export declare enum SearchContextOption {
    None = -1,
    CurrentFolder = 0,
    CurrentFolderAndSubFolders = 1,
    SearchInSearchResults = 2,
    EveryWhere = 3
}
/** @deprecated Use WebClient.GenModels.ExecutionType instead */
export declare enum TaskExecutionType {
    Serial = 0,
    Parallel = 1
}
/** @deprecated Use WebClient.GenModels.DvFolderStyles instead */
export declare enum FolderStyles {
    /**
     * None
     */
    None = 0,
    /**
     * View displayed
     */
    FolderView = 1,
    /**
     * Card displayed
     */
    FolderCard = 2,
    /**
     * HTML page displayed
     */
    FolderURL = 4,
    /**
     * Digest view displayed
     */
    FolderDigest = 8,
    /**
     * All
     */
    All = 15
}
/** @deprecated */
export declare enum DeviceType {
    /**
     * Desktop
     */
    Desktop = 0,
    /**
     * Smartphone
     */
    Smartphone = 1,
    /**
     * Tablet
     */
    Tablet = 2
}
/** @deprecated */
export declare enum ExecutionType {
    Serial = 0,
    Parallel = 1
}
/** @deprecated */
export declare enum PerformerGender {
    NotSpecified = 0,
    Male = 1,
    Female = 2
}
/** @deprecated */
export declare enum Priority {
    Low = 0,
    Normal = 1,
    High = 2
}
/** @deprecated */
export declare enum TaskGroupStateCategory {
    Preparing = 0,
    Performing = 1,
    Completed = 2,
    Other = 3
}
/** @deprecated */
export declare enum TaskGroupWithOneTaskDisplayMode {
    Both = 0,
    Group = 1,
    Task = 2
}
/** @deprecated */
export declare enum TaskStateCategory {
    Preparing = 0,
    InWork = 1,
    Rejected = 2,
    OnRework = 3,
    Completed = 4,
    Other = 5
}
/** @deprecated */
export declare enum TasksTreeDisplayMode {
    Button = 0,
    Layout = 1
}
/** @deprecated */
export interface ITaskCreateInfo {
    displayName: string;
    isTemplate: boolean;
    createRouteName: string;
    id: string;
    cardTypeId: string;
    layoutAvailable: boolean;
}
/** @deprecated */
export interface ITaskListItem {
    cardId: string;
    kindId: string;
    taskName: string;
    viewRouteName: string;
    isGroupTask: boolean;
    stateDisplayName: string;
    stateType: number;
    stateClassName: string;
    performerDisplayName: string;
    startDate: string;
    endDate: string;
}
/** @deprecated */
export interface ITasksDataModel {
    tasks: ITaskListItem[];
    tasksLoaded: boolean;
    availableKinds: string[];
    taskID: string;
}
/** @deprecated */
export declare enum TaskGroupStateType {
    Preparation = 0,
    Performance = 1,
    Completed = 2,
    Recalled = 3
}
/** @deprecated */
export declare enum TasksMode {
    ListAndCreation = 0,
    CreationOnly = 1
}
/** @deprecated */
export declare enum TaskStateType {
    Draft = 0,
    InWork = 1,
    Completed = 2,
    Rejected = 3,
    OnAgreement = 4,
    Agreed = 5,
    Unknown = 6,
    NotAgreed = 7,
    OnAcceptance = 8,
    OnModification = 9,
    Deferred = 10,
    Recalled = 11,
    Delegated = 12,
    ReturnedFromDelegation = 13,
    Started = 14,
    Stopped = 15
}
/** @deprecated */
export interface ILayoutTableBindingModel {
    sectionId: string;
    skippedCount: number;
    hasMore: boolean;
    loadedRows: string[];
    addedRows: string[];
    deletedRows: string[];
}
/** @deprecated */
export interface ILayoutTableColumnInfo {
    header: string;
    columnWidth: string;
    tip: string;
    visibility: boolean;
}
/** @deprecated */
export interface IOperationData {
    operationId: string;
    displayName: string;
    tooltip: string;
}
/** @deprecated */
export interface IStateDataModel {
    stateId: string;
    caption: string;
}
export declare class ElementDataModel {
    value: string;
    key: any;
}
export declare class ElementsDataModel {
    elements: ElementDataModel[];
    isEmptyKeyAllowed: boolean;
}
/** @deprecated */
export declare enum RadioGroupLabelPlacement {
    Right = 0,
    Left = 1
}
/** @deprecated */
export declare enum FolderNodeStyle {
    FolderView = 1,
    FolderCard = 2,
    FolderURL = 4,
    FolderDigest = 8
}
/** @deprecated */
export declare enum LinkKind {
    Card = 0,
    File = 1,
    Url = 2
}
/** @deprecated */
export interface IEmployeeData extends IBasicEmployeeInfo {
    fieldPath: string;
}
/** @deprecated */
export interface IFindEmployeeResultItem {
    Id: string;
    FullName: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    IsMyself: boolean;
    Position: string;
    IsFavoritePerformer: boolean;
}
/** @deprecated */
export interface IMultipleEmployeeData {
    employees: IEmployeeData[];
    fieldPath: string;
}
/** @deprecated */
export declare enum EmployeeTooltipMode {
    Fio = 0,
    FioAndPosition = 1,
    None = 2
}
/** @deprecated */
export declare enum EmployeeViewMode {
    LastNameAndInitials = 0,
    DisplayName = 1,
    Auto = 2
}
/** @deprecated */
export declare enum DepartmentDialogMode {
    Tree = 0,
    List = 1
}
/** @deprecated */
export declare enum DateTimePickerMode {
    DateTime = 0,
    Date = 1
}
/** @deprecated */
export interface ICardLinkData {
    cardId: string;
    cardDigest: string;
    cardViewAllowed: boolean;
    mainFileReadAllowed: boolean;
}
/** @deprecated */
export interface ICardKindDataModel {
    cardKindName: string;
    cardKindFullName: string;
    cardKindId: string;
    loadingError: string;
}
/** @deprecated */
export interface AgreementManagementButtonModel {
    agreementManagementOperation: ApprovalOperationKind;
    displayName: string;
}
/** @deprecated */
export declare enum AgreementOperationKind {
    Resume = 0,
    Finish = 1,
    Pause = 2,
    Cancel = 3
}
/** @deprecated */
export interface IApproverInfo {
    employee: IBasicEmployeeInfo;
    excluded: boolean;
}
/** @deprecated */
export interface StageInfo {
    stageSemantics: StageSemantic;
    currentStage: boolean;
}
/** @deprecated */
export interface AgreementStageModel {
    stageId: string;
    name: string;
    order: number;
    approvalType: ApprovalType;
    duration: number;
    specificDuration: boolean;
    approvers: IApproverInfo[];
    allowEdit: boolean;
    hasBusinessProcess: boolean;
    excluded: boolean;
    approversChanged: boolean;
    stageInstanceInfo: StageInfo;
}
/** @deprecated */
export interface AgreementTemplateModel {
    templateId: string;
    creationSettingId: string;
    name: string;
    startNoEdit: boolean;
    startNoFiles: boolean;
    stages: AgreementStageModel[];
    loaded: boolean;
}
export declare class StageChangeModel {
    constructor(stage: AgreementStageModel);
    stageId: string;
    order: number;
    approvalType: ApprovalType;
    duration: number;
    specificDuration: boolean;
    approversChanged: boolean;
    approvers: IApproverInfo[];
    excluded: boolean;
}
/** @deprecated */
export declare enum AgreementMode {
    StartAndManagement = 0,
    StartOnly = 1,
    ManagementOnly = 2
}
/** @deprecated */
export declare enum AgreementStateType {
    Draft = 0,
    Started = 1,
    Stopped = 2,
    Agreed = 3,
    Other = 4
}
/** @deprecated */
export declare enum ApprovalOperationKind {
    Resume = 0,
    Complete = 1,
    Pause = 2,
    Cancel = 3,
    ToApprove = 4,
    AbortStage = 5,
    Management = 6
}
/** @deprecated */
export declare enum ApproverViewType {
    Fio = 0,
    FioAndPosition = 1,
    DisplayString = 2
}
/** @deprecated */
export declare enum ApprovalType {
    Sequential = 0,
    Parallel = 1,
    Alternative = 3
}
/** @deprecated */
export declare enum StageSemantic {
    Positive = 1,
    Negative = 2,
    Neutral = 3,
    Other = 4
}
export declare class ApprovalHistorySimpleCycleModel {
    isCurrent: boolean;
    number: number;
}
export declare class ApprovalHistoryCycleModel extends ApprovalHistorySimpleCycleModel {
    stages: ApprovalHistoryStageModel[];
    ownerCardId: string;
}
export declare class ApprovalHistorySimpleFileModel {
    name: string;
    key: {
        fileId: string;
    };
}
export declare class ApprovalHistoryStageItemModel {
    decision: DecisionSemantics;
    decisionName: string;
    decisionDate: Date;
    employeeId: string;
    employeeText: string;
    comment: string;
    hasComment: boolean;
    addedFileCardModels: any[];
    commentFileData: ApprovalHistorySimpleFileModel;
}
/** @deprecated */
export declare enum DecisionSemantics {
    Positive = 1,
    Negative = 2,
    Neutral = 3,
    Cancellation = 4,
    NewCycle = 5,
    Completion = 100
}
export declare class ApprovalHistoryStageModel {
    stageId: string;
    name: string;
    approvalType: string;
    isExpandedByDefault: boolean;
    stageItems: ApprovalHistoryStageItemModel[];
}
export declare class ApprovalHistoryViewModel {
    approvalReconcileCardId: string;
    approvalTaskCardId: string;
    currentCycle: ApprovalHistoryCycleModel;
    cycles: ApprovalHistorySimpleCycleModel[];
}
/** @deprecated */
export interface IAgreementHistoryDataModel {
    historyExists: boolean;
    agreementCardId: any;
}
/** @deprecated */
export declare enum AgreementHistoryMode {
    Button = 0,
    Layout = 1
}
/** @deprecated */
export interface IMainMenuItemSetting {
    id: string;
    hidden: boolean;
}
/** @deprecated */
export interface IMainMenuSettings {
    items?: IMainMenuItemSetting[];
}
/** @deprecated */
export declare enum DepartmentSource {
    StaffDirectory = 0,
    PartnersDirectory = 1
}
/** @deprecated */
export declare enum DepartmentType {
    Organisation = 0,
    Department = 1
}
/** @deprecated */
export interface IDepartmentDigest extends IDepartmentInfo {
}
/** @deprecated */
export interface IDepartmentExtendedInfo extends IDepartmentInfo {
    email: string;
    phone: string;
}
/** @deprecated */
export interface IDepartmentFlatDigest {
    data: IDepartmentInfo;
    hasChildren?: boolean;
}
/** @deprecated */
export interface IDepartmentInfo {
    id: string;
    name: string;
    fullName: string;
    departmentType?: DepartmentType;
    hasEmployee?: boolean;
    hasChildren?: boolean;
}
/** @deprecated */
export interface IDepartmentsFlatSearchQuery {
    itemTypes: SearchDepartmentType;
    searchText?: string;
    departmentId?: string;
    skip: number;
    maxCount: number;
    source: DepartmentSource;
}
/** @deprecated */
export interface IDepartmentsItemSearchInfo {
    matched: boolean;
    matchedFieldName: string;
    matchedFieldValue: string;
}
/** @deprecated */
export interface IDepartmentsSearchItemFlat {
    data: IDepartmentInfo;
    searchInfo?: IDepartmentsItemSearchInfo;
    path?: IDepartmentInfo[];
    hasChildren?: boolean;
}
/** @deprecated */
export interface IDepartmentsSearchQuery {
    itemTypes: SearchDepartmentType;
    searchText?: string;
    skipCount: number;
    maxCount: number;
    source: DepartmentSource;
}
/** @deprecated */
export interface IDepartmentsSearchResult {
    items: IDepartmentDigest[];
    hasMore: boolean;
}
/** @deprecated */
export interface IDepartmentTreeDigest extends IDepartmentInfo {
    children?: IDepartmentTreeDigest[];
    childrenLoaded?: boolean;
}
/** @deprecated */
export interface IDepartmentTreeSearchDigest extends IDepartmentTreeDigest {
    matched: boolean;
    matchedFieldName: string;
    matchedFieldValue: string;
}
/** @deprecated */
export interface IEmloyeeInfoWithPhoneAndEmail extends IBasicEmployeeInfo {
    phone: string;
    email: string;
    unitId: string;
}
/** @deprecated */
export interface ILoadDepartmentsFlatQuery {
    departmentId?: string;
    source: DepartmentSource;
    skip: number;
    itemTypes: SearchDepartmentType;
    maxCount: number;
}
/** @deprecated */
export interface ILoadDepartmentsFlatResponse {
    directoryTimestamp: number;
    totalItemsCount: number;
    items: IDepartmentFlatDigest[];
}
/** @deprecated */
export interface ILoadDepartmentsTreeQuery {
    parentNodeId?: string;
    treeLevelDown: number;
    itemTypes: SearchDepartmentType;
    source: DepartmentSource;
}
/** @deprecated */
export interface ISearchDepartmentsFlatResult {
    items: IDepartmentsSearchItemFlat[];
    hasMore: boolean;
    directoryTimestamp: number;
}
/** @deprecated */
export interface ISearchDepartmentsTreeQuery {
    itemTypes: SearchDepartmentType;
    searchQuery?: string;
    source: DepartmentSource;
}
/** @deprecated */
export interface ISearchDepartmentsTreeResult {
    items: IDepartmentTreeDigest[];
    totalResultsCount: number;
}
/** @deprecated */
export interface IStaffInfoRequestModel {
    employeeIds: string[];
    departmentIds: string[];
    source: DepartmentSource;
}
/** @deprecated */
export interface IStaffInfoResponseModel {
    employeesInfo: IEmloyeeInfoWithPhoneAndEmail[];
    departmentsInfo: IDepartmentExtendedInfo[];
}
/** @deprecated */
export declare enum SearchDepartmentType {
    None = 0,
    Department = 1,
    Organisation = 2
}
/** @deprecated */
export interface IDepartmentTreeSearchDigest extends IDepartmentTreeDigest {
    matched: boolean;
    matchedFieldName: string;
    matchedFieldValue: string;
}
/** @deprecated */
export interface IPartnerDirectoryItem {
    itemType: PartnerDirectoryItemType;
    data: IDepartmentInfo | IBasicEmployeeInfo;
}
/** @deprecated */
export interface IPartnerDirectoryItemSearchInfo {
    matched: boolean;
    matchedFieldName: string;
    matchedFieldValue: string;
}
/** @deprecated */
export interface IPartnerDirectoryQuickSearchResponse extends IPartnerDirectoryResponse {
    hasMore: boolean;
}
/** @deprecated */
export interface IPartnerDirectoryRequest {
    departmentId?: string;
    skip: number;
    maxCount: number;
}
/** @deprecated */
export interface IPartnerDirectoryResponse {
    items: IPartnerDirectoryItem[];
}
/** @deprecated */
export interface IPartnerDirectorySearchItem extends IPartnerDirectoryItem {
    searchInfo?: IPartnerDirectoryItemSearchInfo;
    path?: IDepartmentInfo[];
}
/** @deprecated */
export interface IPartnerDirectorySearchRequest {
    searchMode: PartnerDirectorySearchMode;
    searchText?: string;
    departmentId?: string;
    skip: number;
    skipDepartments: number;
    maxCount: number;
}
/** @deprecated */
export interface IPartnerDirectorySearchResponse extends IPartnerDirectoryResponse {
    items: IPartnerDirectorySearchItem[];
    hasMore: boolean;
    directoryTimestamp: number;
}
/** @deprecated */
export interface IPartnerDirectoryTreeLoadItem extends IPartnerDirectoryItem {
    hasChildren?: boolean;
}
/** @deprecated */
export interface IPartnerDirectoryTreeLoadRequest extends IPartnerDirectoryRequest {
    departmentId?: string;
}
/** @deprecated */
export interface IPartnerDirectoryTreeLoadResponse extends IPartnerDirectoryResponse {
    items: IPartnerDirectoryTreeLoadItem[];
    totalItemsCount: number;
    directoryTimestamp: number;
}
/** @deprecated */
export declare enum PartnerDirectoryItemType {
    Organization = 0,
    Department = 1,
    Employee = 2
}
/** @deprecated */
export declare enum PartnerDirectorySearchMode {
    SearchDepartments = 0,
    SearchEmployees = 1,
    SearchAll = 2
}
/** @deprecated */
export interface IAllowedCardKind {
    KindId: string;
    WithDescendants: boolean;
}
/** @deprecated */
export interface IAllowedCardType {
    CardTypeId: string;
}
/** @deprecated */
export interface IKindModel {
    cardTypeId: string;
    kindId: string;
    name: string;
    kinds: IKindModel[];
    notAvailable: boolean;
}
/** @deprecated */
export interface ILayoutLinkCreateParams {
    sourceCardId: string;
    sourceCardTimestamp: number;
    destinationCardId: string;
    linkTypeId: string;
    linksBinding: ISimpleBindingInfo;
    saveHardLink: boolean;
    editOperation: string;
}
/** @deprecated */
export interface ILayoutSetLinkDescriptionParams {
    cardId: string;
    bindingInfo: ISimpleBindingInfo;
    linkId: string;
    newDescription: string;
    timestamp: number;
}
/** @deprecated */
export interface ILinkItemData {
    linkId: string;
    displayName: string;
    linkTypeName: string;
    kind: LinkKind;
    cardId: string;
    creationDate?: Date;
    authorDisplayName: string;
    description: string;
}
/** @deprecated */
export interface ILinksDataModel {
    links: ILinkItemData[];
    bindingInfo: ISimpleBindingInfo;
    allowedLinkCardTypes: string[];
    linksLoaded: boolean;
}
/** @deprecated */
export interface ILinkType {
    LinkTypeId: string;
    Caption: string;
    DisplayName: string;
}
/** @deprecated */
export interface HistoryRecord {
    id: string;
    author: IBasicEmployeeInfo;
    date: Date;
    event: string;
}
export declare class HistoryRequest {
    cardId: string;
    employeeName?: string;
    date?: Date;
    eventSearch?: string;
    skip: number;
    maxCount: number;
    operationsToHide: string[];
    cacheId: string;
    editOperation: string;
}
export declare class HistoryResponse {
    records: HistoryRecord[];
    hasMore: boolean;
    cacheId: string;
    renew: boolean;
}
/** @deprecated */
export declare enum FolderMode {
    NoDefaultValue = 0,
    DefaultValueIsCurrentFolder = 1
}
/** @deprecated */
export declare enum FolderType {
    Regular = 1,
    Virtual = 4,
    Delegate = 8,
    System = 16
}
/** @deprecated */
export interface ICheckResult {
    passed: boolean;
    failReason: string;
}
/** @deprecated */
export interface IFolderInfo {
    name: string;
    folderId: string;
    additionalId: string;
    folderType: FolderType;
    disabled: boolean;
    refreshTimeout: number;
    hasUnloadedSubfolders: boolean;
    children: IFolderInfo[];
}
/** @deprecated */
export interface IFolderItemNodeData {
    id: string;
    name: string;
    type: FolderType;
    defaultStyle: FolderNodeStyle;
    hasUnloadedSubfolders: boolean;
    url: string;
    defaultViewId: string;
    searchId: string;
    targetFolderId: string;
    searchHasParameters: boolean;
    refreshTimeout: number;
    showUnreadCounter: boolean;
    folders: IFolderItemNodeData[];
}
/** @deprecated */
export interface IFolderItemNodeDataWithParents {
    folderNode: IFolderItemNodeData;
    parentNodes: string[];
}
/** @deprecated */
export interface IFileListDataModel {
    timestamp: number;
    files: ILayoutFileModel[];
    hasAnySignature: boolean;
    totalCount: number;
}
/** @deprecated */
export interface FileListVersionsDataModel {
    versions: IFileVersion[];
}
/** @deprecated */
export interface IFileVersion {
    id: string;
    versionId: string;
    versionPath: string;
    versionNumber: number;
    author: string;
    creationDate: Date;
    comments: IVersionComment[];
}
/** @deprecated */
export interface IGetFilesOptions {
    skipCount: number;
    maxCount: number;
}
/** @deprecated */
export interface ILayoutFileModel {
    name: string;
    fileId: string;
    fileCardId: string;
    isLocked: boolean;
    isFilePreviewSupported: boolean;
    currentVersion: IFileVersion;
    childVersions: IFileVersion[];
    hasFileSignature: boolean;
    versionsCount: number;
    isMain: boolean;
    webDavLink: string;
    webDavReadonlyLink: string;
}
/** @deprecated */
export interface IVersionComment {
    id: string;
    date: Date;
    comment: string;
    author: string;
}
/** @deprecated */
export declare enum DirectoryDesignerAreas {
    OnlyNode = 0,
    OnlyChildren = 1,
    NodeWithChildren = 2
}
/** @deprecated */
export declare enum DirectoryDesignerNodeType {
    Node = 0,
    Row = 1
}
/** @deprecated */
export interface IDirectoryDesignerLoadTreeQuery {
    rootNodeId?: string;
    searchArea?: DirectoryDesignerAreas;
    currentNodeId?: string;
    treeLevelDown: number;
}
/** @deprecated */
export interface IDirectoryDesignerRowDigest extends IDirectoryDesignerRowInfo {
}
/** @deprecated */
export interface IDirectoryDesignerRowInfo {
    id: string;
    name: string;
}
/** @deprecated */
export interface IDirectoryDesignerSearchQuery {
    rootNodeId?: string;
    searchArea?: DirectoryDesignerAreas;
    searchText: string;
    skipCount: number;
    maxCount: number;
}
/** @deprecated */
export interface IDirectoryDesignerSearchResult {
    items: IDirectoryDesignerRowDigest[];
    hasMore: boolean;
}
/** @deprecated */
export interface IDirectoryDesignerSearchTreeQuery {
    rootNodeId?: string;
    searchArea?: DirectoryDesignerAreas;
    searchQuery?: string;
    searchResultNumber?: number;
}
/** @deprecated */
export interface IDirectoryDesignerSearchTreeResult {
    items: IDirectoryDesignerTreeNodeDigest[];
    totalResultsCount: number;
    searchResultNumber: number;
    matchedElementId: string;
    matchedFieldName: string;
    matchedFieldValue: string;
}
/** @deprecated */
export interface IDirectoryDesignerTreeNodeDigest {
    name: string;
    nodeType: DirectoryDesignerNodeType;
    id: string;
    children?: IDirectoryDesignerTreeNodeDigest[];
    childrenLoaded?: boolean;
}
/** @deprecated */
export interface IChangeStateData {
    cardId: string;
    operationId: string;
    layoutType: number;
    comment?: string;
}
/** @deprecated */
export interface ILayoutPartParams {
    cardId: string;
    layoutType: number;
    rootControlName: string;
    includeRootControl: boolean;
}
/** @deprecated */
export interface ISaveControlData {
    cardId: string;
    layoutType: number;
    bindings: IBindingsWriteRequest[];
    createAsLink: ICreateAsLinkParams;
    createInFolder: string;
    timestamp: number;
    deferred: JQueryDeferred<any>;
    cardTypeId: string;
    parentCardId: string;
}
/** @deprecated */
export interface IBindingInfoExt extends ISimpleBindingInfo {
}
/** @deprecated */
export interface ICardInfoModel {
    id: string;
    typeId: string;
    lockInfo: ILockInfoModel;
    timestamp: number;
    parentCardId: string;
    createAsLink: ICreateAsLinkParams;
    createInFolder: string;
    createInCurrentFolderForbidden: boolean;
    createDate: Date;
}
/** @deprecated */
export interface ICreateAsLinkParams {
    sourceCardId: string;
    sourceCardTimestamp: number;
    linkTypeId: string;
    linksBinding: ISimpleBindingInfo;
    saveHardLink: boolean;
}
/** @deprecated */
export interface IExtendedLayoutModel extends ILayoutModel {
    layoutInfo: ILayoutInfoModel;
}
/** @deprecated */
export interface ILayoutCardModel extends ILayoutViewModel {
    cardInfo: ICardInfoModel;
}
/** @deprecated */
export interface ILayoutInfoModel {
    deviceType: GenModels.DeviceType;
    localeId: number;
    name: string;
    id: string;
    type: LayoutType;
    operations: IEditOperation[];
}
/** @deprecated */
export interface ILayoutModel {
    properties: any;
    children: ILayoutModel[];
    controlTypeName: string;
}
/** @deprecated */
export interface ILayoutViewModel {
    layoutModel: IExtendedLayoutModel;
}
/** @deprecated */
export interface ILockInfoModel {
    isLocked: boolean;
    accountName: string;
}
/** @deprecated */
export interface ISimpleBindingInfo {
    fieldAlias: string;
    sectionId: string;
    editOperation: string;
    propertyName: string;
}
/** @deprecated */
export declare enum LayoutType {
    View = 0,
    Edit = 1,
    Create = 2
}
/** @deprecated */
export interface IAgreementListDataModel {
    items: IAgreementListItemModel[];
    documentNumber: string;
    documentName: string;
}
/** @deprecated */
export interface IAgreementListItemModel {
    date: Date;
    employeeDisplayText: string;
    departmentName: string;
    comment: string;
    decisionText: string;
}
/** @deprecated */
export interface IAgreementManagementEditModel {
    agreementManagement: IAgreementManagementModel;
    stages: AgreementStageModel[];
    canInterruptCurrentStages: boolean;
    availableAgreementOperations: AgreementOperationKind[];
}
/** @deprecated */
export interface IAgreementManagementModel {
    isMainFileExists: boolean;
    isNew: boolean;
    stateType: AgreementStateType;
    reconciliationCardId: string;
}
/** @deprecated */
export interface IAgreementManagementStartModel {
    agreementManagement: IAgreementManagementModel;
    templates: AgreementTemplateModel[];
}
/** @deprecated */
export interface ILayoutAgreementManagementModel {
    isNew: boolean;
    enableCreate: boolean;
    createDisableReason: string;
    agreementCardId: string;
    stateType: AgreementStateType;
    documentTimestamp: number;
}
/** @deprecated */
export declare class ApplicationInfo {
    constructor();
}
