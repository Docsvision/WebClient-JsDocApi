export declare namespace GenModels {
    interface QueryViewRequest {
        /**
         * Gets or sets folder identifier
         */
        folderId: string;
        /**
         * Folder setting - seconds to auto refresh. Zero value inidicates, that autorefresh disabled.
         */
        folderRefreshTimeout: number;
        /**
         * Data for unread counters calculation (or not only unread counters?)
         */
        forceVirtualFolderSearch: boolean;
        /**
         * Gets or sets search identifier
         */
        searchId: string;
        /**
         * Gets or sets view identifier
         */
        viewId: string;
        /**
         * Gets or sets full text filter string
         */
        fullTextFilter: string;
        /**
         * Gets or sets whether view should get cached data or refreshed
         */
        refreshView: boolean;
        /**
         * Gets or sets sorted column name
         */
        sortedColumnName: string;
        /**
         * Gets or sets value indicated whether is descending sort order
         */
        isDescending: boolean;
        /**
         * Gets or sets page number
         */
        pageNumber: number;
        /**
         * Gets or sets old search results store identifier
         */
        oldStoreId: string;
        /**
         * Gets or sets search context option
         */
        searchContextOption: GenModels.SearchContextOption;
        /**
         * Gets or sets attribute search text
         */
        attributeTextFilter: string;
        /**
         * Gets or sets Filters
         */
        filters: Array<GenModels.QueryFilterItem>;
    }
}
export declare namespace GenModels {
    interface QueryFilterItem {
        /**
         * Gets or sets filtered columnt name
         */
        name: string;
        /**
         * Gets or sets values
         */
        values: Array<string>;
    }
}
export declare namespace GenModels {
    interface UnreadCountersRequest {
        /**
         * Gets or sets employee identifier
         */
        employeeId: string;
        /**
         * Gets or sets tab identifier
         */
        realtimeSessionId: string;
        /**
         * Gets client folders with current counters
         */
        clientFolders: Array<GenModels.UnreadCountersFolderInfo>;
    }
}
export declare namespace GenModels {
    interface UnreadCountersFolderInfo {
        /**
         * Gets or sets folder identifier
         */
        folderId: string;
        /**
         * Minutes to refresh counter
         */
        refreshTimeout: number;
        /**
         * Gets or sets virtual folder search refresh parameter
         */
        forceVirtualFolderSearch: boolean;
    }
}
export declare namespace GenModels {
    interface LinkAddModel {
        /**
         * Gets or sets card timestamp
         */
        timestamp: number;
        /**
         * Gets or sets source card identifier
         */
        sourceCardId: string;
        /**
         * Gets or sets destination card identifier
         */
        destinationCardId: string;
        /**
         * Gets or sets link type identifier
         */
        linkTypeId: string;
        /**
         * Gets or sets flag if link is backward
         */
        oppositeLinkName: string;
        /**
         * Gets or sets source card type
         */
        sourceCardType: string;
        /**
         * Gets or sets flag if link is file
         */
        isFileLink: boolean;
        /**
         * Gets or sets flag if link is report
         */
        isReport: boolean;
        /**
         * Gets or sets value whether indicate create link for new card
         */
        isNewCard: boolean;
        /**
         * Gets or sets link types
         */
        linkTypes: Array<GenModels.LinkTypeModel>;
        /**
         * Gets or sets value whether LinkTypes array has some predefined order
         */
        linkTypesSorted: boolean;
        /**
         * Gets or sets value whether hard link should be created
         */
        hardLink: boolean;
        /**
         * Gets or sets is link type selectable
         */
        isLinkTypeSelectable: boolean;
    }
}
export declare namespace GenModels {
    interface LinkTypeModel {
        /**
         * Gets or sets id
         */
        linkTypeId: string;
        /**
         * Gets or sets type name
         */
        name: string;
        /**
         * Gets or set display name
         */
        displayName: string;
        /**
         * Gets or sets flag indicated if the link is bidirectional
         */
        oppositeLinkName: string;
    }
}
export declare namespace GenModels {
    interface CalendarRequestModel {
        /**
         * Restrict result with specified year only
         */
        year?: number;
        /**
         * Restrict result with specified day only
         */
        day?: number;
    }
}
export declare namespace GenModels {
    interface CalendarYearSettings {
        /**
         * Year
         */
        year: number;
        /**
         * Value of business calendar EndTime
         */
        days: Array<GenModels.CalendarDaySettings>;
    }
}
export declare namespace GenModels {
    interface CalendarDaySettings {
        /**
         * Day number from begining of the year
         */
        day: number;
        /**
         * Value of business calendar WorkTime
         */
        workTime: GenModels.CalendarWorkTime;
    }
}
export declare namespace GenModels {
    interface CalendarWorkTime {
        /**
         * Value of business calendar StartTime in milliseconds from 0:00
         */
        begin: number;
        /**
         * Value of business calendar EndTime in milliseconds from 0:00
         */
        end: number;
    }
}
export declare namespace GenModels {
    interface CalendarDurationRequestModel {
        /**
         * What calendar use to calculate value
         */
        calendarSources: Array<GenModels.BusinessCalendarSource>;
        /**
         * Date of the start of the period
         */
        startDate: string;
        /**
         * Date of the end of the period
         */
        endDate: string;
    }
}
export declare namespace GenModels {
    interface BusinessCalendarSource {
        /**
         * Employee or unit identifier
         */
        id: string;
        /**
         * Type of {@link GenModels}
         */
        type: GenModels.BusinessCalendarSourceType;
    }
}
export declare namespace GenModels {
    interface CalendarEndDateRequestModel {
        /**
         * What calendar use to calculate value
         */
        calendarSources: Array<GenModels.BusinessCalendarSource>;
        /**
         * Date of the start of the period
         */
        startDate: string;
        /**
         * Duration of the period
         */
        duration: number;
    }
}
export declare namespace GenModels {
    interface CommentsRequestModel {
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets max count
         */
        maxCount: number;
    }
}
export declare namespace GenModels {
    interface CommentsDataSourceModel {
        /**
         * Gets or sets use related card data
         */
        useRelatedCardData: boolean;
        /**
         * Gets or sets related card section
         */
        relatedCardSection: string;
        /**
         * Gets or sets related card field alias
         */
        relatedCardFieldAlias: string;
        /**
         * Gets or sets data source card section
         */
        dataSourceCardSection: string;
        /**
         * Gets or sets author field alias
         */
        authorFieldAlias: string;
        /**
         * Gets or sets date field alias
         */
        dateFieldAlias: string;
        /**
         * Gets or sets text field alias
         */
        textFieldAlias: string;
    }
}
export declare namespace GenModels {
    interface CommentsModel {
        /**
         * Gets or sets comments list
         */
        comments: Array<GenModels.Comment>;
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets all comments count
         */
        allCommentsCount: number;
    }
}
export declare namespace GenModels {
    interface Comment {
        /**
         * Gets or sets identifier
         */
        id: string;
        /**
         * Gets or sets employee identifier
         */
        employeeId?: string;
        /**
         * Gets or sets employee display name
         */
        employeeDisplayName: string;
        /**
         * Gets or sets date
         */
        date?: string;
        /**
         * Gets or sets text
         */
        text: string;
    }
}
export declare namespace GenModels {
    interface AddCommentRequestModel {
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets text
         */
        text: string;
    }
}
export declare namespace GenModels {
    interface RestoreCommentModel {
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets text
         */
        text: string;
        /**
         * gets or sets date
         */
        date?: string;
    }
}
export declare namespace GenModels {
    interface UpdateCommentRequestModel {
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets comment identifier
         */
        commentId: string;
        /**
         * Gets or sets text
         */
        text: string;
    }
}
export declare namespace GenModels {
    interface DeleteCommentRequestModel {
        /**
         * Gets or sets comments data source
         */
        commentsDataSource: GenModels.CommentsDataSourceModel;
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets comment identifier
         */
        commentId: string;
    }
}
export declare namespace GenModels {
    interface SignatureKindSelectionModel {
        /**
         * available signature kind
         */
        availableKind?: GenModels.DigitalSignatureKind;
        /**
         * warning message
         */
        warning: string;
        /**
         * time-stamp protocol server address
         */
        tspAddress: string;
    }
}
export declare namespace GenModels {
    interface TasksTreeRequestModel {
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets task list identifier
         */
        taskListId: string;
        /**
         * Gets allowed kinds identifiers
         */
        kindIds: Array<string>;
        /**
         * Gets or sets whether not restrict tree to current card
         */
        fullTree: boolean;
    }
}
export declare namespace GenModels {
    interface TasksTreeModel {
        /**
         * Gets tree nodes
         */
        parentCardId: string;
        /**
         * Gets tree nodes
         */
        nodes: Array<GenModels.TreeNodeModel>;
        /**
         * Gets edges
         */
        edges: Array<GenModels.TaskTreeEdge>;
    }
}
export declare namespace GenModels {
    interface TreeNodeModel {
        /**
         * Gets or sets node identifier
         */
        nodeId: string;
        /**
         * Gets or sets card type identifier
         */
        cardTypeId: string;
        /**
         * Gets or sets kind identifier
         */
        kindId: string;
        /**
         * Gets or sets tree node hint
         */
        hint: GenModels.TreeNodeHintModel;
        /**
         * Is allowed to read this tree node
         */
        accessAllowed: boolean;
    }
}
export declare namespace GenModels {
    interface TreeNodeHintModel {
    }
}
export declare namespace GenModels {
    interface TaskTreeEdge {
        /**
         * Gets or sets from node identifier
         */
        fromNode: string;
        /**
         * Gets or sets to node identifier
         */
        toNode: string;
    }
}
export declare namespace GenModels {
    interface TasksTreeNodeHelpRequestModel {
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets card type identifier
         */
        cardTypeId: string;
    }
}
export declare namespace GenModels {
    interface TreeNodeHelpModel {
        /**
         * Gets or set creation date
         */
        creationDate: string;
    }
}
export declare namespace GenModels {
    interface PartnerQuickSearchQuery {
        /**
         * Search mode
         */
        searchMode: GenModels.PartnerSearchMode;
        searchText: string;
        departmentId?: string;
        /**
         * Partners count to skip from begin (pagination). Real skip = Skip - SkipDepartments;
         */
        skip?: number;
        /**
         * Departments count to skip from begin (pagination). Real skip = Skip - SkipDepartments;
         */
        skipDepartments?: number;
        /**
         * Max partners in pagination result
         */
        maxCount?: number;
    }
}
export declare namespace GenModels {
    interface PartnerQuickSearchResponse {
        /**
         * List of {@link GenModels}
         */
        items: Array<GenModels.PartnerDirectoryItem>;
        /**
         * Has more items
         */
        hasMore: boolean;
    }
}
export declare namespace GenModels {
    interface PartnerDirectoryItem {
        /**
         * Partner item type
         */
        itemType: GenModels.PartnerItemType;
        /**
         * Item data
         */
        data: any;
        /**
         * Has item any children
         */
        hasChildren: boolean;
    }
}
export declare namespace GenModels {
    interface PartnerLoadQuery {
        /**
         * Search mode
         */
        searchMode: GenModels.PartnerSearchMode;
        /**
         * Department id
         */
        departmentId?: string;
        /**
         * Skip (pagination)
         */
        skip?: number;
        /**
         * Skip departments (pagination)
         */
        skipDepartments?: number;
        /**
         * Max count (pagination)
         */
        maxCount?: number;
    }
}
export declare namespace GenModels {
    interface PartnerTreeLoadResponse {
        /**
         * List of partner directory items
         */
        items: Array<GenModels.PartnerDirectoryItem>;
        /**
         * Total partners count
         */
        totalItemsCount: number;
        /**
         * Directory timestamp
         */
        directoryTimestamp: number;
    }
}
export declare namespace GenModels {
    interface PartnerSearchResponse {
        /**
         * List of {@link GenModels}
         */
        items: Array<GenModels.PartnerDirectorySearchItem>;
        /**
         * Has more items
         */
        hasMore: boolean;
        /**
         * Directory timestamp
         */
        directoryTimestamp: number;
    }
}
export declare namespace GenModels {
    interface PartnerDirectorySearchItem extends GenModels.PartnerDirectoryItem {
        /**
         * Search info
         */
        searchInfo: GenModels.PartnerSearchInfo;
        /**
         * Search path in departments
         */
        path: Array<GenModels.DepartmentModel>;
    }
}
export declare namespace GenModels {
    interface PartnerSearchInfo {
        /**
         * Is matched
         */
        matched: boolean;
        /**
         * Matched field name
         */
        matchedFieldName: string;
        /**
         * Matched field value
         */
        matchedFieldValue: string;
    }
}
export declare namespace GenModels {
    interface DepartmentModel {
        /**
         * Department id
         */
        id: string;
        /**
         * Department name
         */
        name: string;
        /**
         * Department full name
         */
        fullName: string;
        /**
         * Department type
         */
        departmentType: GenModels.DepartmentType;
    }
}
export declare namespace GenModels {
    interface MainMenuSettings {
        /**
         * List of main menu settings
         */
        items: Array<GenModels.MainMenuItemSetting>;
    }
}
export declare namespace GenModels {
    interface MainMenuItemSetting {
        /**
         * Main menu item unuque identifier
         */
        id: string;
        /**
         * Is item hidden by user
         */
        hidden: boolean;
    }
}
export declare namespace GenModels {
    interface CardListRequestModel {
        /**
         * Request model for folder view
         */
        folderViewRequest: GenModels.QueryViewRequest;
        /**
         * Search params
         */
        parameters: Array<GenModels.SearchParameter>;
        /**
         * Instance id
         */
        instanceId?: string;
        /**
         * Search filter
         */
        searchFilter: string;
        /**
         * Device type
         */
        deviceType: GenModels.DeviceType;
    }
}
export declare namespace GenModels {
    interface SearchParameter {
        /**
         * Gets or sets parameter name
         */
        name: string;
        /**
         * Gets or sets parameter value
         */
        value: string;
        /**
         * Does parameter included in search
         */
        enabled: boolean;
    }
}
export declare namespace GenModels {
    interface CardListViewModel {
        /**
         * Card list header text
         */
        headerText: string;
        /**
         * Card list parent header text
         */
        parentHeaderText: string;
        /**
         * Current view name
         */
        currentViewName: string;
        /**
         * Default folder view style
         */
        defaultStyle: GenModels.DvFolderStyles;
        /**
         * Url for DefaultStyle.FolderURL, when folder displayed as web page.
         */
        folderUrl: string;
        /**
         * Grid model
         */
        gridModel: GenModels.GridViewModel;
        searchParametersLayout: GenModels.LayoutViewModel;
    }
}
export declare namespace GenModels {
    interface GridViewModel {
        /**
         * Gets or sets instanceId
         */
        instanceId: string;
        /**
         * Gets or sets size
         */
        pageSize: number;
        /**
         * Gets or sets model size
         */
        modelSize: number;
        /**
         * Gets or sets whether is final model size
         */
        isAllPagesLoaded: boolean;
        /**
         * Gets or sets IsUnknownModelSize
         */
        isUnknownModelSize: boolean;
        /**
         * Gets or sets whether filter allowed
         */
        isFilterAllowed: boolean;
        /**
         * Gets or sets paging mode
         */
        isPagingMode: boolean;
        /**
         * Gets or sets whether last page
         */
        isLastPage: boolean;
        /**
         * Gets or sets whether to highlight unread cards
         */
        markUnread: boolean;
        /**
         * Gets or sets CheckCardAccess
         */
        checkCardAccess: boolean;
        /**
         * Gets or sets whether to allow resize rows
         */
        allowRowResize: boolean;
        /**
         * Gets sorting key
         */
        sortingKey: string;
        /**
         * Gets columns
         */
        columns: Array<GenModels.GridColumn>;
        /**
         * Gets values
         */
        rows: Array<GenModels.GridRow>;
        /**
         * Gets or sets folder view request used to aquire ViewContext-specific grid settings
         */
        request: GenModels.QueryViewRequest;
        /**
         * Current session id.
         */
        sessionId: string;
        /**
         * Gets or sets key column name
         */
        keyColumnName: string;
        /**
         * Get sorting column settings
         */
        sortingColumns: Array<GenModels.GridSorting>;
        /**
         * Get grouping column names
         */
        groupingColumnNames: Array<GenModels.GridGrouping>;
    }
}
export declare namespace GenModels {
    interface GridColumn {
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets sorting
         */
        sorting: boolean;
        /**
         * Gets or sets css class name
         */
        cssClassName: string;
        /**
         * Gets or sets column type
         */
        type: GenModels.ColumnType;
        /**
         * Gets or sets if column supported in mobile or desktop format
         */
        formFactor?: GenModels.FormFactor;
        /**
         * Gets or sets column sort direction
         */
        sortDirection?: System.Web.UI.WebControls.SortDirection;
        /**
         * Date format
         */
        dateFormat: string;
        /**
         * Gets or set whether column is marked as sort direction
         */
        isDefaultSort: boolean;
        /**
         * Get view column name
         */
        name: string;
        /**
         * Get value indicated whether view column is system column
         */
        isSystemColumn: boolean;
        /**
         * Get value indicated whether view column is hidden in view settings
         */
        isHiddenColumn: boolean;
        /**
         * Gets or sets value indicated whether column is unresizable
         */
        unresizable: boolean;
        /**
         * Gets or sets column width
         */
        width: any;
        /**
         * Gets or sets column order
         */
        order: number;
        /**
         * Eval row function
         */
        evalRow: any;
        /**
         * Eval get grid field data
         */
        getGridFieldData: any;
    }
}
export declare namespace GenModels {
    interface GridRow {
        /**
         * Get ot sets params
         */
        params: Array<GenModels.GridRowParam>;
        /**
         * Gets or sets back color for row
         */
        backColor: string;
        /**
         * Gets or sets back color for row
         */
        foreColor: string;
        /**
         * Gets or sets row was read
         */
        wasRead: boolean;
    }
}
export declare namespace GenModels {
    interface GridRowParam {
        /**
         * Gets or sets column name
         */
        columnName: string;
        /**
         * Gets or sets value
         */
        value: any;
        /**
         * Gets or sets typed value
         */
        typedValue: any;
        /**
         * Gets or sets raw value
         */
        rawValue: any;
        /**
         * Gets or sets column order
         */
        order: number;
    }
}
export declare namespace GenModels {
    interface GridSorting {
        /**
         * sorting column name
         */
        columnName: string;
        /**
         * column sorting order
         */
        order: number;
        /**
         * Sorting direction
         */
        ascending: boolean;
    }
}
export declare namespace GenModels {
    interface GridGrouping {
        /**
         * sorting column name
         */
        columnName: string;
        /**
         * Sorting direction
         */
        ascending: boolean;
    }
}
export declare namespace GenModels {
    interface LayoutViewModel {
        /**
         * Gets or sets a layout model
         */
        layoutModel: GenModels.LayoutModel;
    }
}
export declare namespace GenModels {
    interface ControlModel {
        /**
         * Gets or sets control type name
         */
        controlTypeName: string;
        /**
         * Gets control properties
         */
        properties: {
            [name: string]: any;
        };
        /**
         * Gets control children
         */
        children: Array<GenModels.ControlModel>;
    }
}
export declare namespace GenModels {
    interface LayoutModel extends GenModels.ControlModel {
        /**
         * Gets or sets layout info model
         */
        layoutInfo: GenModels.LayoutInfoModel;
    }
}
export declare namespace GenModels {
    interface LayoutInfoModel {
        /**
         * Gets or sets layout type
         */
        type: GenModels.LayoutType;
        /**
         * Gets or sets action
         */
        action: GenModels.LayoutAction;
        /**
         * Gets or sets layout mode
         */
        layoutMode?: string;
        /**
         * Gets or sets device type
         */
        deviceType: GenModels.DeviceType;
        /**
         * Gets or sets locale identifier
         */
        localeId: number;
        /**
         * Gets or sets layout name
         */
        name: string;
        /**
         * Gets or sets layout identifier
         */
        id: string;
        /**
         * Gets operation
         */
        operations: Array<GenModels.OperationModel>;
    }
}
export declare namespace GenModels {
    interface OperationModel {
        /**
         * Gets operation identifier
         */
        id: string;
        /**
         * Gets operation identifier
         */
        builtInId?: string;
        /**
         * Gets operation caption
         */
        caption: string;
        /**
         * Gets value indicating whether operation is available
         */
        available: boolean;
        /**
         * Gets alias
         */
        alias: string;
    }
}
export declare namespace GenModels {
    interface GridFilterRequestModel {
        /**
         * Gets or sets folder identifier
         */
        folderId: string;
        /**
         * Gets or sets view identifier
         */
        viewId: string;
    }
}
export declare namespace GenModels {
    interface GetRequestModel {
        layoutPositionName: string;
        cardId?: string;
        layoutParams: {
            [name: string]: string;
        };
    }
}
export declare namespace GenModels {
    interface GetPartRequestModel extends GenModels.GetRequestModel {
        controlName: string;
    }
}
export declare namespace GenModels {
    interface HistorySearchQuery {
        /**
         * Card id
         */
        cardId: string;
        /**
         * Employee name
         */
        employeeName: string;
        /**
         * Date
         */
        date?: string;
        /**
         * Event name
         */
        eventSearch: string;
        /**
         * List of operations ids to hide
         */
        operationsToHide: Array<string>;
        /**
         * Cache id
         */
        cacheId: string;
        /**
         * Count of items to skip (paginator logic)
         */
        skip?: number;
        /**
         * Max items count in the result (paginator logic)
         */
        maxCount?: number;
        /**
         * Edit operation id
         */
        editOperation: string;
    }
}
export declare namespace GenModels {
    interface HistorySearchResult {
        /**
         * History records
         */
        records: Array<GenModels.HistoryRecord>;
        /**
         * Show if result has more records (for pagination)
         */
        hasMore: boolean;
        /**
         * Cache id
         */
        cacheId: string;
        /**
         * Replace (if true) or concat (if false) to existing history records (for pagination).
         */
        renew: boolean;
    }
}
export declare namespace GenModels {
    interface HistoryRecord {
        /**
         * Record id
         */
        logNewId: string;
        /**
         * Record item id
         */
        id: number;
        /**
         * Record date
         */
        date: string;
        /**
         * Record user-readable event description
         */
        event: string;
        /**
         * Author of history record
         */
        author: GenModels.HistoryEmployee;
    }
}
export declare namespace GenModels {
    interface HistoryEmployee {
        /**
         * Name to display
         */
        displayName: string;
    }
}
export declare namespace GenModels {
    interface CardKindInfoModel {
        /**
         * Gets or sets card type id
         */
        cardTypeId: string;
        /**
         * Gets or sets kind name
         */
        kindId: string;
        /**
         * Gets or sets kind name
         */
        name: string;
        /**
         * Gets or set value indicated where kind is default
         */
        isDefault: boolean;
        /**
         * Gets or set value indicated where kind is not available
         */
        notAvailable: boolean;
        /**
         * Gets or set value indicated where kind is not allowed to select
         */
        notSelectable: boolean;
        /**
         * Gets or set child kinds
         */
        kinds: Array<GenModels.CardKindInfoModel>;
    }
}
export declare namespace GenModels {
    interface GetTasksListRequestModel {
        /**
         * Id of the task list card.
         */
        taskListId: string;
        /**
         * Filter result by these kinds. If array is empty or null, filter will not be applied.
         */
        availableKinds: Array<string>;
    }
}
export declare namespace GenModels {
    interface TaskDataModel {
        /**
         * Gets card identifier
         */
        cardId: string;
        /**
         * Gets card type identifier
         */
        cardTypeId: string;
        /**
         * Gets kind identifier
         */
        kindId: string;
        /**
         * Gets task name
         */
        taskName: string;
        /**
         * Gets view route name
         */
        viewRouteName: string;
        /**
         * Gets group task flag
         */
        isGroupTask: boolean;
        /**
         * Gets state name
         */
        stateDisplayName: string;
        /**
         * Gets task state class name
         */
        stateClassName: string;
        /**
         * Gets task state type
         */
        stateType: number;
        /**
         * Gets performer name
         */
        performerDisplayName: string;
        /**
         * Gets start date
         */
        startDate?: string;
        /**
         * Gets end date
         */
        endDate?: string;
    }
}
export declare namespace GenModels {
    interface GetChildTasksCommentsRequestModel {
        /**
         * Id of the task card.
         */
        taskId: string;
        /**
         * Where in the card stored the comment.
         */
        commentBinding: GenModels.SimpleBindingInfo;
        /**
         * Where in the card stored the comment.
         */
        commentFileBinding: GenModels.SimpleBindingInfo;
        /**
         * Max depth of child task nesting
         */
        nestingLevel: number;
    }
}
export declare namespace GenModels {
    interface SimpleBindingInfo {
        /**
         * Gets or sets section identifier
         */
        sectionId: string;
        /**
         * Gets or sets field alias
         */
        fieldAlias: string;
    }
}
export declare namespace GenModels {
    interface GetChildTasksCommentsResponseModel {
        /**
         * Id of the task card.
         */
        childTaskComments: Array<GenModels.ChildTaskCommentModel>;
        /**
         * Where in the card stored the comment.
         */
        taskHasCommentFile: boolean;
    }
}
export declare namespace GenModels {
    interface ChildTaskCommentModel {
        /**
         * Task identifier
         */
        cardId: string;
        /**
         * Task name
         */
        taskName: string;
        /**
         * Task state name
         */
        stateDisplayName: string;
        /**
         * Task name
         */
        comment: string;
        /**
         * Comment file info
         */
        commentFile: GenModels.CommonFileModel;
        /**
         * Gets performer name
         */
        performerDisplayName: string;
    }
}
export declare namespace GenModels {
    interface CommonFileModel {
        /**
         * File name
         */
        fileName: string;
        /**
         * File id
         */
        fileId: string;
        /**
         * Link to open file with webdav
         */
        webDavLink: string;
        /**
         * Link to open file with webdav readonly
         */
        webDavReadonlyLink: string;
        /**
         * Does file preview available for this file extension
         */
        filePreviewAvailable: boolean;
        /**
         * Does file locked by someone
         */
        isLocked: boolean;
    }
}
export declare namespace GenModels {
    interface AddTaskCommentsRequestModel {
        /**
         * Id of the task card.
         */
        taskId: string;
        /**
         * Where in the card stored the comment.
         */
        commentBinding: GenModels.SimpleBindingInfo;
        /**
         * Where in the card stored the comment.
         */
        commentFileBinding: GenModels.SimpleBindingInfo;
        /**
         * Comment text to add
         */
        comment: string;
        /**
         * Comment file to add.
         */
        commentFileId?: string;
    }
}
export declare namespace GenModels {
    interface CreateChildTasksRequestModel {
        /**
         * Id of the task card.
         */
        taskId: string;
        /**
         * Chlid tasks name
         */
        name: string;
        /**
         * Chlid tasks description
         */
        description: string;
        /**
         * Time to execute
         */
        executionDate?: string;
        /**
         * Staff employees to become performers of the created tasks. One task per performer will be created.
         */
        performers: Array<string>;
    }
}
export declare namespace GenModels {
    interface GetDelegationRecordsRequestModel {
        /**
         * Task id
         */
        taskId: string;
        /**
         * Start performers mode
         */
        startPerformersMode: GenModels.DisplayPerformersStartPerformersMode;
        /**
         * View mode
         */
        viewMode: GenModels.DisplayPerformersViewMode;
        /**
         * Tip mode
         */
        tipMode: GenModels.DisplayPerformersTipMode;
        /**
         * Extended tip mode
         */
        extendedTipMode: GenModels.DisplayPerformersTipMode;
    }
}
export declare namespace GenModels {
    interface DelegateRecords {
        /**
         * Start performers
         */
        startPerformers: Array<GenModels.DisplayPerformersPerformer>;
        /**
         * Delegation records
         */
        records: Array<GenModels.DelegateRecord>;
    }
}
export declare namespace GenModels {
    interface DisplayPerformersPerformer {
        /**
         * Gets or sets id
         */
        id: string;
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets tip
         */
        tip: string;
        /**
         * Gets or sets extended tip
         */
        extendedTip: string;
    }
}
export declare namespace GenModels {
    interface DelegateRecord {
        /**
         * Event
         */
        event: GenModels.DelegateEvent;
        /**
         * Initiator
         */
        initiator: GenModels.EmployeeModel;
        /**
         * Performers
         */
        performers: Array<GenModels.EmployeeModel>;
        /**
         * Date
         */
        date: string;
        /**
         * Comment
         */
        comment: string;
    }
}
export declare namespace GenModels {
    interface EmployeeModel {
        /**
         * Unique identificator of employee
         */
        id: string;
        /**
         * Define if user is current
         */
        isCurrent: boolean;
        /**
         * Employee account name
         */
        accountName: string;
        /**
         * Employee display name
         */
        displayName: string;
        /**
         * Employee first name
         */
        firstName: string;
        /**
         * Employee last name
         */
        lastName: string;
        /**
         * Employee middle name
         */
        middleName: string;
        /**
         * Employee position
         */
        position: string;
        /**
         * Gets or sets security identifier
         */
        sdid?: string;
        /**
         * Represents value indicating whether employee is favourite performer
         */
        isFavoritePerformer: boolean;
        /**
         * Gets or sets unit identifier
         */
        unitId: string;
        /**
         * Email
         */
        email: string;
        /**
         * Name of department of employee
         */
        departmentName: string;
    }
}
export declare namespace GenModels {
    interface AgreementListModel {
        documentNumber: string;
        documentName: string;
        items: Array<GenModels.AgreementListItemModel>;
    }
}
export declare namespace GenModels {
    interface AgreementListItemModel {
        date: string;
        employeeDisplayText: string;
        departmentName: string;
        comment: string;
        decisionText: string;
    }
}
export declare namespace GenModels {
    interface LayoutAgreementManagementModel {
        /**
         * Gets or sets is create enabled
         */
        enableCreate: boolean;
        /**
         * Gets or sets is create enabled
         */
        isNew: boolean;
        /**
         * Gets agreement card identifier
         */
        agreementCardId: string;
        /**
         * Gets or sets agreement state type
         */
        stateType: GenModels.AgreementStateType;
        /**
         * If EnableCreate is false, this property contains message for user, explaining why it is disabled.
         */
        createDisableReason: string;
        /**
         * Timestamp of document card on moment of model loading
         */
        documentTimestamp: number;
    }
}
export declare namespace GenModels {
    interface AgreementManagementStartModel {
        agreementManagement: GenModels.AgreementManagementModel;
        templates: Array<GenModels.AgreementTemplateModel>;
    }
}
export declare namespace GenModels {
    interface AgreementManagementModel {
        reconciliationCardId: string;
        isMainFileExists: boolean;
        isNew: boolean;
        stateType: GenModels.AgreementStateType;
    }
}
export declare namespace GenModels {
    interface AgreementTemplateModel {
        creationSettingId: string;
        templateId: string;
        name: string;
        stages: Array<GenModels.StageModel>;
        startNoFiles: boolean;
        startNoEdit: boolean;
        loaded: boolean;
    }
}
export declare namespace GenModels {
    interface StageModel {
        stageId: string;
        name: string;
        allowEdit: boolean;
        duration: number;
        specificDuration: boolean;
        approvalType: GenModels.ApprovalType;
        hasBusinessProcess: boolean;
        excluded: boolean;
        order: number;
        allowExcludeStage: boolean;
        stageInstanceInfo: GenModels.ActualStageData;
        approvers: Array<GenModels.ApproverModel>;
        allowEditApprovalType: boolean;
    }
}
export declare namespace GenModels {
    interface ActualStageData {
        stageSemantics: GenModels.StageSemantics;
        currentStage: boolean;
    }
}
export declare namespace GenModels {
    interface ApproverModel {
        employee: GenModels.ApproverEmployeeModel;
        excluded: boolean;
    }
}
export declare namespace GenModels {
    interface ApproverEmployeeModel {
        id: string;
        isCurrent: boolean;
        displayName: string;
        firstName: string;
        lastName: string;
        middleName: string;
        position: string;
        isFavoritePerformer: boolean;
        unitId: string;
    }
}
export declare namespace GenModels {
    interface AgreementManagementEditModel {
        agreementManagement: GenModels.AgreementManagementModel;
        availableAgreementOperations: Array<GenModels.ApprovalOperationKind>;
        stages: Array<GenModels.StageModel>;
        canInterruptCurrentStages: boolean;
    }
}
export declare namespace GenModels {
    interface ReconcilationCreationModel {
        documentId: string;
        creationSettingId: string;
        stages: Array<GenModels.StageChangeModel>;
    }
}
export declare namespace GenModels {
    interface StageChangeModel {
        stageId: string;
        order: number;
        excluded: boolean;
        duration: number;
        specificDuration: boolean;
        approvalType: GenModels.ApprovalType;
        approversChanged: boolean;
        approvers: Array<GenModels.ApproverModel>;
    }
}
export declare namespace GenModels {
    interface ReconcilationEditModel {
        documentId: string;
        reconcileCardId: string;
        stages: Array<GenModels.StageChangeModel>;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryViewModel {
        approvalReconcileCardId: string;
        approvalTaskCardId: string;
        currentCycle: GenModels.ApprovalHistoryCycleModel;
        cycles: Array<GenModels.ApprovalHistoryCycleModel>;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryCycleModel {
        number: number;
        isCurrent: boolean;
        stages: Array<GenModels.ApprovalHistoryStageModel>;
        ownerCardId: string;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryStageModel {
        name: string;
        approvalType?: GenModels.ApprovalType;
        stageItems: Array<GenModels.ApprovalHistoryStageItemModel>;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryStageItemModel {
        employeeText: string;
        employeeId: string;
        decisionDate: string;
        comment: string;
        hasComment: boolean;
        decisionName: string;
        decision?: GenModels.DecisionSemantics;
        stageDecision?: GenModels.StageSemantics;
        addedFileCardModels: Array<GenModels.ApprovalHistoryFileModel>;
        commentFileData: GenModels.ApprovalHistoryFileCommentModel;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryFileModel {
        fileCardId: string;
        name: string;
        currentVersion: GenModels.ApprovalHistoryFileVersionModel;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryFileVersionModel {
        versionId: string;
        fileId: string;
    }
}
export declare namespace GenModels {
    interface ApprovalHistoryFileCommentModel {
        fileId: string;
        name: string;
    }
}
export declare namespace GenModels {
    interface LayoutCardCreateParams {
        /**
         * Card type identifier
         */
        cardTypeId?: string;
        /**
         * Kind identifier
         */
        kindId?: string;
        /**
         * Folder identifier
         */
        folderId?: string;
        /**
         * Template identifier
         */
        templateId?: string;
        /**
         * Parent card identifier
         */
        parentCardId?: string;
        /**
         * Gets or sets layout mode
         */
        layoutMode?: string;
        /**
         * Create new card as link in another card
         */
        createAsLink: GenModels.CreateAsLinkParams;
    }
}
export declare namespace GenModels {
    interface CreateAsLinkParams {
        /**
         * Source link card
         */
        sourceCardId: string;
        /**
         * Timestamp of the source card
         */
        sourceCardTimestamp: number;
        /**
         * Link kind
         */
        linkTypeId: string;
        /**
         * Where links placed in the card
         */
        linksBinding: GenModels.SimpleBindingInfo;
        /**
         * If link is hard link, then removing source card will also remove destination card
         */
        saveHardLink: boolean;
        /**
         * If link is report
         */
        isReport: boolean;
        /**
         * Edit operation
         */
        editOperation: string;
    }
}
export declare namespace GenModels {
    interface LayoutCardViewModel extends GenModels.LayoutViewModel {
        /**
         * Gets card info model
         */
        cardInfo: GenModels.CardInfoModel;
    }
}
export declare namespace GenModels {
    interface CardInfoModel {
        /**
         * Gets or sets card id
         */
        id: string;
        /**
         * Gets or sets card type id
         */
        typeId: string;
        /**
         * Gets or sets card kind id
         */
        kindId?: string;
        /**
         * Gets or sets a timestamp of the card.
         */
        timestamp: number;
        /**
         * Create card as link in another card
         */
        createAsLink: GenModels.CreateAsLinkParams;
        /**
         * Parent card identifier
         */
        parentCardId?: string;
        /**
         * Folder, that specified in url parameter
         */
        createInFolder?: string;
        /**
         * If true, specified card can't be created in the folder, that specified in url parameter
         */
        createInCurrentFolderForbidden: boolean;
        /**
         * Gets or sets card lock info
         */
        lockInfo: GenModels.LockInfoViewModel;
        /**
         * Gets or sets card creation date
         */
        createDate: string;
    }
}
export declare namespace GenModels {
    interface LockInfoViewModel {
        /**
         * Gets or sets whether card a locked
         */
        isLocked: boolean;
        /**
         * Gets or sets locking user account name
         */
        accountName: string;
    }
}
export declare namespace GenModels {
    interface LayoutPartParams {
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets layout type
         */
        layoutMode?: string;
        /**
         * Get or sets root control name
         */
        rootControlName: string;
        /**
         * Get or set include root
         */
        includeRootControl: boolean;
        /**
         * Data passed from caller
         */
        contextData: {
            [name: string]: any;
        };
    }
}
export declare namespace GenModels {
    interface SaveControlDataModel {
        /**
         * Gets or sets a card id
         */
        cardId: string;
        /**
         * Gets or sets a card timestamp
         */
        timestamp: number;
        /**
         * Gets or sets mode
         */
        layoutMode?: string;
        /**
         * Gets or sets layout type
         */
        layoutAction: GenModels.LayoutAction;
        /**
         * Gets or sets control data
         */
        bindings: Array<GenModels.BindingsWriteRequest>;
        /**
         * Create card as link in another card
         */
        createAsLink: GenModels.CreateAsLinkParams;
        /**
         * Folder, where card should be placed
         */
        createInFolder: string;
        /**
         * Gets or sets a parent card id (actual for tasks)
         */
        parentCardId?: string;
        /**
         * Gets or sets a card type id
         */
        cardTypeId: string;
    }
}
export declare namespace GenModels {
    interface BindingsWriteRequest {
        /**
         * Gets or sets control name
         */
        controlName: string;
        /**
         * Gets or sets control type name
         */
        controlTypeName: string;
        /**
         * Gets control bindings results
         */
        bindingResults: Array<GenModels.BindingResult>;
    }
}
export declare namespace GenModels {
    interface BindingResult {
        /**
         * Gets or sets binding property name
         */
        name: string;
        /**
         * Extra information about binding itself.
         */
        metadata: Array<GenModels.BindingMetadata>;
        /**
         * Gets items collection
         */
        values: Array<string>;
        /**
         * Binding value
         */
        value: any;
        /**
         * Gets or sets edit operation
         */
        editOperation: string;
    }
}
export declare namespace GenModels {
    interface BindingMetadata {
        /**
         * Metadata key
         */
        key: string;
        /**
         * Metadata value
         */
        value: string;
    }
}
export declare namespace GenModels {
    interface ChangeStateDataModel {
        /**
         * Gets or sets card identifier
         */
        cardId: string;
        /**
         * Gets or sets operation identifier
         */
        operationId: string;
        /**
         * Gets or sets layout type
         */
        layoutMode?: string;
        /**
         * Gets or sets change state comment
         */
        comment: string;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerSearchQuery {
        /**
         * search string
         */
        searchText: string;
        /**
         * Data source
         */
        searchArea?: GenModels.DirectoryDesignerSearchArea;
        /**
         * Department types to search
         */
        rootNodeId?: string;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerSearchResult {
        /**
         * List of directory designer row items
         */
        items: Array<GenModels.DirectoryDesignerRowModel>;
        /**
         * If there are more items (for pagination)
         */
        hasMore: boolean;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerRowModel {
        /**
         * Row id
         */
        id: string;
        /**
         * Row name
         */
        name: string;
        /**
         * Row description
         */
        description: string;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerLoadTreeQuery {
        /**
         * Department types to search
         */
        rootNodeId?: string;
        /**
         * Data source
         */
        searchArea?: GenModels.DirectoryDesignerSearchArea;
        /**
         * current node id
         */
        currentNodeId?: string;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerTreeNode {
        /**
         * Node id
         */
        id: string;
        /**
         * Node name
         */
        name: string;
        /**
         * Node type
         */
        nodeType: GenModels.DirectoryDesignerTreeNodeType;
        /**
         * Was children autoloaded or not
         */
        childrenLoaded: boolean;
        /**
         * Children tree node
         */
        children: Array<GenModels.DirectoryDesignerTreeNode>;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerSearchTreeQuery {
        /**
         * Data source
         */
        searchArea?: GenModels.DirectoryDesignerSearchArea;
        /**
         * Department types to search
         */
        rootNodeId?: string;
        /**
         * Search string
         */
        searchQuery: string;
        /**
         * Search result number
         */
        searchResultNumber: number;
        /**
         * Search mode
         */
        searchMode?: GenModels.DirectoryDesignerSearchMode;
    }
}
export declare namespace GenModels {
    interface DirectoryDesignerSearchTreeResult {
        /**
         * Search results items data
         */
        items: Array<GenModels.DirectoryDesignerTreeNode>;
        /**
         * Total search results count
         */
        totalResultsCount: number;
        /**
         * Search result number
         */
        searchResultNumber: number;
        /**
         * Matched element id
         */
        matchedElementId: string;
        /**
         * Matched element field name
         */
        matchedFieldName: string;
        /**
         * Matched element field value
         */
        matchedFieldValue: string;
    }
}
export declare namespace GenModels {
    interface GenerateNumberRequest {
        /**
         * Document card id
         */
        cardId: string;
        /**
         * Save the number to card or not
         */
        save: boolean;
        /**
         * Section and field, where number id stored in the card
         */
        info: GenModels.BindingInfo;
        /**
         * Id of the rule, that should be used to generate number
         */
        generationRuleId?: string;
    }
}
export declare namespace GenModels {
    interface BindingInfo {
        /**
         * Bound field alias in database
         */
        fieldAlias: string;
        /**
         * Bound section id
         */
        sectionId: string;
        /**
         * Gets or sets property name
         */
        propertyName: string;
        /**
         * Gets or sets edit operation
         */
        editOperation: string;
    }
}
export declare namespace GenModels {
    interface NumberInfo {
        /**
         * Gets or sets number
         */
        number: string;
        /**
         * Gets or sets numerator card busy numbers row identifier
         */
        id: string;
    }
}
export declare namespace GenModels {
    interface ReleaseNumberRequest {
        /**
         * Card id
         */
        cardId: string;
        /**
         * Section and field, where number id stored in the card
         */
        info: GenModels.BindingInfo;
        /**
         * Document number identifier
         */
        numberId: string;
    }
}
export declare namespace GenModels {
    interface SendForAcquaintanceRequest {
        /**
         * Card id
         */
        cardId: string;
        /**
         * Employees that should acquaintance document
         */
        employeeIds: Array<string>;
        /**
         * Acquaintance end date
         */
        endDate?: string;
    }
}
export declare namespace GenControllers {
    interface FileUploadApiController {
    }
}
export declare namespace GenModels {
    interface GetFilesRequest {
        /**
         * Card id
         */
        cardId: string;
        /**
         * Query options
         */
        options: GenModels.GetFilesQueryOptions;
    }
}
export declare namespace GenModels {
    interface GetFilesQueryOptions {
        /**
         * Count of items to skip
         */
        skipCount: number;
        /**
         * Max items count in the result
         */
        maxCount?: number;
    }
}
export declare namespace GenModels {
    interface FileListDataModelBase {
        /**
         * New timestamp of the card
         */
        timestamp: number;
        /**
         * Updated list of the files in the card
         */
        files: Array<GenModels.LayoutFileModel>;
        /**
         * Gets wther document has any signature
         */
        hasAnySignature: boolean;
        /**
         * Total count of files
         */
        totalCount: number;
    }
}
export declare namespace GenModels {
    interface LayoutFileModel {
        /**
         * File name with extension
         */
        name: string;
        /**
         * File card ID
         */
        fileCardId: string;
        /**
         * File ID
         */
        fileId: string;
        /**
         * Is file locked
         */
        isLocked: boolean;
        /**
         * Is file preview supported
         */
        isFilePreviewSupported: boolean;
        /**
         * Previous versions of the file
         */
        childVersions: Array<GenModels.VersionedFileModel>;
        /**
         * Current version of the file
         */
        currentVersion: GenModels.VersionedFileModel;
        /**
         * Has file digital signature or not
         */
        hasFileSignature: boolean;
        /**
         * Is file main or additional
         */
        isMain: boolean;
        /**
         * Link for open file via WebDav
         */
        webDavLink: string;
        /**
         * Link for open file via WebDav in readonly mode
         */
        webDavReadonlyLink: string;
        /**
         * File versions count
         */
        versionsCount: number;
    }
}
export declare namespace GenModels {
    interface VersionedFileModel {
        /**
         * Gets or sets file identifier
         */
        id: string;
        /**
         * Gets or set version id
         */
        versionId: string;
        /**
         * Gets or set version path
         */
        versionPath: string;
        /**
         * Gets or set version number
         */
        versionNumber: number;
        /**
         * Gets or set version author
         */
        author: string;
        /**
         * Gets or sets creation date
         */
        creationDate: string;
        /**
         * Gets or sets file version comments
         */
        comments: Array<GenModels.VersionedFileCommentModel>;
    }
}
export declare namespace GenModels {
    interface VersionedFileCommentModel {
        /**
         * Gets or sets identifier
         */
        id: string;
        /**
         * Gets or sets date
         */
        date: string;
        /**
         * Gets or sets comment
         */
        comment: string;
        /**
         * Gets or sets author
         */
        author: string;
        /**
         * Gets or sets author
         */
        authorId: string;
    }
}
export declare namespace GenModels {
    interface GetVersionsRequest {
        /**
         * Card id
         */
        cardId: string;
    }
}
export declare namespace GenModels {
    interface FileListVersionsDataModel {
        /**
         * Updated list of the files versions in the card
         */
        versions: Array<GenModels.VersionedFileModel>;
    }
}
export declare namespace GenModels {
    interface GetCommentsRequest {
        /**
         * File card id
         */
        fileCardId: string;
        /**
         * Version id
         */
        versionId: string;
    }
}
export declare namespace GenModels {
    interface VersionedFileCommentListModel {
        /**
         * Gets or sets file versin comments
         */
        comments: Array<GenModels.VersionedFileCommentModel>;
        /**
         * Gets or sets file name
         */
        fileName: string;
        /**
         * Gets or sets file author name
         */
        fileAuthor: string;
        /**
         * Gets or sets file author id
         */
        fileAuthorId: string;
        /**
         * Gets or sets file creation date
         */
        fileCreationDate: string;
        /**
         * Gets or sets version
         */
        version: string;
        /**
         * Get version id
         */
        versionId: string;
        /**
         * Get current user
         */
        currentEmployee: string;
        /**
         * Gets or sets Id of current employee
         */
        currentEmployeeId: string;
        /**
         * Gets or sets file card identifier
         */
        fileCardId: string;
        /**
         * Gets or sets file card timestamp
         */
        timestamp: number;
    }
}
export declare namespace GenModels {
    interface VersionedFileCommentCreateModel {
        /**
         * Gets or sets comment identifier
         */
        commentId?: string;
        /**
         * Gets or sets container card identifier
         */
        cardId: string;
        /**
         * Gets or sets timestamp
         */
        timestamp: number;
        /**
         * Gets or sests comment
         */
        comment: string;
        /**
         * Gets or sets file card identifier
         */
        fileCardId: string;
        /**
         * Gets or sets version identifier
         */
        versionId: string;
    }
}
export declare namespace GenModels {
    interface VersionedFileCommentDeleteModel {
        /**
         * Gets or sets comment identifier
         */
        commentId: string;
        /**
         * Gets or sets container card identifier
         */
        cardId: string;
        /**
         * Gets or sets timestamp
         */
        timestamp: number;
        /**
         * Gets or sets file card identifier
         */
        fileCardId: string;
        /**
         * Gets or sets version identifier
         */
        versionId: string;
    }
}
export declare namespace GenModels {
    interface CommmonFileRequest {
        /**
         * Owner card id
         */
        ownerCardId: string;
        /**
         * File card id
         */
        fileCardId: string;
        /**
         * Timestamp
         */
        timestamp?: number;
    }
}
export declare namespace GenModels {
    interface FileListDataModel extends GenModels.FileListDataModelBase {
    }
}
export declare namespace GenModels {
    interface GetUserFoldersTreeDataRequest {
        /**
         * Folder id. If value provided, action will return subfolders for specified folder.
         */
        folderId?: string;
    }
}
export declare namespace GenModels {
    interface FolderNode {
        /**
         * Gets or sets folder identifier
         */
        id: string;
        /**
         * Equalent to Id
         */
        additionalId: string;
        /**
         * Gets or sets folder name
         */
        name: string;
        /**
         * Gets or sets folder node type
         */
        type: GenModels.FolderNodeType;
        /**
         * Default folder view style
         */
        defaultStyle: GenModels.FolderNodeStyle;
        /**
         * Gets value indicating whether node has unloaded subfolders
         */
        hasUnloadedSubfolders: boolean;
        /**
         * Get or sets folder URL, when folder displayed as web page
         */
        url: string;
        /**
         * Gets or sets default view identifier
         */
        defaultViewId: string;
        /**
         * Gets or sets search identifier for virtual folder
         */
        searchId: string;
        /**
         * Gets or sets target folder identifier for delegate folder
         */
        targetFolderId: string;
        /**
         * Folder setting - seconds to auto refresh. Zero value inidicates, that autorefresh disabled.
         */
        refreshTimeout: number;
        /**
         * Folder setting - show unread counter
         */
        showUnreadCounter: boolean;
        /**
         * Folder setting
         */
        pagedSecurity: boolean;
        /**
         * Gets or sets subfolders
         */
        folders: Array<GenModels.FolderNode>;
    }
}
export declare namespace GenModels {
    interface CheckFolderForAvailableCardKindRequest {
        /**
         * Folder id, where card going to be placed
         */
        folderId: string;
        /**
         * Card id to check
         */
        cardId: string;
    }
}
export declare namespace GenModels {
    interface CheckResult {
        /**
         * Was check passed or not
         */
        passed: boolean;
        /**
         * If Passed is false, this property should contain reason, why check is failed.
         */
        failReason: string;
    }
}
export declare namespace GenModels {
    interface GetFolderInfoRequest {
        /**
         * Folder id
         */
        folderId: string;
        /**
         * How many levels of subfolders to return with model
         */
        loadSubfoldersLevel?: number;
    }
}
export declare namespace GenModels {
    interface GetFolderInfoWithParentsRequest {
        /**
         * Folder id
         */
        folderId: string;
    }
}
export declare namespace GenModels {
    interface FolderNodeWithParents {
        /**
         * List of parent nodes ids (path)
         */
        parentNodes: Array<string>;
        /**
         * Folder node
         */
        folderNode: GenModels.FolderNode;
    }
}
export declare namespace GenModels {
    interface DetachUserFoldersRequest {
        /**
         * Folders ids to detach
         */
        folderIds: Array<string>;
    }
}
export declare namespace GenModels {
    interface DeleteLinkRequest {
        /**
         * Show files for following links types
         */
        showFilesForLinksTypesIds: Array<string>;
        /**
         * Card id
         */
        cardId: string;
        /**
         * Simple binding info
         */
        info: GenModels.SimpleBindingInfo;
        /**
         * Link id
         */
        linkId: string;
        /**
         * Kind id for file cards
         */
        fileKindId?: string;
        /**
         * Card timestamp
         */
        timestamp: number;
    }
}
export declare namespace GenModels {
    interface LinksDataModel {
        /**
         * Updated list of the main files in the card
         */
        links: Array<GenModels.LayoutLinkModel>;
        bindingInfo: GenModels.SimpleBindingInfo;
        /**
         * Allowed card types, that can be added as links (for add existing card).
         */
        allowedLinkCardTypes: Array<string>;
        /**
         * Do model contains links or not
         */
        linksLoaded: boolean;
        /**
         * Total count of the links, including not loaded
         */
        totalLinksCount: number;
    }
}
export declare namespace GenModels {
    interface LayoutLinkModel {
        /**
         * Gets or sets link id
         */
        linkId: string;
        /**
         * Gets or sets display link name
         */
        displayName: string;
        /**
         * Gets or sets link type identifier
         */
        linkTypeId: string;
        /**
         * Gets or sets link type name
         */
        linkTypeName: string;
        /**
         * link kind
         */
        kind: GenModels.LinkKind;
        /**
         * Linked card Type is document
         */
        isDocument: boolean;
        /**
         * Linked card id
         */
        cardId: string;
        /**
         * File card id (if file card)
         */
        fileCardId?: string;
        /**
         * File card version id (if file card)
         */
        fileVersionId?: string;
        /**
         * Gets or sets Link creation date
         */
        creationDate?: string;
        /**
         * Display name of the author of the link.
         */
        authorDisplayName: string;
        /**
         * Link description
         */
        description: string;
        /**
         * Url
         */
        url: string;
    }
}
export declare namespace GenModels {
    interface DeleteFileRequest extends GenModels.DeleteLinkRequest {
        /**
         * Document (that containts file with FileCardId) card id
         */
        documentCardId: string;
        /**
         * File card id
         */
        fileCardId: string;
    }
}
export declare namespace GenModels {
    interface LinkType {
        /**
         * Link type id
         */
        linkTypeId: string;
        /**
         * link type display name
         */
        displayName: string;
    }
}
export declare namespace GenModels {
    interface AllowedCardKind {
        /**
         * Kind id of the allowed card
         */
        kindId: string;
        /**
         * Gets or sets value whether kind selected with descendants
         */
        withDescendants: boolean;
    }
}
export declare namespace GenModels {
    interface LayoutKindModel {
        /**
         * Card type id
         */
        cardTypeId: string;
        /**
         * Kind id of the allowed card
         */
        kindId: string;
        /**
         * Gets or sets kind name
         */
        name: string;
        /**
         * Gets or set child kinds
         */
        kinds: Array<GenModels.LayoutKindModel>;
        /**
         * Card creation is not available
         */
        notAvailable: boolean;
        /**
         * Whether custom layout available for this card kind or not
         */
        layoutAvailable: boolean;
    }
}
export declare namespace GenModels {
    interface LayoutLinkCreateParams {
        /**
         * Card, where link creation was initiated
         */
        sourceCardId: string;
        /**
         * Timestamp of the source card
         */
        sourceCardTimestamp: number;
        /**
         * Link kind
         */
        linkTypeId: string;
        /**
         * Kind id for file cards
         */
        fileKindId?: string;
        /**
         * Link destination card
         */
        destinationCardId: string;
        /**
         * Show files for following links types
         */
        showFilesForLinksTypesIds: Array<string>;
        /**
         * Where links placed in the card
         */
        linksBinding: GenModels.SimpleBindingInfo;
        /**
         * If link is hard link, then removing source card will also remove destination card
         */
        saveHardLink: boolean;
        /**
         * If link is report
         */
        isReport: boolean;
        /**
         * If link is attached file
         */
        isFile: boolean;
        /**
         * Edit operation
         */
        editOperation: string;
    }
}
export declare namespace GenModels {
    interface AddUrlLinkParams {
        /**
         * Card, that contains the link
         */
        cardId: string;
        /**
         * Binding info for the links in the card
         */
        bindingInfo: GenModels.SimpleBindingInfo;
        /**
         * Url
         */
        url: string;
        /**
         * link type id
         */
        linkTypeId?: string;
        /**
         * Show files for following links types
         */
        showFilesForLinksTypesIds: Array<string>;
        /**
         * Kind id for file cards
         */
        fileKindId?: string;
        /**
         * Known card timestamp
         */
        timestamp: number;
    }
}
export declare namespace GenModels {
    interface LayoutSetLinkDescriptionParams {
        /**
         * Card, that contains the link
         */
        cardId: string;
        /**
         * Binding info for the links in the card
         */
        bindingInfo: GenModels.SimpleBindingInfo;
        /**
         * Link id to update
         */
        linkId: string;
        /**
         * Kind id for file cards
         */
        fileKindId?: string;
        /**
         * Show files for following links types
         */
        showFilesForLinksTypesIds: Array<string>;
        /**
         * Description to set
         */
        newDescription: string;
        /**
         * Known card timestamp
         */
        timestamp: number;
    }
}
export declare namespace GenModels {
    interface GetLinksRequest {
        /**
         * Card id
         */
        cardId: string;
        /**
         * Kind id for file cards
         */
        fileKindId?: string;
        /**
         * Show files for following links types
         */
        showFilesForLinksTypesIds: Array<string>;
        /**
         * Binding info
         */
        bindingInfo: GenModels.SimpleBindingInfo;
    }
}
export declare namespace GenModels {
    interface CheckReadMainFileAvailableRequest {
        /**
         * Card id
         */
        cardId: string;
    }
}
export declare namespace GenModels {
    interface DepartmentSearchQuery {
        /**
         * search string
         */
        searchText: string;
        /**
         * Data source
         */
        source: GenModels.DepartmentDataSource;
        /**
         * Department types to search
         */
        itemTypes: GenModels.SearchDepartmentType;
        /**
         * Count of items to skip (paginator logic)
         */
        skipCount?: number;
        /**
         * Max items count in the result (paginator logic)
         */
        maxCount?: number;
    }
}
export declare namespace GenModels {
    interface FindDepartmentsResponse {
        /**
         * List of department items
         */
        items: Array<GenModels.DepartmentModel>;
        /**
         * If there are more items (for pagination)
         */
        hasMore: boolean;
    }
}
export declare namespace GenModels {
    interface DepartmentLoadTreeQuery {
        /**
         * Parent department identifier
         */
        parentNodeId?: string;
        /**
         * depth of search
         */
        treeLevelDown: number;
        /**
         * Data source
         */
        source: GenModels.DepartmentDataSource;
        /**
         * Department types to search
         */
        itemTypes: GenModels.SearchDepartmentType;
    }
}
export declare namespace GenModels {
    interface DepartmentTreeNode {
        /**
         * Node Id
         */
        id: string;
        /**
         * Node name
         */
        name: string;
        /**
         * Node full name
         */
        fullName: string;
        /**
         * Node department type
         */
        departmentType: GenModels.DepartmentType;
        /**
         * Shows if all children were loaded (for pagination)
         */
        childrenLoaded: boolean;
        /**
         * Shows if node has children
         */
        hasChildren: boolean;
        /**
         * Shows if node has employee
         */
        hasEmployee?: boolean;
        /**
         * Node children (can keep only part of children for pagination)
         */
        children: Array<GenModels.DepartmentTreeNode>;
    }
}
export declare namespace GenModels {
    interface DepartmentFindInTreeQuery {
        /**
         * search string
         */
        searchQuery: string;
        /**
         * Data source
         */
        source: GenModels.DepartmentDataSource;
        /**
         * Department types to search
         */
        itemTypes: GenModels.SearchDepartmentType;
    }
}
export declare namespace GenModels {
    interface DepartmentFindInTreeResult {
        /**
         * Found items
         */
        items: Array<GenModels.DepartmentTreeSearchResultNode>;
        /**
         * Total results count
         */
        totalResultsCount: number;
        /**
         * Search result number
         */
        searchResultNumber: number;
        /**
         * Matched field name
         */
        matchedFieldName: string;
        /**
         * Matched field value
         */
        matchedFieldValue: string;
        /**
         * Matched element id
         */
        matchedElementId: string;
    }
}
export declare namespace GenModels {
    interface DepartmentTreeSearchResultNode extends GenModels.DepartmentTreeNode {
        matched: boolean;
        /**
         * Name of the field in the element, that matched search query. if this field is not Name (otherwise null).
         */
        matchedFieldName: string;
        /**
         * Value of the matchedFieldName, if this field is not Name (otherwise null).
         */
        matchedFieldValue: string;
    }
}
export declare namespace GenModels {
    interface DepartmentExtendedModel extends GenModels.DepartmentModel {
        /**
         * Department email
         */
        email: string;
        /**
         * Department phone
         */
        phone: string;
    }
}
export declare namespace GenModels {
    interface StaffInfoRequestModel {
        /**
         * Employee id list to get info
         */
        employeeIds: Array<string>;
        /**
         * Department and organisation ids to get info
         */
        departmentIds: Array<string>;
        /**
         * Where to look for employees and departments
         */
        source: GenModels.DepartmentDataSource;
    }
}
export declare namespace GenModels {
    interface StaffInfoResponseModel {
        /**
         * Employee id list to get info
         */
        employeesInfo: Array<GenModels.EmployeeModelWithPoneAndEmail>;
        /**
         * Department and organisation ids to get info
         */
        departmentsInfo: Array<GenModels.DepartmentExtendedModel>;
    }
}
export declare namespace GenModels {
    interface EmployeeModelWithPoneAndEmail extends GenModels.EmployeeModel {
        /**
         * Employee phone
         */
        phone: string;
    }
}
export declare namespace GenModels {
    interface DepartmentLoadFlatQuery {
        /**
         * Parent department identifier
         */
        departmentId?: string;
        /**
         * Data source
         */
        source: GenModels.DepartmentDataSource;
        /**
         * Department types to search
         */
        itemTypes: GenModels.SearchDepartmentType;
        /**
         * Skip n departments from begin (pagination)
         */
        skip: number;
        /**
         * Max departments count in response (pagination)
         */
        maxCount: number;
    }
}
export declare namespace GenModels {
    interface DepartmentLoadFlatResponse {
        /**
         * List of department items
         */
        items: Array<GenModels.DepartmentFlatDigest>;
        /**
         * Total items count
         */
        totalItemsCount: number;
        /**
         * Directory timestamp
         */
        directoryTimestamp: number;
    }
}
export declare namespace GenModels {
    interface DepartmentFlatDigest {
        /**
         * Department tree node data
         */
        data: GenModels.DepartmentTreeNode;
        /**
         * True if department tree node data has any children, and false otherwise
         */
        hasChildren?: boolean;
    }
}
export declare namespace GenModels {
    interface DepartmentSearchFlatQuery {
        /**
         * Data source
         */
        source: GenModels.DepartmentDataSource;
        /**
         * item types
         */
        itemTypes: GenModels.SearchDepartmentType;
        /**
         * Text to search
         */
        searchText: string;
        /**
         * Department id
         */
        departmentId?: string;
        /**
         * Count of items to skip (paginator logic)
         */
        skip?: number;
        /**
         * Max items count in the result (paginator logic)
         */
        maxCount?: number;
    }
}
export declare namespace GenModels {
    interface DepartmentSearchFlatResponse {
        /**
         * Department's search items
         */
        items: Array<GenModels.DepartmentSearchFlatItem>;
        /**
         * Has more items
         */
        hasMore: boolean;
        /**
         * Directory timestamp
         */
        directoryTimestamp: number;
    }
}
export declare namespace GenModels {
    interface DepartmentSearchFlatItem extends GenModels.DepartmentFlatDigest {
        /**
         * Partner search info
         */
        searchInfo: GenModels.PartnerSearchInfo;
        /**
         * Path to search in
         */
        path: Array<GenModels.DepartmentModel>;
    }
}
export declare namespace GenModels {
    interface GetParentDepartmentsRequest {
        departmentId: string;
        /**
         * Staff or partner department
         */
        source: GenModels.DepartmentDataSource;
    }
}
export declare namespace GenModels {
    interface FindEmployeesRequest {
        /**
         * Search term
         */
        term: string;
        /**
         * Some unique id, describing place in UI, where value selection performed
         */
        kindId?: string;
        /**
         * How many records request should return
         */
        maxCount?: number;
        /**
         * How many records client already has from previous requests
         */
        skip?: number;
        /**
         * Resticts results to specified unit when is not null.
         */
        unitId?: string;
        /**
         * List of id of employees, that should be filtered from result list.
         */
        skipEmployees: Array<string>;
    }
}
export declare namespace GenModels {
    interface FindEmployeesResponse {
        /**
         * Search result
         */
        employees: Array<GenModels.EmployeeModel>;
        /**
         * Pagination logic
         */
        hasMore: boolean;
    }
}
export declare namespace GenModels {
    interface AddCardModalModel {
        /**
         * Links for creation of available cards
         */
        createLinks: Array<GenModels.AddCardModalModelLink>;
    }
}
export declare namespace GenModels {
    interface CardCreateLink {
        /**
         * Gets associated cardType
         */
        cardType: GenModels.CardTypeWeb;
        /**
         * Gets or sets KindId
         */
        kindId?: string;
        /**
         * Gets or sets ShowMoreEnabled
         */
        showMoreEnabled: boolean;
        /**
         * Gets or sets KindName
         */
        kindName: string;
    }
}
export declare namespace GenModels {
    interface CardTypeWeb {
        /**
         * Gets card create route
         */
        route: string;
        /**
         * Get value where indicate card wild save in selected folder
         */
        saveInFolder: boolean;
        /**
         * Get value where indicate card color
         */
        cssClass: string;
        /**
         * Gets card create route
         */
        cardTypeId: string;
        /**
         * Gets display name
         */
        displayName: string;
    }
}
export declare namespace GenModels {
    interface AddCardModalModelLink extends GenModels.CardCreateLink {
        /**
         * Card type
         */
        cardType: GenModels.CardTypeWeb;
        /**
         * Layout available
         */
        layoutAvailable: boolean;
        /**
         * Route
         */
        route: string;
        /**
         * Color CSS class name
         */
        colorCssClassName: string;
        /**
         * Default kind
         */
        defaultKind: string;
        /**
         * Save in folder
         */
        saveInFolder: string;
    }
}
export declare namespace GenModels {
    interface ApplicationSettings {
        /**
         * Gets or sets route settings
         */
        route: GenModels.RouteSettings;
        /**
         * Gets or sets current employee
         */
        employee: GenModels.EmployeeModel;
        /**
         * Gets or sets environment settings
         */
        environment: GenModels.EnvironmentSettings;
        /**
         * Gets or sets culture settings
         */
        culture: GenModels.CultureSettings;
        /**
         * Gets or sets realtime communication settings
         */
        realtimeCommunication: GenModels.RealtimeCommunicationSettings;
    }
}
export declare namespace GenModels {
    interface RouteSettings {
        /**
         * Gets or sets SammyPath to redirect after load
         */
        sammyPath: string;
        /**
         * Gets or sets whether log enabled
         */
        logEnabled: boolean;
    }
}
export declare namespace GenModels {
    interface EnvironmentSettings {
        /**
         * Gets or sets application path
         */
        applicationPath: string;
        /**
         * Gets or sets whether BundleEnableOptimization
         */
        bundleEnableOptimization: boolean;
        /**
         * Gets or sets whether FullTextSearchEnabled
         */
        fullTextSearchEnabled: boolean;
        /**
         * Gets or sets base alias
         */
        baseAlias: string;
        /**
         * Gets or sets max upload file item size
         */
        maxUploadFileItemSize: number;
    }
}
export declare namespace GenModels {
    interface CultureSettings {
        /**
         * Gets or sets name
         */
        name: string;
        /**
         * Gets or sets twoLetterISOLanguageName
         */
        twoLetterISOLanguageName: string;
        /**
         * Gets or sets NumberDecimalSeparator
         */
        numberDecimalSeparator: string;
        /**
         * Gets or sets PercentDecimalDigits
         */
        percentDecimalDigits: number;
    }
}
export declare namespace GenModels {
    interface RealtimeCommunicationSettings {
        /**
         * Gets or sets session id
         */
        sessionId: string;
        /**
         * Gets or sets whether log enabled
         */
        logEnabled: boolean;
        /**
         * Gets or sets message type, that unread counters service will send.
         */
        unreadCountersMessageType: string;
        /**
         * Gets ot sets initialization timeout
         */
        initializationTimeout: number;
        /**
         * Gets or sets whether inactive session message hide
         */
        inactiveSessionMessageHide: boolean;
    }
}
export declare namespace GenModels {
    interface CardNodeInfo {
        kindId: string;
        cardTypeId: string;
        caption: string;
        withDescendants: boolean;
    }
}
export declare namespace GenModels {
    interface DisplayPerformersModel {
        /**
         * Gets or sets start performers
         */
        startPerformers: Array<GenModels.DisplayPerformersPerformer>;
        /**
         * Gets or sets end performers
         */
        endPerformers: Array<GenModels.DisplayPerformersPerformer>;
        /**
         * Has history
         */
        hasHistory: boolean;
    }
}
export declare namespace GenModels {
    interface AgreementHistoryDataModel {
        /**
         * Gets or sets if history exists
         */
        historyExists: boolean;
        /**
         * Gets agreement card identifier
         */
        agreementCardId: string;
    }
}
export declare namespace GenModels {
    interface AgreementManagementButtonModel {
        agreementManagementOperation: GenModels.AgreementManagementOperations;
        displayName: string;
    }
}
export declare namespace GenModels {
    interface CardLinkDataModel {
        /**
         * ID карточки, на которую установлена ссылка.
         */
        cardId: string;
        /**
         * Значение Digest карточки. Данный текст будет отображен в качестве текста ссылки.
         */
        cardDigest: string;
        /**
         * Доступен ли текущему пользователю просмотр указанной карточки.
         * Данное свойство будет использовано для отключения ссылки и пунктов меню "Открыть" в контроле.
         */
        cardViewAllowed: boolean;
        /**
         * Доступен ли текущему пользователю чтение основного файла указанной карточки.
         * Данное свойство будет использовано для отключения пункта меню "Просмотреть файл" в контроле.
         */
        mainFileReadAllowed: boolean;
    }
}
export declare namespace GenModels {
    interface CreateKindDataModel {
        /**
         * Gets create route name
         */
        createRouteName: string;
        /**
         * Gets identifier
         */
        id: string;
        /**
         * Gets card type identifier
         */
        cardTypeId: string;
        /**
         * Gets display name
         */
        displayName: string;
        /**
         * Gets is template
         */
        isTemplate: boolean;
        /**
         * Do layouts available for the card
         */
        layoutAvailable: boolean;
        /**
         * It is node corresponsing to approval child task creation
         */
        isApprovingChildTasksNode: boolean;
    }
}
export declare namespace GenModels {
    interface EmployeeDataModel {
        /**
         * Unique identificator of employee
         */
        id?: string;
        /**
         * Define if user is current
         */
        isCurrent: boolean;
        /**
         * Employee display name
         */
        displayName: string;
        /**
         * Employee first name
         */
        firstName: string;
        /**
         * Employee last name
         */
        lastName: string;
        /**
         * Employee middle name
         */
        middleName: string;
        /**
         * Employee position
         */
        position: string;
        /**
         * Section and field name
         */
        fieldPath: string;
        /**
         * Path in directory
         */
        pathInDirectory: Array<GenModels.DepartmentExtendedModel>;
    }
}
export declare namespace GenModels {
    interface LayoutTableBindingModel {
        /**
         * Section id
         */
        sectionId: string;
        /**
         * How many first rows was skipped on rows loading
         */
        skippedCount: number;
        /**
         * Do section contains more rows at the end of the table (after loaded rows)
         */
        hasMore: boolean;
        /**
         * Rows loaded from the server
         */
        loadedRows: Array<string>;
        /**
         * Rows added on the client
         */
        addedRows: Array<string>;
        /**
         * Rows deleted on the client
         */
        deletedRows: Array<string>;
    }
}
export declare namespace GenModels {
    interface LayoutTableColumnInfo {
        /**
         * Column name
         */
        header: string;
        /**
         * Width
         */
        columnWidth: string;
        /**
         * Tooltip
         */
        tip: string;
        /**
         * Is column visible or not
         */
        visibility: boolean;
    }
}
export declare namespace GenModels {
    interface MultipleEmployeesDataModel {
        /**
         * Gets or sets employees
         */
        employees: Array<GenModels.EmployeeDataModel>;
        /**
         * Gets or sets field path
         */
        fieldPath: string;
    }
}
export declare namespace GenModels {
    interface OperationDataModel {
        /**
         * Gets or sets operation id
         */
        operationId: string;
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets tooltip
         */
        tooltip: string;
    }
}
export declare namespace GenModels {
    interface ElementsDataModel {
        /**
         * Available variants to select
         */
        elements: Array<GenModels.Element>;
        /**
         * Is empty key allowed
         */
        isEmptyKeyAllowed: boolean;
    }
}
export declare namespace GenModels {
    interface Element {
        /**
         * Unique key
         */
        key: string;
        /**
         * Element value
         */
        value: string;
        /**
         * Element value code
         */
        valueCode: number;
    }
}
export declare namespace GenModels {
    interface TasksDataModel {
        /**
         * Updated list of the main files in the card
         */
        tasks: Array<GenModels.TaskDataModel>;
        /**
         * Do model contains links or not
         */
        tasksLoaded: boolean;
        /**
         * Task id
         */
        taskID: string;
        /**
         * TaskList ID
         */
        taskListId: string;
        /**
         * Task kind display name
         */
        taskKindName: string;
        /**
         * Available kinds
         */
        availableKinds: Array<string>;
        /**
         * Total count of tasks, including not loaded
         */
        totalTasksCount: number;
    }
}
export declare namespace GenModels {
    interface DelegationRecord {
        /**
         * Gets or sets previous performer display name
         */
        fromPerformer: string;
        /**
         * Gets or sets new performer display name
         */
        toPerformer: string;
    }
}
export declare namespace GenModels {
    interface CardTreeNodeModel extends GenModels.TreeNodeModel {
        /**
         * Gets or sets card name
         */
        name: string;
    }
}
export declare namespace GenModels {
    interface TaskCurrentPerformer {
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets employee model
         */
        employeeModel: GenModels.EmployeeModel;
        /**
         * Hash of the user image
         */
        imageHash: string;
    }
}
export declare namespace GenModels {
    interface TaskGroupSelectedPerformer {
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets value indicating whther performer is responsible
         */
        isResponsiblePerformer: boolean;
        /**
         * Gets or sets employee model
         */
        employeeModel: GenModels.EmployeeModel;
    }
}
export declare namespace GenModels {
    interface TaskGroupTreeNodeHelpModel extends GenModels.TreeNodeHelpModel {
        /**
         * Gets or sets execution type
         */
        executionType: GenModels.ExecutionType;
        /**
         * Gets or sets author
         */
        author: GenModels.EmployeeModel;
        /**
         * Gets selected performers
         */
        selectedPerformers: Array<GenModels.TaskGroupSelectedPerformer>;
        /**
         * Gets or sets task name
         */
        name: string;
        /**
         * Gets or sets task content
         */
        content: string;
        /**
         * Gets or sets task end date
         */
        endDate?: string;
        /**
         * Gets or sets controller
         */
        controller: GenModels.EmployeeModel;
        /**
         * Gets or sets task control date
         */
        controlDate?: string;
    }
}
export declare namespace GenModels {
    interface TaskGroupTreeNodeHintModel extends GenModels.TreeNodeHintModel {
        /**
         * Gets or sets task group name
         */
        name: string;
        /**
         * Gets or sets task group end date
         */
        endDate?: string;
        /**
         * Gets or sets execution type
         */
        executionType: GenModels.ExecutionType;
        /**
         * Gets state name
         */
        stateDisplayName: string;
        /**
         * Gets task state class name
         */
        stateClassName: string;
        /**
         * Gets task state type
         */
        stateType: number;
        /**
         * Gets selected performers
         */
        selectedPerformers: Array<GenModels.TaskGroupSelectedPerformer>;
    }
}
export declare namespace GenModels {
    interface TaskGroupTreeNodeModel extends GenModels.TreeNodeModel {
        /**
         * Gets or sets execution type
         */
        executionType: GenModels.ExecutionType;
        /**
         * Gets or sets value indicating whether task group is overdue
         */
        isOverdue: boolean;
        /**
         * Gets or sets task group priority
         */
        priority: GenModels.Priority;
        /**
         * Gets or sets state category
         */
        stateCategory: GenModels.TaskGroupStateCategory;
        /**
         * Gets or sets value indicating whether task group on control
         */
        onControl: boolean;
    }
}
export declare namespace GenModels {
    interface TaskTreeNodeHelpModel extends GenModels.TreeNodeHelpModel {
        /**
         * Gets or sets author
         */
        author: GenModels.EmployeeModel;
        /**
         * Gets current performers
         */
        currentPerformers: Array<GenModels.TaskCurrentPerformer>;
        /**
         * Gets or sets delegation hint
         */
        delegationHint: GenModels.DelegationRecord;
        /**
         * Gets or sets task name
         */
        name: string;
        /**
         * Gets or sets task content
         */
        content: string;
        /**
         * Gets or sets task end date
         */
        endDate?: string;
        /**
         * Gets or sets controller
         */
        controller: GenModels.EmployeeModel;
        /**
         * Gets or sets task control date
         */
        controlDate?: string;
        /**
         * Gets or sets value indicating whether task is overdue
         */
        isOverdue: boolean;
        /**
         * Gets or sets actual end date
         */
        endDateActual?: string;
        /**
         * Gets or sets report
         */
        report: string;
        /**
         * Gets or sets report files
         */
        reportFiles: Array<GenModels.LinkModel>;
        /**
         * Gets delegation history
         */
        delegationHistory: Array<GenModels.DelegationRecord>;
    }
}
export declare namespace GenModels {
    interface LinkModel {
        /**
         * Gets link identifier
         */
        linkId: string;
        /**
         * Gets display link name
         */
        displayName: string;
        /**
         * Gets link type identifier
         */
        linkTypeId: string;
        /**
         * Gets link type name
         */
        linkTypeName: string;
        /**
         * link kind
         */
        kind: GenModels.LinkKind;
        /**
         * Is linked card a document card.
         */
        isDocument: boolean;
        /**
         * Gets linked card identifier
         */
        cardId: string;
        /**
         * Gets link creation date
         */
        creationDate?: string;
        /**
         * Gets display name of the author of the link.
         */
        authorDisplayName: string;
        /**
         * Gets link description
         */
        description: string;
        /**
         * Gets link description
         */
        url: string;
    }
}
export declare namespace GenModels {
    interface TaskTreeNodeHintModel extends GenModels.TreeNodeHintModel {
        /**
         * Gets or sets task name
         */
        name: string;
        /**
         * Gets or sets task end date
         */
        endDate?: string;
        /**
         * Gets state name
         */
        stateDisplayName: string;
        /**
         * Gets task state class name
         */
        stateClassName: string;
        /**
         * Gets task state type
         */
        stateType: number;
        /**
         * Gets or sets delegation hint
         */
        delegationHint: GenModels.DelegationRecord;
    }
}
export declare namespace GenModels {
    interface TaskTreeNodeModel extends GenModels.TreeNodeModel {
        /**
         * Gets or sets value indicating whether task has delegates
         */
        hasDelegates: boolean;
        /**
         * Gets or sets value indicating whether task has report
         */
        hasReport: boolean;
        /**
         * Gets or sets value indicating whether task has file report
         */
        hasFileReport: boolean;
        /**
         * Gets or sets value indicating whether task on control
         */
        onControl: boolean;
        /**
         * Gets or sets value indicating whether task is task of responsible performer in parent task group
         */
        isResponsiblePerformerTask: boolean;
        /**
         * Gets or sets performer gender
         */
        gender: GenModels.PerformerGender;
        /**
         * Gets or sets value indicating whether task is overdue
         */
        isOverdue: boolean;
        /**
         * Gets or sets task priority
         */
        priority: GenModels.Priority;
        /**
         * Gets or sets task state category
         */
        stateCategory: GenModels.TaskStateCategory;
        /**
         * Gets current performers
         */
        currentPerformers: Array<GenModels.TaskCurrentPerformer>;
    }
}
export declare namespace GenModels {
    interface StateModel {
        /**
         * Gets or sets state idenrifier
         */
        stateId: string;
        /**
         * Gets or sets caption
         */
        caption: string;
    }
}
export declare namespace GenModels {
    interface CompletionOption {
        /**
         * Gets or sets completion option identifier
         */
        id: string;
        /**
         * Gets or sets name
         */
        name: string;
        /**
         * Gets or sets value
         */
        value: number;
        /**
         * Gets or sets value indicating whether option is default
         */
        isDefault: boolean;
        /**
         * Gets attributes collection
         */
        parameters: Array<GenModels.CompletionParameter>;
        /**
         * Gets or sets color
         */
        color: string;
    }
}
export declare namespace GenModels {
    interface CompletionParameter {
        /**
         * Gets completion parameter type
         */
        type: GenModels.CompletionParameterType;
        /**
         * Gets or sets section identifier
         */
        sectionId: string;
        /**
         * Gets or sets field name
         */
        fieldName: string;
        /**
         * Gets or sets value indicating whether attribute is required
         */
        required: boolean;
        /**
         * Gets or sets display name
         */
        displayName: string;
        /**
         * Gets or sets display mode
         */
        displayMode: GenModels.CompletionParameterDisplayMode;
        /**
         * Gets or sets value
         */
        value: any;
        /**
         * Gets value indicating whether Value is empty
         */
        isEmpty: boolean;
        /**
         * Gets or sets parameter identifier
         */
        id: string;
    }
}
export declare namespace GenModels {
    interface TaskDelegationInfoModel {
        /**
         * Gets or sets lis of delegate
         */
        delegates: Array<GenModels.TaskCardDelegateItemModel>;
        /**
         * Get deletage status
         */
        status: string;
        /**
         * Get task state type
         */
        stateType: GenModels.TaskStateType;
        /**
         * Gets or sets completion option where task state in Completed
         */
        completionOption: GenModels.CompletionOptionModel;
        /**
         * Task performer
         */
        taskInitialPerformer: GenModels.EmployeeModel;
    }
}
export declare namespace GenModels {
    interface TaskCardDelegateItemModel {
        /**
         * Gets or sets from delegate
         */
        sourceDelegate: GenModels.EmployeeModel;
        /**
         * Gets or sets to delegate
         */
        destinationDelegate: GenModels.EmployeeModel;
        /**
         * Gets or set delegate date
         */
        delegateDate: string;
        /**
         * Gets or set return from delegation date
         */
        returnFromDelegationDate?: string;
        /**
         * Is the record about completed delegation
         */
        returnedFromDelegation: boolean;
        /**
         * Gets or set delegate comment
         */
        comment: string;
    }
}
export declare namespace GenModels {
    interface EmployeeModel {
        /**
         * Gets or sets employee identifier
         */
        employeeId: string;
        /**
         * Display user full name
         */
        displayName: string;
        /**
         * Get employee first name
         */
        fistName: string;
        /**
         * Gets employee last name
         */
        lastName: string;
        /**
         * Get employee middle name
         */
        middleName: string;
        /**
         * Gets or sets employee email address
         */
        email: string;
        /**
         * Gets or sets employee display position
         */
        position: string;
        /**
         * Gets or sets unit
         */
        unit: GenModels.UnitModel;
        /**
         * Gets or set user account name
         */
        accountName: string;
        /**
         * Gets or sets deputy display name
         */
        deputyDisplayName: string;
        /**
         * Gets value indicating whether employee is favorite performer
         */
        isFavoritePerformer: boolean;
    }
}
export declare namespace GenModels {
    interface UnitModel {
        /**
         * Get unit identifier
         */
        unitId: string;
        /**
         * Get unit name
         */
        unitName: string;
    }
}
export declare namespace GenModels {
    interface CompletionOptionModel {
        /**
         * Gets or sets completion option identifier
         */
        id: string;
        /**
         * Gets or sets name
         */
        name: string;
        /**
         * Gets or sets value
         */
        value: number;
        /**
         * Gets or sets IsDefault
         */
        isDefault: boolean;
        /**
         * Gets or sets value indicated whether has report filed in completion option
         */
        hasReportFielInCompletionOption: boolean;
        /**
         * Gets attributes collection
         */
        parameters: Array<GenModels.CompletionParameterModel>;
        /**
         * Gets or sets color
         */
        color: string;
    }
}
export declare namespace GenModels {
    interface CompletionParameterModel {
        /**
         * Gets or sets parameter idenitifer
         */
        id: string;
        /**
         * Gets or sets field name
         */
        name: string;
        /**
         * Gets or sets value indicated where field is required
         */
        required: boolean;
        /**
         * Gets or sets field type
         */
        type: GenModels.CompletionParameterType;
        /**
         * Gets or sets value
         */
        value: string;
        isEmpty: boolean;
        /**
         * Gets or sets employee
         */
        employee: GenModels.EmployeeModel;
    }
}
export declare namespace GenModels {
    interface CardKindModel {
        /**
         * Gets card kind name
         */
        cardKindName: string;
        /**
         * Gets card kind name with parent kinds
         */
        cardKindFullName: string;
        /**
         * Gets card kind identifier
         */
        cardKindId?: string;
        /**
         * Gets loading error
         */
        loadingError: string;
    }
}
export declare namespace GenModels {
    /**
     * Represents search context option
     */
    enum SearchContextOption {
        /**
         * Search in current folder
         */
        CurrentFolder = 0,
        /**
         * Search in current folder and subfolders
         */
        CurrentFolderAndSubFolders = 1,
        /**
         * Search in search results
         */
        SearchInSearchResults = 2,
        /**
         * Search everywhere
         */
        EveryWhere = 3
    }
}
export declare namespace GenModels {
    /**
     * Represents type of {@link GenModels}
     */
    enum BusinessCalendarSourceType {
        /**
         * Employee
         */
        Employee = 0,
        /**
         * Staff unit
         */
        StaffUnit = 1
    }
}
export declare namespace GenModels {
    enum DigitalSignatureKind {
        Auto = 0,
        HashSignature = 1,
        CadesBesSignature = 2,
        CadesTSignature = 3,
        CadesXLongType1Signature = 4
    }
}
export declare namespace GenModels {
    /**
     * Partner search mode
     */
    enum PartnerSearchMode {
        SearchDepartments = 0,
        SearchEmployees = 1,
        SearchAll = 2
    }
}
export declare namespace GenModels {
    /**
     * Partner item type
     */
    enum PartnerItemType {
        /**
         * Organization
         */
        Organization = 0,
        /**
         * Department
         */
        Department = 1,
        /**
         * Employee
         */
        Employee = 2
    }
}
export declare namespace GenModels {
    /**
     * Type of department
     */
    enum DepartmentType {
        /**
         * Organization
         */
        Organization = 0,
        /**
         * Department
         */
        Department = 1
    }
}
export declare namespace GenModels {
    /**
     * Declare device types
     */
    enum DeviceType {
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
}
export declare namespace GenModels {
    /**
     * Folder DocsVision.Platform.Cards.Constants.FoldersCard.Folders.DefaultStyle property value
     */
    enum DvFolderStyles {
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
}
export declare namespace GenModels {
    /**
     * Declare column type
     */
    enum ColumnType {
        /**
         * Int
         */
        Integer = 0,
        /**
         * String
         */
        String = 1,
        /**
         * Double
         */
        Float = 2,
        /**
         * Datetime
         */
        DateTime = 3,
        /**
         * Boolean
         */
        Bool = 5,
        /**
         * Decimal column type
         */
        Decimal = 6,
        /**
         * Unique id data type
         */
        UniqueId = 7
    }
}
export declare namespace GenModels {
    enum FormFactor {
        Desktop = 1,
        Mobile = 2
    }
}
export declare namespace System.Web.UI.WebControls {
    enum SortDirection {
        Ascending = 0,
        Descending = 1
    }
}
export declare namespace GenModels {
    /**
     * Represents layout type
     */
    enum LayoutType {
        /**
         * View
         */
        View = 0,
        /**
         * Edit
         */
        Edit = 1
    }
}
export declare namespace GenModels {
    /**
     * Represents layout type
     */
    enum LayoutAction {
        /**
         * Layout for view
         */
        View = 0,
        /**
         * Layout for edit
         */
        Edit = 1,
        /**
         * Layout for creating card
         */
        Create = 2
    }
}
export declare namespace GenModels {
    /**
     * Start performers mode for DisplayPerformers control
     */
    enum DisplayPerformersStartPerformersMode {
        /**
         * Selected performers
         */
        MainInfoSelectedPerformers = 0,
        /**
         * Main performers
         */
        MainInfoPerformers = 1
    }
}
export declare namespace GenModels {
    /**
     * Display performers view mode
     */
    enum DisplayPerformersViewMode {
        /**
         * Full name
         */
        FullName = 0,
        /**
         * Display name
         */
        DisplayName = 1
    }
}
export declare namespace GenModels {
    /**
     * Display performers tip mode
     */
    enum DisplayPerformersTipMode {
        /**
         * Full name
         */
        FullName = 0,
        /**
         * Full name and position
         */
        FullNameAndPosition = 1,
        /**
         * Full name and department and position
         */
        FullNameAndDepartmentAndPosition = 2,
        /**
         * Display name
         */
        DisplayName = 3,
        /**
         * Disabled
         */
        Disabled = 4
    }
}
export declare namespace GenModels {
    /**
     * Delegate event
     */
    enum DelegateEvent {
        /**
         * Delegated
         */
        Delegated = 0,
        /**
         * Delegated with return
         */
        DelegatedWithReturn = 1,
        /**
         * Returned
         */
        Returned = 2,
        /**
         * Taken to work
         */
        TakenToWork = 3
    }
}
export declare namespace GenModels {
    enum AgreementStateType {
        Draft = 0,
        Started = 1,
        Stopped = 2,
        Agreed = 3,
        Other = 4
    }
}
export declare namespace GenModels {
    enum ApprovalType {
        Sequential = 0,
        Parallel = 1,
        Consolidation = 2,
        Alternative = 3
    }
}
export declare namespace GenModels {
    enum StageSemantics {
        Positive = 1,
        Negative = 2,
        Neutral = 3,
        Other = 4
    }
}
export declare namespace GenModels {
    enum ApprovalOperationKind {
        Resume = 0,
        Finish = 1,
        Pause = 2,
        Cancel = 3,
        ToApprove = 4,
        AbortStage = 5,
        Management = 6
    }
}
export declare namespace GenModels {
    enum DecisionSemantics {
        Positive = 1,
        Negative = 2,
        Neutral = 3,
        Cancellation = 4,
        NewCycle = 5,
        ApproversAddition = 6,
        Completion = 100
    }
}
export declare namespace GenModels {
    /**
     * Represents what and how to search in directory designer tree
     */
    enum DirectoryDesignerSearchArea {
        /**
         * Query should return only specified node and its rows
         */
        OnlyNode = 0,
        /**
         * Query should return only node, children and chlidren rows (without node rows).
         */
        OnlyChildren = 1,
        /**
         * Query should return node, children, node rows and children rows (i.e. everything).
         */
        NodeWithChildren = 2
    }
}
export declare namespace GenModels {
    /**
     * Represents type of tree node
     */
    enum DirectoryDesignerTreeNodeType {
        /**
         * directory designer item type (node)
         */
        Node = 0,
        /**
         * directory designer row
         */
        Row = 1
    }
}
export declare namespace GenModels {
    /**
     * Represents how to search in directory designer tree
     */
    enum DirectoryDesignerSearchMode {
        /**
         * Search by id
         */
        Id = 0,
        /**
         * Search by name and description
         */
        NameAndDesc = 1
    }
}
export declare namespace GenModels {
    /**
     * Represents folder node type
     */
    enum FolderNodeType {
        /**
         * Regular
         */
        Regular = 1,
        /**
         * Virtual
         */
        Virtual = 4,
        /**
         * Delegate
         */
        Delegate = 8,
        /**
         * SystemHidden
         */
        SystemHidden = 16
    }
}
export declare namespace GenModels {
    /**
     * Represents folder node style
     */
    enum FolderNodeStyle {
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
        FolderDigest = 8
    }
}
export declare namespace GenModels {
    /**
     * Represent link kind
     */
    enum LinkKind {
        /**
         * card link type
         */
        Card = 0,
        /**
         * file link type
         */
        File = 1,
        /**
         * Url link type
         */
        Url = 2
    }
}
export declare namespace GenModels {
    /**
     * department data source
     */
    enum DepartmentDataSource {
        /**
         * Staff directory
         */
        StaffDirectory = 0,
        /**
         * Partners directory
         */
        PartnersDirectory = 1
    }
}
export declare namespace GenModels {
    /**
     * Department type for different search requests
     */
    enum SearchDepartmentType {
        /**
         * Not specified (any)
         */
        None = 0,
        /**
         * Department
         */
        Department = 1,
        /**
         * Organization
         */
        Organization = 2
    }
}
export declare namespace GenModels {
    enum AgreementHistoryMode {
        Button = 0,
        Layout = 1
    }
}
export declare namespace GenModels {
    enum AgreementManagementAvailableButtons {
        Pause = 1,
        Cancel = 2,
        Complete = 4,
        All = -1
    }
}
export declare namespace GenModels {
    enum AgreementMode {
        StartAndManagement = 0,
        StartOnly = 1,
        ManagementOnly = 2
    }
}
export declare namespace GenModels {
    enum ApproverViewType {
        Fio = 0,
        FioAndPosition = 1,
        DisplayString = 2
    }
}
export declare namespace GenModels {
    enum DepartmentDialogMode {
        Tree = 0,
        List = 1
    }
}
export declare namespace GenModels {
    enum EmployeeViewMode {
        Fio = 0,
        DisplayName = 1,
        Auto = 2
    }
}
export declare namespace GenModels {
    enum PartnerTipModeItems {
        Fio = 0,
        FioAndPosition = 1,
        NotUsed = 2
    }
}
export declare namespace GenModels {
    enum TaskGroupWithOneTaskDisplayMode {
        Both = 0,
        Group = 1,
        Task = 2
    }
}
export declare namespace GenModels {
    enum TasksOpenMode {
        CurrentTab = 0,
        NewTab = 1,
        NewWindow = 2
    }
}
export declare namespace GenModels {
    enum TasksDisplayMode {
        ListAndCreation = 0,
        OnlyCreation = 1
    }
}
export declare namespace GenModels {
    enum TasksTreeDisplayMode {
        Button = 0,
        Layout = 1
    }
}
export declare namespace GenModels {
    enum DateTimePickerType {
        DateTime = 0,
        Date = 1
    }
}
export declare namespace GenModels {
    enum FolderMode {
        Empty = 0,
        CurrentFolder = 1
    }
}
export declare namespace GenModels {
    enum HtmlViewMode {
        FromCard = 0,
        FromFile = 1,
        External = 2
    }
}
export declare namespace GenModels {
    enum Orientation {
        Horizontal = 0,
        Vertical = 1
    }
}
export declare namespace GenModels {
    enum RadioGroupLabelLocation {
        Right = 0,
        Left = 1
    }
}
export declare namespace GenModels {
    /**
     * End performers mode for DisplayPerformers control
     */
    enum DisplayPerformersEndPerformersMode {
        /**
         * Current performers
         */
        CurrentPerformers = 0,
        /**
         * Main performers
         */
        MainInfoPerformers = 1
    }
}
export declare namespace GenModels {
    enum AgreementManagementOperations {
        Resume = 0,
        Complete = 1,
        Pause = 2,
        Cancel = 3,
        ToApprove = 4,
        AbortStage = 5,
        Management = 6
    }
}
export declare namespace GenModels {
    /**
     * Default time modes for DateTime
     */
    enum DateTimeDefaultTimeModes {
        /**
         * Current time
         */
        CurrentTime = 0,
        /**
         * Start of day
         */
        StartOfDay = 1,
        /**
         * Start of work day
         */
        StartOfWorkDay = 2,
        /**
         * End of day
         */
        EndOfDay = 3,
        /**
         * End of work day
         */
        EndOfWorkDay = 4
    }
}
export declare namespace GenModels {
    /**
     * Represents performer gender
     */
    enum PerformerGender {
        /**
         * Gender not specified
         */
        NotSpecified = 0,
        /**
         * Male
         */
        Male = 1,
        /**
         * Female
         */
        Female = 2
    }
}
export declare namespace GenModels {
    /**
     * Represents priority
     */
    enum Priority {
        /**
         * Low
         */
        Low = 0,
        /**
         * Normal
         */
        Normal = 1,
        /**
         * High
         */
        High = 2
    }
}
export declare namespace GenModels {
    /**
     * Represents task group state category
     */
    enum TaskGroupStateCategory {
        /**
         * TBD
         */
        Preparing = 0,
        /**
         * TBD
         */
        Performing = 1,
        /**
         * TBD
         */
        Completed = 2,
        /**
         * TBD
         */
        Other = 3
    }
}
export declare namespace GenModels {
    /**
     * Represents execution type
     */
    enum ExecutionType {
        /**
         * Serial
         */
        Serial = 0,
        /**
         * Parallel
         */
        Parallel = 1
    }
}
export declare namespace GenModels {
    /**
     * Represents task state category
     */
    enum TaskStateCategory {
        /**
         * Initialization and Recalled
         */
        Preparing = 0,
        /**
         * InWork Delegated ReturnFromDelegation OnAcceptance
         */
        InWork = 1,
        /**
         * Rejected
         */
        Rejected = 2,
        /**
         * OnRework
         */
        OnRework = 3,
        /**
         * Completed
         */
        Completed = 4,
        /**
         * Other
         */
        Other = 5
    }
}
export declare namespace GenModels {
    /**
     * Completion variant type
     */
    enum CompletionParameterType {
        /**
         * One row string
         */
        String = 0,
        /**
         * Multi row string
         */
        Text = 1,
        /**
         * Boolean
         */
        Boolean = 2,
        /**
         * DateTime
         */
        DateTime = 3,
        /**
         * Time
         */
        Time = 4,
        /**
         * Double
         */
        Double = 5,
        /**
         * Int
         */
        Int = 6,
        /**
         * Employee
         */
        Employee = 7
    }
}
export declare namespace GenModels {
    /**
     * Represents parameter display mode
     */
    enum CompletionParameterDisplayMode {
        /**
         * Always
         */
        Always = 0,
        /**
         * Never
         */
        Never = 1,
        /**
         * If empty
         */
        IfEmpty = 2
    }
}
export declare namespace GenModels {
    /**
     * Declares available task states
     */
    enum TaskStateType {
        /**
         * Task created by author
         */
        Draft = 0,
        /**
         * Task processed by performer
         */
        InWork = 1,
        /**
         * Task completed by performer
         */
        Completed = 2,
        /**
         * Task rejected by performer
         */
        Rejected = 3,
        /**
         * Task is on agreement with somebody
         */
        OnAgreement = 4,
        /**
         * Task agreement was successfully completed
         */
        Agreed = 5,
        /**
         * Task state not supported by 6.0
         */
        Unknown = 6,
        /**
         * Task is not agreed
         */
        NotAgreed = 7,
        /**
         * Task is on acceptance
         */
        OnAcceptance = 8,
        /**
         * Task is on modification
         */
        OnModification = 9,
        /**
         * Task is deferred
         */
        Deferred = 10,
        /**
         * Task is recalled
         */
        Recalled = 11,
        /**
         * Task is delegated
         */
        Delegated = 12,
        /**
         * Task is returned from delegation
         */
        ReturnedFromDelegation = 13,
        /**
         * Task is started
         */
        Started = 14,
        /**
         * Task is stopped
         */
        Stopped = 15
    }
}
export declare namespace GenModels {
    /**
     * Represents task group card state type
     */
    enum TaskGroupStateType {
        /**
         * Preparation
         */
        Preparation = 0,
        /**
         * Performance
         */
        Performance = 1,
        /**
         * Completed
         */
        Completed = 2,
        /**
         * Recalled
         */
        Recalled = 3,
        /**
         * Unknown
         */
        Unknown = 6
    }
}
export declare namespace GenModels {
    /**
     * Declares available task operation
     */
    enum TaskOperationKind {
        /**
         * Read
         */
        Read = 0,
        /**
         * Edit
         */
        Edit = 1,
        /**
         * Delete
         */
        Delete = 2,
        /**
         * Begin task
         */
        Begin = 3,
        /**
         * Complete task
         */
        Complete = 4,
        /**
         * Complete by author
         */
        StopExecutionOperation = 5,
        /**
         * Accept
         */
        Accept = 6,
        /**
         * CreateComments
         */
        CreateComments = 7,
        /**
         * Create child task
         */
        CreateChildTask = 8,
        /**
         * Create child task group
         */
        CreateChildTaskGroup = 9,
        /**
         * Add linked document
         */
        AddLinkedDocument = 10,
        /**
         * Withdraw task
         */
        Withdraw = 11,
        /**
         * Reject task
         */
        Reject = 12,
        /**
         * SendToModification
         */
        SendToModification = 13,
        /**
         * Delegate
         */
        Delegate = 14,
        /**
         * Cancel delegation
         */
        CancelDelegation = 15,
        /**
         * Take in work
         */
        TakeInWork = 16,
        /**
         * Cancel TakeInWork
         */
        DoNotTakeToWork = 17,
        /**
         * Other
         */
        Other = 18,
        /**
         * RemoveLinkedDocument
         */
        RemoveLinkedDocument = 19,
        /**
         * Add reference
         */
        AddReference = 20,
        /**
         * Remove reference
         */
        RemoveReference = 21,
        /**
         * Add report
         */
        AddReport = 22,
        /**
         * Remove report
         */
        RemoveReport = 23,
        /**
         * Edit report field
         */
        EditReportField = 24,
        /**
         * Report links not exists
         */
        ReportLinksNotExist = 25,
        /**
         * Set content
         */
        SetContent = 26
    }
}
export declare namespace GenModels {
    /**
     * Field types
     */
    enum FieldType {
        /**
         * Integer
         */
        Int = 0,
        /**
         * Boolean
         */
        Bool = 1,
        /**
         * DateTime
         */
        DateTime = 2,
        /**
         * Date
         */
        Date = 3,
        /**
         * Time
         */
        Time = 4,
        /**
         * Enum
         */
        Enum = 5,
        /**
         * Bitmask
         */
        Bitmask = 6,
        /**
         * Unique identifier
         */
        UniqueId = 7,
        /**
         * User identifier
         */
        UserId = 8,
        /**
         * String
         */
        String = 9,
        /**
         * Unicode string
         */
        Unistring = 10,
        /**
         * File identifier
         */
        FileId = 11,
        /**
         * Float
         */
        Float = 12,
        /**
         * Reference identifier
         */
        RefId = 13,
        /**
         * Reference card identifier
         */
        RefCardId = 14,
        /**
         * Text
         */
        Text = 15,
        /**
         * Unicode text
         */
        Unitext = 16,
        /**
         * Binary
         */
        Binary = 17,
        /**
         * Image
         */
        Image = 18,
        /**
         * Secure Digital Identification
         */
        Sdid = 19,
        /**
         * Decimal
         */
        Decimal = 20,
        /**
         * Variant
         */
        Variant = 21
    }
}
export declare namespace GenModels {
    /**
     * Field subtype
     */
    enum FieldSubtype {
        /**
         * None
         */
        None = 0,
        /**
         * String
         */
        String = 1,
        /**
         * Integer
         */
        Int = 2,
        /**
         * Double
         */
        Double = 3,
        /**
         * Date
         */
        Date = 4,
        /**
         * Boolean
         */
        Bool = 5,
        /**
         * Employee
         */
        Employee = 6,
        /**
         * Department
         */
        Department = 7,
        /**
         * Group
         */
        Group = 8,
        /**
         * Role
         */
        Role = 9,
        /**
         * Universal
         */
        Universal = 10,
        /**
         * Time
         */
        Time = 11,
        /**
         * DateTime
         */
        DateTime = 12,
        /**
         * PartnerEmployee
         */
        PartnerEmployee = 13,
        /**
         * PartnerDepartment
         */
        PartnerDepartment = 14,
        /**
         * Card reference
         */
        CardRef = 15,
        /**
         * Card type
         */
        CardType = 16,
        /**
         * Card state
         */
        CardState = 17
    }
}
