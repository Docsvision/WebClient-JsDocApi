import { AgreementHistoryImpl, AgreementHistoryState } from "@docsvision/webclient/Approval/AgreementHistoryImpl";
import { IApprovingReportOpenedEventArgs } from "@docsvision/webclient/Approval/IApprovingReportOpenedEventArgs";
import { IApprovingReportOpeningEventArgs } from "@docsvision/webclient/Approval/IApprovingReportOpeningEventArgs";
import { IApprovingReportRefreshedEventArgs } from "@docsvision/webclient/Approval/IApprovingReportRefreshedEventArgs";
import { IApprovingReportRefreshingEventArgs } from "@docsvision/webclient/Approval/IApprovingReportRefreshingEventArgs";
import { $LayoutAgreementController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Содержит публичные свойства элемента управления [Ход согласования]{@link AgreementHistory}.
 */
export declare class AgreementHistoryParams extends BaseControlParams {
    /** Текст, отображаемый на кнопке открытия хода согласования. */
    buttonText: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Возвращает состояние окна хода согласования: `true` - окно с ходом согласования открыто, `false` - закрыто. */
    isReportShown?: boolean;
    /**
     * Определяет, возможно ли показать ход согласования:
     * `true` - возможно (элемент управления связан с данными и разрешена настроенная операция редактирования),
     * `false` - невозможно.
     */
    showReportAllowed?: boolean;
    /** @review Режим контрола */
    agreementHistoryMode?: GenModels.AgreementHistoryMode;
    /** @review Всплывающая подсказка для кнопки */
    tip?: string;
    /** Событие возникает при открытии окна хода согласования. */
    approvingReportOpening?: CancelableApiEvent<IApprovingReportOpeningEventArgs>;
    /** Событие возникает при закрытии окна хода согласования. */
    approvingReportClosing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при обновлении данных хода согласования. */
    approvingReportRefreshing?: CancelableApiEvent<IApprovingReportRefreshingEventArgs>;
    /** Событие возникает после открытия окна хода согласования. */
    approvingReportOpened?: BasicApiEvent<IApprovingReportOpenedEventArgs>;
    /** Событие возникает после закрытия окна хода согласования. */
    approvingReportClosed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает после обновления данных хода согласования. */
    approvingReportRefreshed?: BasicApiEvent<IApprovingReportRefreshedEventArgs>;
    /** Сервисы. */
    services?: $FileController & $LayoutAgreementController & $EditOperationStore;
}
/**
 * Класс элемента управления Ход согласования.
 *
 * Добавляет в web-разметку кнопку, при нажатии которой открывается окно просмотра хода согласования.
 */
export declare class AgreementHistory extends BaseControl<AgreementHistoryParams, AgreementHistoryState> {
    protected createParams(): AgreementHistoryParams;
    private readonly myControlImpl;
    private agreementHistoryData;
    private agreementHistoryRows;
    private binding;
    /** Открывает окно просмотра хода согласования */
    showReport(): void;
    /** Закрывает окно просмотра хода согласования. */
    hideReport(): void;
    /**
     * Проверяет возможность показа окна хода согласования.
     *
     * @return true - возможно (если данные для отображения доступны и операция разрешена), false - невозможно.
     */
    canShowReport(): void;
    /** Загружает с сервера новые данные по ходу согласования и обновляет содержимое окна просмотра хода согласования. */
    refreshReport(): void;
    /** Показан ли отчёт. */
    readonly isReportShown: boolean;
    /** @internal */
    protected createImpl(): AgreementHistoryImpl;
}
