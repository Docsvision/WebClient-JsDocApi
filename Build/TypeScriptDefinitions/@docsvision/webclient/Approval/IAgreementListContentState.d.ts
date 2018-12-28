import { IAgreementListTableColumn } from "@docsvision/webclient/Approval/IAgreementListTableColumn";
import { IAgreementListRenderEventArgs } from "@docsvision/webclient/Approval/IAgreementListRenderEventArgs";
import { IBasicEvent } from "@docsvision/webclient/System/IBasicEvent";
/** @internal */
export interface IAgreementListContentState {
    columns: IAgreementListTableColumn[];
    commentColumn: IAgreementListTableColumn;
    onRender: IBasicEvent<IAgreementListRenderEventArgs>;
}
