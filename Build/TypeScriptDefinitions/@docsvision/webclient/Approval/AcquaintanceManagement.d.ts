import { AcquaintanceManagementImpl, AcquaintanceManagementState } from "@docsvision/webclient/Approval/AcquaintanceManagementImpl";
import { $LayoutDocumentController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Содержит публичные свойства элемента управления [Отправка на ознакомление]{@link AcquaintanceManagement}.
 */
export declare class AcquaintanceManagementParams extends PanelParams {
    /** Текст кнопки отправки на ознакомление */
    sendAcquaintanceButtonText?: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Флаг доступности отправки на ознакомление */
    canSend?: boolean;
    /** Событие возникает при открытии панели отправки на ознакомление. */
    opening?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после открытия панели отправки на ознакомление. */
    opened?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при закрытии панели отправки на ознакомление. */
    closing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после закрытия панели отправки на ознакомление. */
    closed?: BasicApiEvent<IEventArgs>;
    services?: $LayoutDocumentController & $CardId & $EditOperationStore;
}
/**
 * Класс элемента управления Отправка на ознакомление.
 */
export declare class AcquaintanceManagement extends Panel<AcquaintanceManagementParams, AcquaintanceManagementState> {
    constructor(props: AcquaintanceManagementParams);
    protected createParams(): AcquaintanceManagementParams;
    /** @internal */
    protected binding: IBindingResult<boolean>;
    protected createImpl(): AcquaintanceManagementImpl;
}
