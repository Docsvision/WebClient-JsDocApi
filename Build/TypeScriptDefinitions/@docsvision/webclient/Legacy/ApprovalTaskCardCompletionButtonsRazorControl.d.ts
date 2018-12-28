import { BaseRazorControl, BaseRazorControlParams, BaseRazorControlState } from "@docsvision/webclient/Legacy/BaseRazorControl";
/** @internal */
export declare class ApprovalTaskCardCompletionButtonsRazorControlParams extends BaseRazorControlParams {
    /** Определяет расположение кнопок - в строку (true) или в столбик (false). */
    horizontalLayout: boolean;
}
/** @internal */
export interface ApprovalTaskCardCompletionButtonsRazorControlState extends ApprovalTaskCardCompletionButtonsRazorControlParams, BaseRazorControlState {
}
/** @internal */
export declare class ApprovalTaskCardCompletionButtonsRazorControl extends BaseRazorControl<ApprovalTaskCardCompletionButtonsRazorControlParams, ApprovalTaskCardCompletionButtonsRazorControlState> {
    protected createParams(): ApprovalTaskCardCompletionButtonsRazorControlParams;
    /** @internal */
    renderControl(): JSX.Element;
}
