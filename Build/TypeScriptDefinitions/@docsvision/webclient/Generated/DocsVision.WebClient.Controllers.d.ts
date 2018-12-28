import { BaseController } from '@docsvision/webclient/System/BaseController';
import { RequestOptions } from '@docsvision/webclient/Legacy/Utils';
import { GenModels } from '@docsvision/webclient/Generated/DocsVision.WebClient.Models';
export declare namespace GenControllers {
    /**
     * File controller
     */
    interface IRazorControlController {
        /**
         * Render razor control
         *
         * @param viewName View name
         * @param model Model
         * @param viewPath View path
         * @param viewData Additinal data
         *
         * @returns Rendered control
         */
        render<T>(viewName: string, model: T, viewPath: string, viewData?: Array<any>, options?: RequestOptions): JQueryDeferred<string>;
    }
    class RazorControlController extends BaseController implements IRazorControlController {
        render<T>(viewName: string, model: T, viewPath: string, viewData?: Array<any>, options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $RazorControlController = {
    razorControlController: GenControllers.IRazorControlController;
};
export declare namespace GenControllers {
    /**
     * Layout links controller
     */
    interface ILayoutLinksMvcController {
        /**
         * POST: /LayoutLinks/GetLinksResult
         */
        getLinksResult(queryViewRequest: GenModels.QueryViewRequest, allowedCardTypes?: Array<string>, options?: RequestOptions): JQueryDeferred<string>;
    }
    class LayoutLinksMvcController extends BaseController implements ILayoutLinksMvcController {
        getLinksResult(queryViewRequest: GenModels.QueryViewRequest, allowedCardTypes?: Array<string>, options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $LayoutLinksMvcController = {
    layoutLinksMvcController: GenControllers.ILayoutLinksMvcController;
};
export declare namespace GenControllers {
    /**
     * Cards controller
     */
    interface ICardController {
        /**
         * HTTP: /Card/SetWasRead
         */
        setWasRead(cardIds: Array<string>, setRead?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/CheckLock
         */
        checkLock(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/CheckModified
         */
        checkModified(cardId: string, timestamp: number, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/KindAvailable
         */
        checkKindCreatable(cardTypeId: string, cardKindId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/GetViewRoute
         */
        getViewRoute(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/GetViewList
         */
        getViewList(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/IsViewInList
         */
        isViewInList(folderId: string, viewId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/Show/id
         */
        show(id: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/UnknownCardView/cardId
         */
        unknownCardView(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/GetReferenceList
         *
         * @param cardId card id
         *
         * @returns reference list model
         */
        getReferenceList(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Card/GetReferenceListContent
         *
         * @param cardId card id
         *
         * @returns reference list model content
         */
        getReferenceListContent(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/DeleteLink
         *
         * @param cardId card id
         * @param timestamp card timestamp
         * @param linkId link id
         */
        deleteLink(cardId: string, timestamp: number, linkId: string, options?: RequestOptions): JQueryDeferred<string>;
    }
    class CardController extends BaseController implements ICardController {
        setWasRead(cardIds: Array<string>, setRead?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        checkLock(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        checkModified(cardId: string, timestamp: number, options?: RequestOptions): JQueryDeferred<string>;
        checkKindCreatable(cardTypeId: string, cardKindId: string, options?: RequestOptions): JQueryDeferred<string>;
        getViewRoute(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        getViewList(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        isViewInList(folderId: string, viewId: string, options?: RequestOptions): JQueryDeferred<string>;
        show(id: string, options?: RequestOptions): JQueryDeferred<string>;
        unknownCardView(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        getReferenceList(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        getReferenceListContent(cardId: string, options?: RequestOptions): JQueryDeferred<string>;
        deleteLink(cardId: string, timestamp: number, linkId: string, options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $CardController = {
    cardController: GenControllers.ICardController;
};
export declare namespace GenControllers {
    /**
     * Error controller
     */
    interface IErrorController {
        /**
         * HTTP: /Error/Index
         */
        index(statusCode: number, exception: any, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Error/AccessDenied
         */
        accessDenied(options?: RequestOptions): JQueryDeferred<string>;
    }
    class ErrorController extends BaseController implements IErrorController {
        index(statusCode: number, exception: any, options?: RequestOptions): JQueryDeferred<string>;
        accessDenied(options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $ErrorController = {
    errorController: GenControllers.IErrorController;
};
export declare namespace GenControllers {
    /**
     * Navigator controller
     */
    interface INavigatorController {
        /**
         * HTTP: /Navigator/GetFolderTree
         */
        getNavigatorFolders(id?: string, excludeSeachParamFolder?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/AddUserFolder
         */
        attachUserFolders(folderIds: Array<string>, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Index
         */
        index(options?: RequestOptions): JQueryDeferred<string>;
        /**
         * Awake
         */
        awake(options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/About
         */
        about(options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/SwitchView
         */
        switchView(options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/GetCardCreateLinks
         */
        getCardCreateLinks(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/GetCardCreateTemplates
         */
        getCardCreateTemplates(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/GetCreationRoute
         */
        getCreationRoute(cardId: string, cardTypeId: string, defaultRoute: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * HTTP: /Navigator/GetCardKinds
         */
        getCardKinds(cardTypeId: string, folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/SendFoldersAndUnreadCounters
         */
        sendFoldersAndUnreadCounters(unreadCountersRequest: GenModels.UnreadCountersRequest, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/ShowSelectExistingCard
         */
        showSelectExistingCard(cardId: string, isReport?: boolean, allowedLinkTypes?: Array<string>, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/ShowSelectNewDocumentKind
         */
        showSelectNewDocumentKind(isReport?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/AttachLink
         */
        attachLink(model: GenModels.LinkAddModel, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * HTTP: /Navigator/HealthCheck
         */
        healthCheck(options?: RequestOptions): JQueryDeferred<string>;
    }
    class NavigatorController extends BaseController implements INavigatorController {
        getNavigatorFolders(id?: string, excludeSeachParamFolder?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        attachUserFolders(folderIds: Array<string>, options?: RequestOptions): JQueryDeferred<any>;
        index(options?: RequestOptions): JQueryDeferred<string>;
        awake(options?: RequestOptions): JQueryDeferred<string>;
        about(options?: RequestOptions): JQueryDeferred<string>;
        switchView(options?: RequestOptions): JQueryDeferred<string>;
        getCardCreateLinks(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        getCardCreateTemplates(folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        getCreationRoute(cardId: string, cardTypeId: string, defaultRoute: string, options?: RequestOptions): JQueryDeferred<any>;
        getCardKinds(cardTypeId: string, folderId: string, options?: RequestOptions): JQueryDeferred<string>;
        sendFoldersAndUnreadCounters(unreadCountersRequest: GenModels.UnreadCountersRequest, options?: RequestOptions): JQueryDeferred<string>;
        showSelectExistingCard(cardId: string, isReport?: boolean, allowedLinkTypes?: Array<string>, options?: RequestOptions): JQueryDeferred<string>;
        showSelectNewDocumentKind(isReport?: boolean, options?: RequestOptions): JQueryDeferred<string>;
        attachLink(model: GenModels.LinkAddModel, options?: RequestOptions): JQueryDeferred<string>;
        healthCheck(options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $NavigatorController = {
    navigatorController: GenControllers.INavigatorController;
};
export declare namespace GenControllers {
    /**
     * Business calendar controller
     */
    interface IBusinessCalendarController {
        /**
         * Get work-time settings
         *
         * @param requestModel Request model
         */
        getWorkTimeSettings(requestModel: GenModels.CalendarRequestModel, options?: RequestOptions): JQueryDeferred<Array<GenModels.CalendarYearSettings>>;
        /**
         * Get duration
         *
         * @param requestModel Request model
         */
        getDuration(requestModel: GenModels.CalendarDurationRequestModel, options?: RequestOptions): JQueryDeferred<number>;
        /**
         * Get end date
         *
         * @param requestModel Request model
         */
        getEndDate(requestModel: GenModels.CalendarEndDateRequestModel, options?: RequestOptions): JQueryDeferred<string>;
    }
    class BusinessCalendarController extends BaseController implements IBusinessCalendarController {
        getWorkTimeSettings(requestModel: GenModels.CalendarRequestModel, options?: RequestOptions): JQueryDeferred<Array<GenModels.CalendarYearSettings>>;
        getDuration(requestModel: GenModels.CalendarDurationRequestModel, options?: RequestOptions): JQueryDeferred<number>;
        getEndDate(requestModel: GenModels.CalendarEndDateRequestModel, options?: RequestOptions): JQueryDeferred<string>;
    }
}
export declare type $BusinessCalendarController = {
    businessCalendarController: GenControllers.IBusinessCalendarController;
};
export declare namespace GenControllers {
    /**
     * Comments controller
     */
    interface ICommentsController {
        /**
         * Get comments
         *
         * @param requestModel Request model
         */
        getComments(requestModel: GenModels.CommentsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CommentsModel>;
        /**
         * Add comment
         *
         * @param requestModel Request model
         */
        addComment(requestModel: GenModels.AddCommentRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Restore comment
         *
         * @param requestModel Request model
         */
        restoreComment(requestModel: GenModels.RestoreCommentModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Update comment
         *
         * @param requestModel Request model
         */
        updateComment(requestModel: GenModels.UpdateCommentRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Delete comment
         *
         * @param requestModel Request model
         */
        deleteComment(requestModel: GenModels.DeleteCommentRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.RestoreCommentModel>;
    }
    class CommentsController extends BaseController implements ICommentsController {
        getComments(requestModel: GenModels.CommentsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CommentsModel>;
        addComment(requestModel: GenModels.AddCommentRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        restoreComment(requestModel: GenModels.RestoreCommentModel, options?: RequestOptions): JQueryDeferred<void>;
        updateComment(requestModel: GenModels.UpdateCommentRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        deleteComment(requestModel: GenModels.DeleteCommentRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.RestoreCommentModel>;
    }
}
export declare type $CommentsController = {
    commentsController: GenControllers.ICommentsController;
};
export declare namespace GenControllers {
    /**
     * Signatyre controller
     */
    interface ISignatureController {
        /**
         * Gets available signature kind depends on certificate, settings, etc
         *
         * @param certEncoded certificate
         *
         * @returns JSON representation of {@link GenModels}
         */
        getSignatureKind(certEncoded: string, options?: RequestOptions): JQueryDeferred<GenModels.SignatureKindSelectionModel>;
    }
    class SignatureController extends BaseController implements ISignatureController {
        getSignatureKind(certEncoded: string, options?: RequestOptions): JQueryDeferred<GenModels.SignatureKindSelectionModel>;
    }
}
export declare type $SignatureController = {
    signatureController: GenControllers.ISignatureController;
};
export declare namespace GenControllers {
    /**
     * Application settings controller
     */
    interface IApplicationSettingsController {
        /**
         * /Api/System/GetApplicationSettings
         */
        get(options?: RequestOptions): JQueryDeferred<any>;
    }
    class ApplicationSettingsController extends BaseController implements IApplicationSettingsController {
        get(options?: RequestOptions): JQueryDeferred<any>;
    }
}
export declare type $ApplicationSettingsController = {
    applicationSettingsController: GenControllers.IApplicationSettingsController;
};
export declare namespace GenControllers {
    /**
     * Tasks tree controller
     */
    interface ITasksTreeController {
        /**
         * Get tasks tree
         *
         * @param requestModel Request model
         *
         * @returns Tasks tree
         */
        get(requestModel: GenModels.TasksTreeRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.TasksTreeModel>;
        /**
         * Get help model for node
         *
         * @param requestModel Request model
         *
         * @returns Help model for node
         */
        getNodeHelpModel(requestModel: GenModels.TasksTreeNodeHelpRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.TreeNodeHelpModel>;
    }
    class TasksTreeController extends BaseController implements ITasksTreeController {
        get(requestModel: GenModels.TasksTreeRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.TasksTreeModel>;
        getNodeHelpModel(requestModel: GenModels.TasksTreeNodeHelpRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.TreeNodeHelpModel>;
    }
}
export declare type $TasksTreeController = {
    tasksTreeController: GenControllers.ITasksTreeController;
};
export declare namespace GenControllers {
    /**
     * Layout partner controller
     */
    interface ILayoutPartnerController {
        /**
         * find department by name
         *
         * @param query search string
         */
        quickSearch(query: GenModels.PartnerQuickSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerQuickSearchResponse>;
        /**
         * find department by name
         *
         * @param query search string
         */
        loadTree(query: GenModels.PartnerLoadQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerTreeLoadResponse>;
        /**
         * find department by name
         *
         * @param query search string
         */
        directorySearch(query: GenModels.PartnerQuickSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerSearchResponse>;
    }
    class LayoutPartnerController extends BaseController implements ILayoutPartnerController {
        quickSearch(query: GenModels.PartnerQuickSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerQuickSearchResponse>;
        loadTree(query: GenModels.PartnerLoadQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerTreeLoadResponse>;
        directorySearch(query: GenModels.PartnerQuickSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.PartnerSearchResponse>;
    }
}
export declare type $LayoutPartnerController = {
    layoutPartnerController: GenControllers.ILayoutPartnerController;
};
export declare namespace GenControllers {
    /**
     * Controller for user settings of layout
     */
    interface ILayoutUserSettingsController {
        /**
         * Get settings for main menu
         */
        getMainMenuSettings(options?: RequestOptions): JQueryDeferred<GenModels.MainMenuSettings>;
        /**
         * Save settings for main menu
         *
         * @param settings Request model
         */
        saveMainMenuSettings(settings: GenModels.MainMenuSettings, options?: RequestOptions): JQueryDeferred<void>;
    }
    class LayoutUserSettingsController extends BaseController implements ILayoutUserSettingsController {
        getMainMenuSettings(options?: RequestOptions): JQueryDeferred<GenModels.MainMenuSettings>;
        saveMainMenuSettings(settings: GenModels.MainMenuSettings, options?: RequestOptions): JQueryDeferred<void>;
    }
}
export declare type $LayoutUserSettingsController = {
    layoutUserSettingsController: GenControllers.ILayoutUserSettingsController;
};
export declare namespace GenControllers {
    /**
     * Pages controller
     */
    interface IPagesController {
        /**
         * Get recent cards
         *
         * @param requestModel Request model
         *
         * @returns Model with list of recent cards
         */
        recentCards(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CardListViewModel>;
    }
    class PagesController extends BaseController implements IPagesController {
        recentCards(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CardListViewModel>;
    }
}
export declare type $PagesController = {
    pagesController: GenControllers.IPagesController;
};
export declare namespace GenControllers {
    /**
     * Grid controller
     */
    interface IGridController {
        /**
         * Get card list
         *
         * TODO: make http get
         *
         * @param requestModel Request model
         */
        getCardList(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CardListViewModel>;
        /**
         * Get grid filter layout model
         *
         * @param requestModel Request model
         */
        getFilter(requestModel: GenModels.GridFilterRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        /**
         * Get grid data
         *
         * @param requestModel Request model
         *
         * @returns Grid data
         */
        getGridData(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GridViewModel>;
        /**
         * Get grid data silently
         *
         * @param requestModel Request model
         *
         * @returns Grid data
         */
        getGridDataSilent(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GridViewModel>;
    }
    class GridController extends BaseController implements IGridController {
        getCardList(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.CardListViewModel>;
        getFilter(requestModel: GenModels.GridFilterRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        getGridData(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GridViewModel>;
        getGridDataSilent(requestModel: GenModels.CardListRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GridViewModel>;
    }
}
export declare type $GridController = {
    gridController: GenControllers.IGridController;
};
export declare namespace GenControllers {
    /**
     * Layout controller
     */
    interface ILayoutController {
        /**
         * Get layout
         *
         * @param layoutPositionName Position name
         * @param cardId Card id
         *
         * @returns Layout model
         */
        get(layoutPositionName: string, cardId?: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        /**
         * Get layout
         */
        getWithParams(request: GenModels.GetRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        /**
         * Get specified control info from whole layout
         *
         * @param layoutPositionName Position name
         * @param controlName Control name
         * @param cardId Card id
         *
         * @returns Layout model with control info
         */
        getPart(layoutPositionName: string, controlName: string, cardId?: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        /**
         * Get specified control info from whole layout
         *
         * @returns Layout model with control info
         */
        getPartWithParams(request: GenModels.GetPartRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
    }
    class LayoutController extends BaseController implements ILayoutController {
        get(layoutPositionName: string, cardId?: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        getWithParams(request: GenModels.GetRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        getPart(layoutPositionName: string, controlName: string, cardId?: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
        getPartWithParams(request: GenModels.GetPartRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutViewModel>;
    }
}
export declare type $LayoutController = {
    layoutController: GenControllers.ILayoutController;
};
export declare namespace GenControllers {
    /**
     * Layout history controller
     */
    interface ILayoutHistoryController {
        /**
         * Get history records
         *
         * @param query search string
         */
        getHistoryRecords(query: GenModels.HistorySearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.HistorySearchResult>;
    }
    class LayoutHistoryController extends BaseController implements ILayoutHistoryController {
        getHistoryRecords(query: GenModels.HistorySearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.HistorySearchResult>;
    }
}
export declare type $LayoutHistoryController = {
    layoutHistoryController: GenControllers.ILayoutHistoryController;
};
export declare namespace GenControllers {
    /**
     * Layout card kind controller
     */
    interface ILayoutCardKindController {
        /**
         * Load kinds tree
         */
        loadTree(options?: RequestOptions): JQueryDeferred<Array<GenModels.CardKindInfoModel>>;
    }
    class LayoutCardKindController extends BaseController implements ILayoutCardKindController {
        loadTree(options?: RequestOptions): JQueryDeferred<Array<GenModels.CardKindInfoModel>>;
    }
}
export declare type $LayoutCardKindController = {
    layoutCardKindController: GenControllers.ILayoutCardKindController;
};
export declare namespace GenControllers {
    /**
     * Card types controller
     */
    interface ICardTypesController {
        /**
         * Gets card types
         */
        get(options?: RequestOptions): JQueryDeferred<any>;
    }
    class CardTypesController extends BaseController implements ICardTypesController {
        get(options?: RequestOptions): JQueryDeferred<any>;
    }
}
export declare type $CardTypesController = {
    cardTypesController: GenControllers.ICardTypesController;
};
export declare namespace GenControllers {
    /**
     * Layout tasks controller
     */
    interface ILayoutTasksController {
        /**
         * GET: /LayoutTasks/GetTasks
         */
        getTaskList(request: GenModels.GetTasksListRequestModel, options?: RequestOptions): JQueryDeferred<Array<GenModels.TaskDataModel>>;
        /**
         * Get tasks by specified card id
         *
         * @param cardId Card id
         * @param availableKinds List of available kinds ids
         */
        getTasks(cardId: string, availableKinds: Array<string>, options?: RequestOptions): JQueryDeferred<Array<GenModels.TaskDataModel>>;
        /**
         * GET: /LayoutTasks/GetChildTasksComments
         */
        getChildTasksComments(request: GenModels.GetChildTasksCommentsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GetChildTasksCommentsResponseModel>;
        /**
         * GET: /LayoutTasks/GetChildTasksComments
         */
        addTaskComments(request: GenModels.AddTaskCommentsRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * GET: /LayoutTasks/CreateChildTasks
         */
        createChildTasks(request: GenModels.CreateChildTasksRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * POST: /LayoutTasks/GetDelegateRecords
         *
         * @param request Request model
         */
        getDelegationRecords(request: GenModels.GetDelegationRecordsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.DelegateRecords>;
    }
    class LayoutTasksController extends BaseController implements ILayoutTasksController {
        getTaskList(request: GenModels.GetTasksListRequestModel, options?: RequestOptions): JQueryDeferred<Array<GenModels.TaskDataModel>>;
        getTasks(cardId: string, availableKinds: Array<string>, options?: RequestOptions): JQueryDeferred<Array<GenModels.TaskDataModel>>;
        getChildTasksComments(request: GenModels.GetChildTasksCommentsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.GetChildTasksCommentsResponseModel>;
        addTaskComments(request: GenModels.AddTaskCommentsRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        createChildTasks(request: GenModels.CreateChildTasksRequestModel, options?: RequestOptions): JQueryDeferred<void>;
        getDelegationRecords(request: GenModels.GetDelegationRecordsRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.DelegateRecords>;
    }
}
export declare type $LayoutTasksController = {
    layoutTasksController: GenControllers.ILayoutTasksController;
};
export declare namespace GenControllers {
    /**
     * Layout file controller
     */
    interface ILayoutAgreementController {
        /**
         * Get agreement list
         *
         * @param cardId Card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementList(cardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementListModel>;
        /**
         * Get model for AgreementManagement control
         *
         * @param cardId Document card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementManagementModel(cardId: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutAgreementManagementModel>;
        /**
         * Gets model for the start agreement in AgreementManagementControl
         *
         * @param documentCardId Document card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementManagementStartModel(documentCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementManagementStartModel>;
        /**
         * Gets model for the edit agreement in AgreementManagementControl
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementManagementEditModel(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementManagementEditModel>;
        /**
         * Gets template stages AgreementManagementControl
         *
         * @param documentId Document id
         * @param templateId Template id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementTemplateStages(documentId: string, templateId: string, options?: RequestOptions): JQueryDeferred<Array<GenModels.StageModel>>;
        /**
         * Create Reconciliation
         *
         * @param model Reconcilation creation model
         *
         * @returns JSON representation of {@link GenModels}
         */
        createReconciliation(model: GenModels.ReconcilationCreationModel, options?: RequestOptions): JQueryDeferred<string>;
        /**
         * Create Reconciliation
         *
         * @param model Reconcilation edit model
         *
         * @returns JSON representation of {@link GenModels}
         */
        changeStages(model: GenModels.ReconcilationEditModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Interrupt current stages
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        interruptCurrentStages(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Stop agreement
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        agreementStop(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Finish agreement
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Resoncile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        agreementFinish(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Pause agreement
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        agreementPause(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Resume agreement
         *
         * @param documentCardId Document card id
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        agreementResume(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Get agreement history
         *
         * @param reconcileCardId Reconcile card id
         *
         * @returns JSON representation of {@link GenModels}
         */
        getAgreementHistory(reconcileCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.ApprovalHistoryViewModel>;
    }
    class LayoutAgreementController extends BaseController implements ILayoutAgreementController {
        getAgreementList(cardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementListModel>;
        getAgreementManagementModel(cardId: string, options?: RequestOptions): JQueryDeferred<GenModels.LayoutAgreementManagementModel>;
        getAgreementManagementStartModel(documentCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementManagementStartModel>;
        getAgreementManagementEditModel(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.AgreementManagementEditModel>;
        getAgreementTemplateStages(documentId: string, templateId: string, options?: RequestOptions): JQueryDeferred<Array<GenModels.StageModel>>;
        createReconciliation(model: GenModels.ReconcilationCreationModel, options?: RequestOptions): JQueryDeferred<string>;
        changeStages(model: GenModels.ReconcilationEditModel, options?: RequestOptions): JQueryDeferred<void>;
        interruptCurrentStages(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        agreementStop(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        agreementFinish(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        agreementPause(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        agreementResume(documentCardId: string, reconcileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        getAgreementHistory(reconcileCardId: string, options?: RequestOptions): JQueryDeferred<GenModels.ApprovalHistoryViewModel>;
    }
}
export declare type $LayoutAgreementController = {
    layoutAgreementController: GenControllers.ILayoutAgreementController;
};
export declare namespace GenControllers {
    /**
     * Layout card controller
     */
    interface ILayoutCardController {
        /**
         * HTTP: /LayoutCard/NewCard
         */
        newCard(createParams: GenModels.LayoutCardCreateParams, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        /**
         * HTTP: /LayoutCard/View
         */
        view(cardId: string, layoutMode: string, refresh?: boolean, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        /**
         * HTTP: /LayoutCard/Edit
         */
        edit(cardId: string, layoutMode: string, refresh?: boolean, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        /**
         * HTTP: /LayoutCard/Delete
         */
        delete(cardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Gets layout part
         *
         * @param layoutPartParams layout part params
         */
        getLayoutPart(layoutPartParams: GenModels.LayoutPartParams, options?: RequestOptions): JQueryDeferred<GenModels.LayoutModel>;
        /**
         * HTTP: /LayoutCard/Save
         */
        save(model: GenModels.SaveControlDataModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * HTTP: /LayoutCard/CheckModifiedAndLocked
         */
        checkModifiedAndLocked(cardId: string, timestamp: number, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * HTTP: /LayoutCard/ChangeState
         */
        changeState(changeStateDataModel: GenModels.ChangeStateDataModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        /**
         * HTTP: /LayoutCard/CheckAccess
         */
        checkAccess(cardId: string, options?: RequestOptions): JQueryDeferred<boolean>;
    }
    class LayoutCardController extends BaseController implements ILayoutCardController {
        newCard(createParams: GenModels.LayoutCardCreateParams, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        view(cardId: string, layoutMode: string, refresh?: boolean, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        edit(cardId: string, layoutMode: string, refresh?: boolean, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        delete(cardId: string, options?: RequestOptions): JQueryDeferred<void>;
        getLayoutPart(layoutPartParams: GenModels.LayoutPartParams, options?: RequestOptions): JQueryDeferred<GenModels.LayoutModel>;
        save(model: GenModels.SaveControlDataModel, options?: RequestOptions): JQueryDeferred<void>;
        checkModifiedAndLocked(cardId: string, timestamp: number, options?: RequestOptions): JQueryDeferred<void>;
        changeState(changeStateDataModel: GenModels.ChangeStateDataModel, options?: RequestOptions): JQueryDeferred<GenModels.LayoutCardViewModel>;
        checkAccess(cardId: string, options?: RequestOptions): JQueryDeferred<boolean>;
    }
}
export declare type $LayoutCardController = {
    layoutCardController: GenControllers.ILayoutCardController;
};
export declare namespace GenControllers {
    /**
     * Layout directory designer controller
     */
    interface ILayoutDirectoryDesignerController {
        /**
         * Find department by name
         *
         * @param query Search string
         */
        findRows(query: GenModels.DirectoryDesignerSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.DirectoryDesignerSearchResult>;
        /**
         * Load directory tree nodes
         *
         * @param query Search query params
         */
        loadTree(query: GenModels.DirectoryDesignerLoadTreeQuery, options?: RequestOptions): JQueryDeferred<Array<GenModels.DirectoryDesignerTreeNode>>;
        /**
         * Find in tree
         *
         * @param query Search query params
         */
        findInTree(query: GenModels.DirectoryDesignerSearchTreeQuery, options?: RequestOptions): JQueryDeferred<GenModels.DirectoryDesignerSearchTreeResult>;
    }
    class LayoutDirectoryDesignerController extends BaseController implements ILayoutDirectoryDesignerController {
        findRows(query: GenModels.DirectoryDesignerSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.DirectoryDesignerSearchResult>;
        loadTree(query: GenModels.DirectoryDesignerLoadTreeQuery, options?: RequestOptions): JQueryDeferred<Array<GenModels.DirectoryDesignerTreeNode>>;
        findInTree(query: GenModels.DirectoryDesignerSearchTreeQuery, options?: RequestOptions): JQueryDeferred<GenModels.DirectoryDesignerSearchTreeResult>;
    }
}
export declare type $LayoutDirectoryDesignerController = {
    layoutDirectoryDesignerController: GenControllers.ILayoutDirectoryDesignerController;
};
export declare namespace GenControllers {
    /**
     * Layout document card controller
     */
    interface ILayoutDocumentController {
        /**
         * Generate number and optionally save it to the card
         *
         * @param request Number generation request
         */
        generateNumber(request: GenModels.GenerateNumberRequest, options?: RequestOptions): JQueryDeferred<GenModels.NumberInfo>;
        /**
         * Release document number
         */
        releaseNumber(request: GenModels.ReleaseNumberRequest, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Runs acquaintance business process for specified employees
         */
        sendForAcquaintance(request: GenModels.SendForAcquaintanceRequest, options?: RequestOptions): JQueryDeferred<void>;
    }
    class LayoutDocumentController extends BaseController implements ILayoutDocumentController {
        generateNumber(request: GenModels.GenerateNumberRequest, options?: RequestOptions): JQueryDeferred<GenModels.NumberInfo>;
        releaseNumber(request: GenModels.ReleaseNumberRequest, options?: RequestOptions): JQueryDeferred<void>;
        sendForAcquaintance(request: GenModels.SendForAcquaintanceRequest, options?: RequestOptions): JQueryDeferred<void>;
    }
}
export declare type $LayoutDocumentController = {
    layoutDocumentController: GenControllers.ILayoutDocumentController;
};
export declare namespace GenControllers {
    /**
     * Defines abstract class for file upload web api controllers
     */
    interface IFileUploadApiController {
    }
    abstract class FileUploadApiController extends BaseController implements IFileUploadApiController {
    }
}
export declare type $FileUploadApiController = {
    fileUploadApiController: GenControllers.IFileUploadApiController;
};
export declare namespace GenControllers {
    /**
     * Layout file api controller
     */
    interface ILayoutFileApiController {
        /**
         * POST: /LayoutFileApi/AddFiles
         */
        addFiles(options?: RequestOptions): JQueryDeferred<any>;
        /**
         * POST: /DocumentCardApi/AddNewMainFileVersion
         */
        addNewMainFileVersion(options?: RequestOptions): JQueryDeferred<any>;
        /**
         * POST: /LayoutFileApi/AddFiles
         */
        uploadFiles(options?: RequestOptions): JQueryDeferred<any>;
        /**
         * GET: /LayoutFileApi/DeleteFiles
         */
        deleteFiles(fileIdList: Array<string>, options?: RequestOptions): JQueryDeferred<void>;
    }
    class LayoutFileApiController extends GenControllers.FileUploadApiController implements ILayoutFileApiController {
        addFiles(options?: RequestOptions): JQueryDeferred<any>;
        addNewMainFileVersion(options?: RequestOptions): JQueryDeferred<any>;
        uploadFiles(options?: RequestOptions): JQueryDeferred<any>;
        deleteFiles(fileIdList: Array<string>, options?: RequestOptions): JQueryDeferred<void>;
    }
}
export declare type $LayoutFileApiController = {
    layoutFileApiController: GenControllers.ILayoutFileApiController;
};
export declare namespace GenControllers {
    /**
     * Layout file controller
     */
    interface ILayoutFileController {
        /**
         * POST: /LayoutFile/GetFiles
         */
        getFiles(request: GenModels.GetFilesRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModelBase>;
        /**
         * POST: /LayoutFile/GetVersions
         */
        getVersions(request: GenModels.GetVersionsRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListVersionsDataModel>;
        /**
         * POST: /LayoutFile/GetComments
         */
        getComments(request: GenModels.GetCommentsRequest, options?: RequestOptions): JQueryDeferred<GenModels.VersionedFileCommentListModel>;
        /**
         * POST: /LayoutFile/AddOrUpdateComment
         */
        addOrUpdateComment(versionedFileCommentCreateModel: GenModels.VersionedFileCommentCreateModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * GET: /LayoutFile/DeleteComment
         */
        deleteComment(versionedFileCommentDeleteModel: GenModels.VersionedFileCommentDeleteModel, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * GET: /LayoutFile/LockFile
         */
        lockFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
        /**
         * Will be remake after task with layout
         *
         * @param ownerCardId Owner card id
         * @param fileCardId File card id
         */
        lockTaskFile(ownerCardId: string, fileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * GET: /LayoutFile/UnlockFile
         */
        unlockFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
        /**
         * Will be remake after task with layout
         *
         * @param ownerCardId Owner card id
         * @param fileCardId File card id
         */
        unlockTaskFile(ownerCardId: string, fileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * GET: /LayoutFile/DeleteFile
         */
        deleteFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
    }
    class LayoutFileController extends BaseController implements ILayoutFileController {
        getFiles(request: GenModels.GetFilesRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModelBase>;
        getVersions(request: GenModels.GetVersionsRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListVersionsDataModel>;
        getComments(request: GenModels.GetCommentsRequest, options?: RequestOptions): JQueryDeferred<GenModels.VersionedFileCommentListModel>;
        addOrUpdateComment(versionedFileCommentCreateModel: GenModels.VersionedFileCommentCreateModel, options?: RequestOptions): JQueryDeferred<void>;
        deleteComment(versionedFileCommentDeleteModel: GenModels.VersionedFileCommentDeleteModel, options?: RequestOptions): JQueryDeferred<void>;
        lockFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
        lockTaskFile(ownerCardId: string, fileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        unlockFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
        unlockTaskFile(ownerCardId: string, fileCardId: string, options?: RequestOptions): JQueryDeferred<void>;
        deleteFile(request: GenModels.CommmonFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.FileListDataModel>;
    }
}
export declare type $LayoutFileController = {
    layoutFileController: GenControllers.ILayoutFileController;
};
export declare namespace GenControllers {
    /**
     * Layout file controller
     */
    interface ILayoutFolderController {
        /**
         * Get user folders partial tree (only two levels deep).
         *
         * @param request Request model
         */
        getUserFoldersTreeData(request: GenModels.GetUserFoldersTreeDataRequest, options?: RequestOptions): JQueryDeferred<Array<GenModels.FolderNode>>;
        /**
         * Check folder settings, to determine if specified card can be created in this folder
         *
         * @param request Request model
         *
         * @returns JSON representation of {@link GenModels} value, indicating result of the check.
         */
        checkFolderForAvailableCardKind(request: GenModels.CheckFolderForAvailableCardKindRequest, options?: RequestOptions): JQueryDeferred<GenModels.CheckResult>;
        /**
         * Returns common information about folder.
         *
         * @param request Request model
         *
         * @returns Info about folder, see {@link GenModels}
         */
        getFolderInfo(request: GenModels.GetFolderInfoRequest, options?: RequestOptions): JQueryDeferred<GenModels.FolderNode>;
        /**
         * Returns common information about folder.
         *
         * @param request Request model
         *
         * @returns Folder node with parents
         */
        getFolderInfoWithParents(request: GenModels.GetFolderInfoWithParentsRequest, options?: RequestOptions): JQueryDeferred<GenModels.FolderNodeWithParents>;
        /**
         * Detach user folder.
         *
         * @param request Request model
         *
         * @returns JSON representation of {@link GenModels} value, indicating result of the detach.
         */
        detachUserFolders(request: GenModels.DetachUserFoldersRequest, options?: RequestOptions): JQueryDeferred<void>;
        /**
         * Refresh folders settings cache
         */
        refreshFolders(options?: RequestOptions): JQueryDeferred<void>;
    }
    class LayoutFolderController extends BaseController implements ILayoutFolderController {
        getUserFoldersTreeData(request: GenModels.GetUserFoldersTreeDataRequest, options?: RequestOptions): JQueryDeferred<Array<GenModels.FolderNode>>;
        checkFolderForAvailableCardKind(request: GenModels.CheckFolderForAvailableCardKindRequest, options?: RequestOptions): JQueryDeferred<GenModels.CheckResult>;
        getFolderInfo(request: GenModels.GetFolderInfoRequest, options?: RequestOptions): JQueryDeferred<GenModels.FolderNode>;
        getFolderInfoWithParents(request: GenModels.GetFolderInfoWithParentsRequest, options?: RequestOptions): JQueryDeferred<GenModels.FolderNodeWithParents>;
        detachUserFolders(request: GenModels.DetachUserFoldersRequest, options?: RequestOptions): JQueryDeferred<void>;
        refreshFolders(options?: RequestOptions): JQueryDeferred<void>;
    }
}
export declare type $LayoutFolderController = {
    layoutFolderController: GenControllers.ILayoutFolderController;
};
export declare namespace GenControllers {
    /**
     * Layout links controller
     */
    interface ILayoutLinksController {
        /**
         * GET: /LayoutLinks/DeleteLink
         */
        deleteLink(request: GenModels.DeleteLinkRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * GET: /LayoutLinks/DeleteFileLink
         */
        deleteFile(request: GenModels.DeleteFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * GET: /LayoutLinks/GetLinkTypes
         */
        getLinkTypes(options?: RequestOptions): JQueryDeferred<Array<GenModels.LinkType>>;
        /**
         * POST: /LayoutLinks/CardCreateLinks
         */
        cardCreateLinks(allowedKinds: Array<GenModels.AllowedCardKind>, options?: RequestOptions): JQueryDeferred<Array<GenModels.LayoutKindModel>>;
        /**
         * POST: /LayoutLinks/AddExistingCardLink
         */
        addExistingCardLink(linkParams: GenModels.LayoutLinkCreateParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * POST: /LayoutLinks/AddUrlLink
         *
         * @param addUrlLinkParams
         */
        addUrlLink(addUrlLinkParams: GenModels.AddUrlLinkParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * POST: /LayoutLinks/AddFilesLinks
         */
        addFilesLinks(options?: RequestOptions): JQueryDeferred<any>;
        /**
         * POST: /LayoutLinks/SetLinkDescription
         */
        setLinkDescription(data: GenModels.LayoutSetLinkDescriptionParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * POST: /LayoutLinks/GetLinks
         */
        getLinks(request: GenModels.GetLinksRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        /**
         * POST: /LayoutLinks/CheckReadMainFileAvailable
         */
        checkReadMainFileAvailable(request: GenModels.CheckReadMainFileAvailableRequest, options?: RequestOptions): JQueryDeferred<boolean>;
    }
    class LayoutLinksController extends BaseController implements ILayoutLinksController {
        deleteLink(request: GenModels.DeleteLinkRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        deleteFile(request: GenModels.DeleteFileRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        getLinkTypes(options?: RequestOptions): JQueryDeferred<Array<GenModels.LinkType>>;
        cardCreateLinks(allowedKinds: Array<GenModels.AllowedCardKind>, options?: RequestOptions): JQueryDeferred<Array<GenModels.LayoutKindModel>>;
        addExistingCardLink(linkParams: GenModels.LayoutLinkCreateParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        addUrlLink(addUrlLinkParams: GenModels.AddUrlLinkParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        addFilesLinks(options?: RequestOptions): JQueryDeferred<any>;
        setLinkDescription(data: GenModels.LayoutSetLinkDescriptionParams, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        getLinks(request: GenModels.GetLinksRequest, options?: RequestOptions): JQueryDeferred<GenModels.LinksDataModel>;
        checkReadMainFileAvailable(request: GenModels.CheckReadMainFileAvailableRequest, options?: RequestOptions): JQueryDeferred<boolean>;
    }
}
export declare type $LayoutLinksController = {
    layoutLinksController: GenControllers.ILayoutLinksController;
};
export declare namespace GenControllers {
    /**
     * Layout controller for staff directory
     */
    interface ILayoutStaffController {
        /**
         * Find department by name
         *
         * @param query Search string
         */
        findDepartments(query: GenModels.DepartmentSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.FindDepartmentsResponse>;
        /**
         * Find departments tree by search query
         *
         * @param query Search query
         */
        loadDepartmentsTree(query: GenModels.DepartmentLoadTreeQuery, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentTreeNode>>;
        /**
         * Find in departmt's tree
         */
        findInDepartmentsTree(query: GenModels.DepartmentFindInTreeQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentFindInTreeResult>;
        /**
         * Get departments info
         */
        getDepartmentsInfo(departmentIds: Array<string>, source?: GenModels.DepartmentDataSource, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentExtendedModel>>;
        /**
         * Get employees and departments info
         */
        getStaffInfo(request: GenModels.StaffInfoRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.StaffInfoResponseModel>;
        /**
         * Get departments and all its parents info
         */
        getDepartmentPath(departmentId: string, source?: GenModels.DepartmentDataSource, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentExtendedModel>>;
        /**
         * Load department by parent
         *
         * @param query search query
         */
        loadDepartmentsFlat(query: GenModels.DepartmentLoadFlatQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentLoadFlatResponse>;
        /**
         * Find department by name
         *
         * @param query search string
         */
        findInDepartmentsFlat(query: GenModels.DepartmentSearchFlatQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentSearchFlatResponse>;
        /**
         * Find department by name
         *
         * @param query search string
         */
        getParentDepartments(query: GenModels.GetParentDepartmentsRequest, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentModel>>;
        /**
         * Get employee image by employee id
         */
        getEmployeeImage(employeeId: string, imageHash?: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * HTTP: /Employees/Find
         */
        findEmployees(request: GenModels.FindEmployeesRequest, options?: RequestOptions): JQueryDeferred<GenModels.FindEmployeesResponse>;
    }
    class LayoutStaffController extends BaseController implements ILayoutStaffController {
        findDepartments(query: GenModels.DepartmentSearchQuery, options?: RequestOptions): JQueryDeferred<GenModels.FindDepartmentsResponse>;
        loadDepartmentsTree(query: GenModels.DepartmentLoadTreeQuery, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentTreeNode>>;
        findInDepartmentsTree(query: GenModels.DepartmentFindInTreeQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentFindInTreeResult>;
        getDepartmentsInfo(departmentIds: Array<string>, source?: GenModels.DepartmentDataSource, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentExtendedModel>>;
        getStaffInfo(request: GenModels.StaffInfoRequestModel, options?: RequestOptions): JQueryDeferred<GenModels.StaffInfoResponseModel>;
        getDepartmentPath(departmentId: string, source?: GenModels.DepartmentDataSource, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentExtendedModel>>;
        loadDepartmentsFlat(query: GenModels.DepartmentLoadFlatQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentLoadFlatResponse>;
        findInDepartmentsFlat(query: GenModels.DepartmentSearchFlatQuery, options?: RequestOptions): JQueryDeferred<GenModels.DepartmentSearchFlatResponse>;
        getParentDepartments(query: GenModels.GetParentDepartmentsRequest, options?: RequestOptions): JQueryDeferred<Array<GenModels.DepartmentModel>>;
        getEmployeeImage(employeeId: string, imageHash?: string, options?: RequestOptions): JQueryDeferred<any>;
        findEmployees(request: GenModels.FindEmployeesRequest, options?: RequestOptions): JQueryDeferred<GenModels.FindEmployeesResponse>;
    }
}
export declare type $LayoutStaffController = {
    layoutStaffController: GenControllers.ILayoutStaffController;
};
export declare namespace GenControllers {
    /**
     * Resources controller
     */
    interface ILocalizationController {
        /**
         * Gets localization
         */
        get(options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Updates localization
         */
        setUserLocale(locale: string, options?: RequestOptions): JQueryDeferred<any>;
    }
    class LocalizationController extends BaseController implements ILocalizationController {
        get(options?: RequestOptions): JQueryDeferred<any>;
        setUserLocale(locale: string, options?: RequestOptions): JQueryDeferred<any>;
    }
}
export declare type $LocalizationController = {
    localizationController: GenControllers.ILocalizationController;
};
export declare namespace GenControllers {
    /**
     * WebDAV controller
     */
    interface IWebDavController {
        /**
         * Getting file
         *
         * @param id File card identifier
         * @param idext File name
         */
        get(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Request for resource existance
         *
         * @param id File card identifier
         * @param idext File name
         */
        head(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Request for resource locking
         *
         * @param id File card identifier
         * @param idext File name
         */
        lock(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Request for root resource
         *
         * @param id File card identifier
         *
         * @returns Returns supported Http methods list
         */
        options(id: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Get resource properties
         *
         * @param id File card identifier
         * @param idext File name
         */
        propfind(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Changing resource properties
         *
         * @param id File card identifier
         * @param idext File name
         */
        proppatch(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Changing file card content (adding file version)
         *
         * @param id File card identifier
         * @param idext File name
         */
        put(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        /**
         * Request for unlocking resource
         *
         * @param id File card identifier
         * @param idext File name
         */
        unlock(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
    }
    class WebDavController extends BaseController implements IWebDavController {
        get(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        head(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        lock(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        options(id: string, options?: RequestOptions): JQueryDeferred<any>;
        propfind(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        proppatch(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        put(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
        unlock(id: string, idext: string, options?: RequestOptions): JQueryDeferred<any>;
    }
}
export declare type $WebDavController = {
    webDavController: GenControllers.IWebDavController;
};
