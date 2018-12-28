import { $LayoutFileController, $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { CardLinkImpl, CardLinkState } from "@docsvision/webclient/Platform/CardLinkImpl";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { IDataChangedEventArgsEx } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { $CardId, $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { EditMode } from "@docsvision/webclient/System/EditMode";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import { Optional } from "@docsvision/webclient/System/ServiceContainer";
/**
 * Публичные свойства для контрола {@link CardLink}.
 */
export declare class CardLinkParams extends BaseControlParams {
    standardCssClass?: string;
    /** Информация о текущей выбранной карточке. */
    value?: GenModels.CardLinkDataModel;
    /** Доступно редактирование значения или нет (согласно операции редактирования). */
    canEdit?: boolean;
    /** Текст метки */
    labelText?: string;
    /** Флаг, определяющий, что метка должна отображаться, когда значение элемента управления не задано: true - отображать, false - не отображать. */
    showEmptyLabel?: boolean;
    /** Определяет какой текст будет отображаться для выбора ссылки, когда ссылка не указана.  */
    emptyText?: string;
    /** Всплывающая подсказка */
    tip?: string;
    /** Возвращает режим редактирования. */
    editMode?: EditMode;
    /** Типы карточек, которые пользователь может выбрать при добавлении ссылки. */
    cardTypes?: GenModels.CardNodeInfo[];
    /** Идентификатор карточки. Параметр необходим только для случая, когда контрол находится вне разметки. */
    cardId?: string;
    /** Отрыто ли меню карточки. */
    menuExpanded?: boolean;
    /** обязательно ли для заполнения */
    required?: boolean;
    /** Событие, возникающее перед очисткой значения. */
    linkDeleting?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после очистки значения. */
    linkDeleted?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед открытием окна выбора карточки. */
    windowOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия окна выбора карточки. */
    windowOpened?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед закрытием окна выбора карточки. */
    windowClosing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после закрытия окна выбора карточки. */
    windowClosed?: BasicApiEvent<IEventArgs>;
    /** Событие возникающее при изменении значения элемента управления. */
    dataChanged?: BasicApiEvent<IDataChangedEventArgsEx<GenModels.CardLinkDataModel>>;
    /** Событие, возникающее перед открытием предпросмотра файла связанной карточки. */
    linkFilePreviewing?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия предпросмотра файла связанной карточки. */
    linkFilePreviewed?: BasicApiEvent<IEventArgs>;
    /** Событие, возникающее перед открытием связанной карточки. */
    linkCardOpening?: CancelableApiEvent<IEventArgs>;
    services?: $FileController & $LayoutFileController & $LayoutLinksController & Optional<$CardId> & $EditOperationStore;
}
/**
 * Представляет элемент управления для редактирования связанной карточки.
 */
export declare class CardLink extends BaseControl<CardLinkParams, CardLinkState> {
    constructor(props: CardLinkParams);
    componentDidMount(): void;
    protected createParams(): CardLinkParams;
    protected createImpl(): CardLinkImpl;
    private binding;
    private cardTypes;
    value: GenModels.CardLinkDataModel;
    protected getBindings(): IBindingResult<any>[];
    private onDataChanged;
    private readonly cardLinkImpl;
    validate(params: any): IValidationResult[];
    /**
     * Открывает привязанную карточку
     */
    openLinkedCard: () => void;
    /**
     * Открывает предпросмотр файла привязанной карточки
     */
    openFilePreview: () => void;
    /**
     * Открывает модальное окно для выбора карточки, которую мы хотим привязать
     */
    openSelectCardDialog: () => void;
    /**
     * Удаляет привязанную карточку
     */
    deleteLinkedCard: () => void;
}
