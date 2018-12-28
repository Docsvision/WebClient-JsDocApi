import { AgreementListParams } from "@docsvision/webclient/Approval/AgreementList";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
/** @internal */
export interface AgreementListState extends AgreementListParams, BaseControlState {
    getAgreementList: () => JQueryDeferred<GenModels.AgreementListModel>;
    loading: boolean;
    dialog: ModalWindow;
    lastLoadedData: GenModels.AgreementListModel;
}
/** @internal */
export declare type AgreementListImplState = AgreementListState;
export declare type AgreementListImplProps = AgreementListState;
/** @internal */
export declare class AgreementListImpl extends BaseControlImpl<AgreementListParams, AgreementListState> {
    constructor(props: AgreementListParams, state: AgreementListState);
    getCssClass(): string;
    showReport(): void;
    hideReport(): void;
    showModalWindow(data: GenModels.AgreementListModel): void;
    renderControl(): JSX.Element;
}
