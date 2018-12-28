import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $StandardControllers } from '@docsvision/webclient/Legacy/StandardControllers';
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import { $StandardServices } from '@docsvision/webclient/StandardServices';
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { ILayout } from "@docsvision/webclient/System/$Layout";
import { ILayoutParams } from "@docsvision/webclient/System/ILayoutParams";
import { LayoutImpl, LayoutState } from "@docsvision/webclient/System/LayoutImpl";
import { ControlWrapperMap } from "@docsvision/webclient/System/ControlWrapperMap";
import { IEditOperationStore } from "@docsvision/webclient/System/IEditOperationStore";
import { ILayoutContainer } from "@docsvision/webclient/System/ILayoutContainer";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { ICardStateChangingEventArgs } from "@docsvision/webclient/System/ICardStateChangingEventArgs";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { ServiceContainer } from '@docsvision/webclient/System/ServiceContainer';
/**
 * Публичные свойства для контрола {@link Layout}.
 */
export declare class LayoutParams extends PanelParams implements ILayoutParams {
    /** Стандартный CSS класс со стилями элемента управления. */
    standardCssClass?: string;
    /** Название разметки. */
    layoutName: string;
    /** Владелец разметки. */
    owner: Layout;
    /** Дочерние разметки. */
    childLayouts: Layout[];
    /** Событие возникает при открытии карточки. */
    cardOpening?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает после открытия карточки. */
    cardOpened?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при сохранении карточки. */
    cardSaving?: CancelableApiEvent<SaveControlDataModelEventArgs>;
    /** Событие возникает после сохранения карточки. */
    cardSaved?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает, если при сохранении карточки возникли ошибки. */
    cardSaveFailed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает перед изменением состояния карточки. */
    cardStateChanging?: CancelableApiEvent<ICardStateChangingEventArgs>;
    /** Событие возникает перед изменением разметки карточки. */
    cardLayoutSwitching?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает перед изменением разметки карточки. */
    layoutWillUnmount?: BasicApiEvent<IEventArgs>;
    /** @internal */
    mapLayout?: (layoutResolver: () => Layout) => void;
    /** @internal */
    initializationDeferred: JQueryDeferred<Layout>;
    services?: ServiceContainer & $StandardServices & $StandardControllers;
}
export declare type SaveControlDataModelEventArgs = GenModels.SaveControlDataModel & {
    deferred: JQueryDeferred<any>;
};
/**
 * Класс разметки карточки.
 *
 * Предоставляет доступ к элементам управления, расположенным на разметке, а также методы управления и события карточки.
 */
export declare class Layout extends Panel<LayoutParams, LayoutState> implements ILayout {
    constructor(props: LayoutParams);
    /** @internal */
    protected createParams(): LayoutParams;
    /** @internal */
    componentDidMount(): void;
    /** Возвращает элементы управления разметки. */
    readonly controls: ControlWrapperMap;
    private cardInfoHandler;
    /** Возвращает модель данных карточки. */
    readonly cardInfo: GenModels.CardInfoModel;
    private layoutInfoHandler;
    /** Возвращает модель данных разметки. */
    readonly layoutInfo: GenModels.LayoutInfoModel;
    private layoutContainerHandler;
    /** Возвращает контейнер разметки. */
    readonly layoutContainer: ILayoutContainer;
    private editOperationsrHandler;
    /** Предоставляет доступ к хранилищу операций редактирования. */
    readonly editOperations: IEditOperationStore;
    /** Возвращает текущую разметку. */
    readonly layout: Layout;
    /** Возвращает отображаемое название типа карточки. */
    readonly cardTypeName: string;
    /** @internal */
    protected readonly control: LayoutImpl;
    /** Регистрирует элемент управления в {@link controls}. */
    protected registerControl(control: BaseControl<BaseControlParams, BaseControlState>): void;
    /** Отменяет регистрирацию элемента управления в {@link controls}. */
    protected unregisterControl(control: BaseControl<BaseControlParams, BaseControlState>): void;
    /**
     * Сохраняет изменения всей разметки (карточки) или конкретного элемента управления.
     * @param control Элемент управления который требуется сохранить. Если не указан, будет сохранена вся разметка.
     * @param doNotMarkAsSaved Флаг, указывающий, что карточка должна сохранить признак "не сохранена": true - карточка остается с признаком "не сохранена",
     * false - карточка сохраняется в обычном режиме.
     */
    saveCard(control?: BaseControl<BaseControlParams, BaseControlState>, doNotMarkAsSaved?: boolean): JQueryDeferred<any>;
    /**
     * Изменяет состояние карточки, по полученной операции редактирования.
     * @param operationId Идентификатор операции редактирования.
     */
    changeState(operationId: string): JQueryDeferred<any>;
    /**
     * Проверяет, что карточка заблокирована и есть изменения.
     * @return done срабатывает, когда карточка заблокирована и есть изменения; иначе - срабатывает fail.
     */
    checkLockAndModified(): JQueryDeferred<void>;
    /** @internal */
    protected handleCardOpening(): void;
    /** @internal */
    protected handleCardOpened(): void;
    /** @internal */
    protected handleCardSaving(saveControlData: SaveControlDataModelEventArgs): JQueryDeferred<any>;
    /** @internal */
    protected handleCardSaved(callback: () => void): void;
    /** @internal */
    protected handleCardSaveFailed(): void;
    /** @internal */
    protected handleCardStateChanging(operationId: string, acceptedCallback?: (data?: ICardStateChangingEventArgs) => void, cancelledCallback?: (data?: ICardStateChangingEventArgs) => void): void;
    /** @internal */
    protected handleCardLayoutSwitching(callback: () => void): void;
    /**
     * Возвращает флаг, указывающий, что карточка была сохранена после загрузки разметки: true - была сохранена, false - не была сохранена.
     */
    readonly saved: boolean;
    /** @internal */
    componentWillMount(): void;
    /** @internal */
    componentWillUnmount(): void;
    /** @internal */
    deinit(): void;
    /** @internal Освобождает дерево компонентов. */
    destroy(): JQueryDeferred<any>;
    /** @internal */
    protected createImpl(): LayoutImpl;
}
