import { IAgreementSidebarCallbacks } from "@docsvision/webclient/Legacy/IAgreementSidebarCallbacks";
import { IEmployeeItemData } from "@docsvision/webclient/Legacy/IEmployeeItemData";
/** @internal */
export declare class AgreementSidebar {
    private static TemplateContentClassName;
    private static AgreementBtnClassName;
    private static CancelBtnClassName;
    private static TemplateSelectClassName;
    private traceProvider;
    private callbacks;
    private agreementStarted;
    SelectingCallbackFunc: (employeeData: IEmployeeItemData) => JQueryDeferred<any>;
    SelectedCallbackFunc: (employeeData: IEmployeeItemData) => void;
    DeletingCallbackFunc: (employeeId: string) => JQueryDeferred<any>;
    DeletedCallbackFunc: (employeeId: string) => void;
    private static SecondStepId;
    private static TemplateSpanId;
    private static SubmitBtnId;
    private rootElement;
    private agreementBtn;
    private templateSelect;
    private templateSpan;
    private sidebarElement;
    private templateContent;
    private submitBtn;
    private sidebar;
    private readonly SelectedTemplate;
    constructor(root: HTMLElement, callbacks?: IAgreementSidebarCallbacks);
    OpenSidebar(): void;
    private Init;
    private LoadTemplateContent;
    private ShowCreateBtn;
    private ParseAgreementParams;
    private SubmitForm;
    private ValidateControls;
}
