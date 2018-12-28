import { TaskDecision } from "@docsvision/webclient/Legacy/TaskCardView";
import { RightSidebar } from "@docsvision/webclient/Legacy/RightSidebar";
export declare class ApprovalTaskDecision extends TaskDecision {
    protected ExcecuteDecision(url: string, needShowDialog: boolean, callback?: Function): JQueryDeferred<any>;
    private SignData;
    protected SubmitForm(form: HTMLFormElement, panel: RightSidebar, isSingleClick?: boolean): void;
    protected SendFormData(form: HTMLFormElement, panel: RightSidebar, callback?: Function): JQueryDeferred<any>;
    private ShowSelectCertificateDialog;
}
