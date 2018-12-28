import { AgreementManagementImpl, AgreementManagementState } from "@docsvision/webclient/Approval/AgreementManagementImpl";
import { IAgreementEventArgs } from "@docsvision/webclient/Approval/IAgreementEventArgs";
import { IApproverDeletionEventArgs } from "@docsvision/webclient/Approval/IApproverDeletionEventArgs";
import { IApproverEventArgs } from "@docsvision/webclient/Approval/IApproverEventArgs";
import { IApprovingPathEventArgs } from "@docsvision/webclient/Approval/IApprovingPathEventArgs";
import { $LayoutAgreementController, $LayoutStaffController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $EditOperationStore, $LayoutInfo } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { $LocalStorage } from "@docsvision/webclient/System/$LocalStorage";
/**
 * Содержит публичные свойства элемента управления [Управление согласованием]{@link AgreementManagement}.
 */
export declare class AgreementManagementParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /**
     * Флаг, определяющий, что запуск согласования разрешен:
     * true - разрешен (элемент управления связан с данными и разрешена настроенная операция старта согласования),
     * false - не разрешен.
     */
    startAllowed?: boolean;
    /**
     * Флаг, определяющий, что управление согласованием разрешено: true - разрешено
     * (элемент управления связан с данными и разрешена настроенная операция управления согласованием), false - не разрешено.
     */
    manageAllowed?: boolean;
    /**
     * Флаг, определяющий, что запуск согласования разрешен:
     * true - разрешен (карточка является новой и {@link startAllowed} в true),
     * false - не разрешен.
     */
    canStart?: boolean;
    /**
     * Флаг, определяющий, что управление согласованием разрешено:
     * true - разрешен (карточка является новой и {@link manageAllowed} в true),
     * false - не разрешен.
     */
    canManage?: boolean;
    /** Флаг доступности прекращения этапа согласования */
    abortStageAllowed: boolean;
    /** Флаг запроса диалога подтверждения запуска согласования */
    confirmationRequestOnStart?: boolean;
    /** Массив моделей кнопок управления согласованием */
    buttonNames: GenModels.AgreementManagementButtonModel[];
    /** Режим отображения согласующего */
    approverViewType?: GenModels.ApproverViewType;
    /** Режим отображения элемента управления */
    agreementMode?: GenModels.AgreementMode;
    /** При открытой панели старта согласования, возвращает информацию о доступных шаблонах согласования.  */
    templates?: GenModels.AgreementTemplateModel[];
    /** Возвращает выбранный в данный момент шаблон согласования из списка {@link templates} в панели старта согласования. */
    selectedTemplate?: GenModels.AgreementTemplateModel;
    /** Информация об этапах согласования, отображаемых в данный момент в панели упрвления или старта согласования. */
    stages?: GenModels.StageModel[];
    /** Открыта ли в данный момент панель старта или управления согласованием. */
    sidebarIsOpen?: boolean;
    /** В каком режиме находится контрол - в режиме создания согласования (false) или в режиме управления существующим согласованием (true). */
    agreementExists?: boolean;
    /** Событие возникает при изменении маршрута согласования. */
    approvingPathChanging?: CancelableApiEvent<IApprovingPathEventArgs>;
    /** Событие возникает после изменения маршрута согласования. */
    approvingPathChanged?: BasicApiEvent<IApprovingPathEventArgs>;
    /** Событие возникает при открытии панели отправки согласования. */
    approvingPanelOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после открытия панели отправки согласования. */
    approvingPanelOpened?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при нажатии кнопки Start the approval на панели отправки согласования. */
    approvingStarting?: CancelableApiEvent<IAgreementEventArgs>;
    /** Событие возникает при вызове команды остановки согласования. */
    approvingPausing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при вызове команды отмены согласования. */
    approvingCancelling?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при вызове команды завершения согласования. */
    approvingCompleting?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при вызове команды продолжения остановленного согласования. */
    approvingResuming?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при добавлении нового согласующего. */
    approverAdding?: CancelableApiEvent<IApproverEventArgs>;
    /** Событие возникает после добавления нового согласующего. */
    approverAdded?: BasicApiEvent<IApproverEventArgs>;
    /** Событие возникает при удалении согласующего. */
    approverDeleting?: CancelableApiEvent<IApproverDeletionEventArgs>;
    /** Событие возникает после удаления согласующего. */
    approverDeleted?: BasicApiEvent<IApproverDeletionEventArgs>;
    /** Событие возникает при нажатии кнопки Отмена на панели отправки согласования. */
    approvingStartCancelling?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после нажатия кнопки Отмена на панели отправки согласования. */
    approvingStartCancelled?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при прекращении этапа согласования */
    approvingStageAborting?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после прекращении этапа согласования */
    approvingStageAborted?: BasicApiEvent<IEventArgs>;
    /** Сервисы. */
    services?: $LayoutAgreementController & $LayoutStaffController & $EditOperationStore & $LayoutInfo & $Layout & $LocalStorage;
}
/**
 * Класс элемента управления Управление согласованием.
 *
 * Добавляет в web-разметку набор кнопок для управления согласования.
 */
export declare class AgreementManagement extends BaseControl<AgreementManagementParams, AgreementManagementState> {
    /** @internal */
    constructor(props: AgreementManagementParams);
    /** @inheritDoc */
    protected createParams(): AgreementManagementParams;
    /** Возвращает экземпляр AgreementManagementImpl. */
    private readonly myControlImpl;
    private readonly stages;
    private readonly agreementExists;
    private readonly sidbarShown;
    private agreementManagementData;
    private agreementManagementOperationBinding;
    private agreementStartOperationBinding;
    private abortStageOperationBinding;
    private agreementManagementButtonNames;
    private availableButtons;
    readonly canStart: boolean;
    readonly canManage: boolean;
    /**
     * Загружает данные карточки с сервера и обновляет отображаемое содержимое.
     */
    refresh(): void;
    /**
     * Возвращает массив команд управления согласованием, которые применимы для текущего согласования.
     * @return Команды управления.
     */
    getAvailableOperations(): GenModels.ApprovalOperationKind[];
    /**
     * Запускает остановленное согласование.
     */
    resume(): void;
    /**
     * Останавливает запущенное согласование.
     */
    pause(): void;
    /**
     * Завершает запущенное согласование.
     */
    complete(): void;
    /**
     * Отменяет запущенное согласование.
     */
    cancel(): void;
    /**
     * Запускает согласование или открывает панель запуска согласования (если необходим ввод дополнительных данных).
     */
    start(): JQueryDeferred<{}>;
    /** @deprecated Используйте {@link hideSidebar} */
    hideStartSidebar(): void;
    /** Закрывает панель запуска или управления согласованием без сохранения правок. */
    hideSidebar(): void;
    /** При открытой панели старта согласования имитирует клик по кнопке "Отправить". */
    send(): JQueryDeferred<void>;
    /** Открывает панель управления согласованием */
    edit(): JQueryDeferred<{}>;
    /** @internal */
    protected createImpl(): AgreementManagementImpl;
}
