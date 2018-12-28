import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
export declare class ApprovalTaskView {
    private widget;
    private widgetId;
    private decision;
    constructor(widgetId: string);
    private Initialize;
    protected onCardChanged: (message: IRealTimeCommunicationMessage<any>) => void;
}
