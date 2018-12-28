import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { CardManagementImpl, CardManagementState } from "@docsvision/webclient/Platform/CardManagementImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { $Router } from "@docsvision/webclient/System/$Router";
/**
 * Содержит публичные свойства элемента управления [Управление карточкой]{@link CardManagement}.
 */
export declare class CardManagementParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /**
     * Флаг, указывающий на возможность изменения карточки:
     * true - изменение разрешено (разрешена настроенная операция редактирования),
     * false - изменение не разрешено.
     */
    canEdit?: boolean;
    /**
     * Флаг, указывающий на возможность удаления карточки:
     * true - удаление разрешено (разрешена операция удаления карточки),
     * false - удаление не разрешено.
     */
    canDelete?: boolean;
    services?: $LayoutCardController & $EditOperationStore & $Layout & $CardId & $Router;
}
/**
 * Класс элемента управления Управление карточкой.
 *
 * Добавляет в web-разметку автоматически скрываемые кнопки удаления, изменения и обновления карточки.
 */
export declare class CardManagement extends BaseControl<CardManagementParams, CardManagementState> {
    constructor(props: CardManagementParams);
    protected createParams(): CardManagementParams;
    /**
     * Загружает данные карточки с сервере и обновляет отображаемое содержимое.
     */
    refresh(): void;
    /**
     * Удаляет текущую карточку.
     */
    delete(): Promise<void>;
    /**
     * Переоткрывает текущую карточку в режиме редактирования.
     */
    edit(): void;
    private bindingEditOperation;
    /** @internal */
    createImpl(): CardManagementImpl;
}
