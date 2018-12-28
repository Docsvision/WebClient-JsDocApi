import { AgreementListImpl, AgreementListState } from "@docsvision/webclient/Approval/AgreementListImpl";
import { IAgreementListReportOpenedEventArgs } from "@docsvision/webclient/Approval/IAgreementListReportOpenedEventArgs";
import { IAgreementListReportOpeningEventArgs } from "@docsvision/webclient/Approval/IAgreementListReportOpeningEventArgs";
import { $LayoutAgreementController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $SiteUrl } from "@docsvision/webclient/StandardServices";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { Optional } from "@docsvision/webclient/System/ServiceContainer";
/**
 * Содержит публичные свойства элемента управления [Лист согласования]{@link AgreementList}.
 */
export declare class AgreementListParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Данные листа согласования. */
    data?: GenModels.AgreementListModel;
    /** Текст, отображаемый на кнопке открытия листа согласования. */
    buttonText?: string;
    /**
     * Флаг, определяющий возможность отображения листа согласования:
     * true - возможно (если данные для отображения доступны и разрешена настроенная операция редактирования),
     * false - невозможно.
     */
    canShowReport?: boolean;
    /** Идентификатор текущей карточки. */
    cardId?: string;
    /** Текст всплывающей подсказки */
    tip?: string;
    /** События возникает при открытии окна листа согласования. */
    agreementReportOpening?: CancelableApiEvent<IAgreementListReportOpeningEventArgs>;
    /** События возникает при закрытии окна листа согласования. */
    agreementReportClosing?: CancelableApiEvent<IEventArgs>;
    /** События возникает после открытия окна листа согласования. */
    agreementReportOpened?: BasicApiEvent<IAgreementListReportOpenedEventArgs>;
    /** События возникает после закрытия окна листа согласования. */
    agreementReportClosed?: BasicApiEvent<IEventArgs>;
    services?: $LayoutAgreementController & $EditOperationStore & Optional<$CardId> & Optional<$SiteUrl>;
}
/**
 * Класс элемента управления Лист согласования.
 *
 * Добавляет в web-разметку кнопку, при нажатии которой открывается окно просмотра листа согласования.
 */
export declare class AgreementList extends BaseControl<AgreementListParams, AgreementListState> {
    /** @internal */
    constructor(props: AgreementListParams);
    /** @inheritDoc */
    protected createParams(): AgreementListParams;
    /** @internal */
    protected readonly myControlImpl: AgreementListImpl;
    /**
     * Проверяет, что лист согласования открыт для просмотра.
     * @return true - открыт, false - закрыт.
     */
    readonly isReportShown: boolean;
    /**
     * Закрывает лист согласования.
     */
    hideReport(): void;
    /**
     * Открывает лист согласования.
     */
    showReport(): void;
    /** @internal */
    private bindingEditOperation;
    /** @internal */
    protected getAgreementList(): JQueryDeferred<GenModels.AgreementListModel>;
    /** @internal */
    protected createImpl(): AgreementListImpl;
}
