import { $LayoutCardController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { $ApplicationTimestamp, $Locale, $SiteUrl } from "@docsvision/webclient/StandardServices";
import { Layout } from "@docsvision/webclient/System/Layout";
import { ILayoutContainerMap } from "@docsvision/webclient/System/ILayoutContainerMap";
import { LayoutContainer } from "@docsvision/webclient/System/LayoutContainer";
import { CancelableEvent } from "@docsvision/webclient/System/CancelableEvent";
import { ICancelableEvent } from "@docsvision/webclient/System/ICancelableEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
import { SimpleEvent } from "@docsvision/webclient/System/SimpleEvent";
import { ILayoutManager } from "@docsvision/webclient/System/$LayoutManager";
import { ServiceContainer } from "@docsvision/webclient/System/ServiceContainer";
import { ShowLayoutParams } from "@docsvision/webclient/System/ShowLayoutParams";
/** @internal */
export declare type $MainContentElementId = {
    mainContentElementId: string;
};
/** Основной класс для отображения разметок и получения к ним доступа. */
export declare class LayoutManager implements ILayoutManager {
    protected services: $SiteUrl & $ApplicationTimestamp & $LayoutCardController & $Locale;
    protected layoutContainer: LayoutContainer;
    protected rootElementId: string;
    /** Note, on view layouts save can be performed multiple times. On edit and create it should be performed once. */
    protected pageLeaveConfirmationDisabled: boolean;
    protected layoutContainers: ILayoutContainerMap;
    protected layoutCardLayoutPosition: string;
    protected layoutUnloading: CancelableEvent<IEventArgs>;
    protected layoutUnloaded: SimpleEvent<IEventArgs>;
    protected prevConfirmationModal: ModalWindow;
    /** @internal */
    constructor(mainContentElementId: string, services?: $SiteUrl & $ApplicationTimestamp & $LayoutCardController & $Locale);
    /** @deprecated */
    readonly RootHtmlElement: HTMLElement;
    /** @deprecated */
    readonly IsCardSaved: boolean;
    /** Если в данный момент в Web-клиенте открыта карточка, то возвращает ее разметку. */
    readonly cardLayout: Layout;
    /** Событие, возникающее перед закрытием разметки.  */
    readonly LayoutUnloading: ICancelableEvent<IEventArgs>;
    /** Событие, возникающее после закрытия разметки.  */
    readonly LayoutUnloaded: SimpleEvent<IEventArgs>;
    /** Открывает разметку карточки на месте основного содержимого Web-клиента. */
    showCard(model: GenModels.LayoutCardViewModel, name?: string, owner?: string, services?: ServiceContainer): JQueryDeferred<Layout>;
    /**
     * @deprecated Use showLayout instead
     */
    show(root: HTMLElement | string, name: string, model: GenModels.LayoutViewModel): JQueryDeferred<Layout>;
    /** Открывает разметку. */
    showLayout({ root, name, model, owner, layoutPosition, services }: ShowLayoutParams): JQueryDeferred<Layout>;
    /** Возвращает разметку по имени экземпляра. */
    getLayout(name: string): Layout;
    /** Возвращает имя разметки, заполняющей место основного содержимого Web-клиента. */
    getCurrentLayoutName(): string | undefined;
    /** Возвращает описание разметки по имени экземпляра. */
    getLayoutModel(name: string): GenModels.LayoutViewModel | GenModels.LayoutCardViewModel;
    /** Отключает запрос подтверждения при закрытии страницы или переходе на другую страницу. */
    disablePageLeaveConfirmation(): void;
    /** Удаляет карточку. */
    deleteCard(cardId?: string): JQueryDeferred<any>;
    /** Равносильно нажатию кнопки "Назад" в браузере. */
    back(): void;
    /** @internal */
    protected createLayout(options: {
        layoutCardModel: GenModels.LayoutCardViewModel;
        owner?: string;
        name?: string;
        root?: string | HTMLElement;
        positionName?: string;
        services?: ServiceContainer;
    }): Promise<{
        layoutContainer: LayoutContainer;
        layout: Layout;
    }>;
    /** @internal */
    protected readonly siteUrl: string;
    /** Временная метка запуска сервера. */
    protected readonly applicationTimestamp: number;
    /** @internal */
    protected unmountCallback(name: string): void;
    /** @internal */
    protected loadExtensions(services: $SiteUrl & $ApplicationTimestamp & $LayoutCardController & $Locale): void;
    /** @internal */
    protected initialize(model: GenModels.LayoutCardViewModel): void;
    /** Закрывает разметку с указанным именем экземпляра. */
    destroy(name?: string): JQueryDeferred<any>;
    /** Обновляет внешний вид Web-клиента на основе стилей, заданных для указанного типа карточки. */
    protected updateFolderStyle(cardTypeId: string): void;
    /** @internal */
    protected reactJsUnmount(): void;
    /** @internal */
    onBeforeWindowUnload(e: any): string;
    /** @internal */
    onWindowUnload(ev: any): void;
}
export declare var layoutManager: LayoutManager;
export declare function setLayoutManager(manager: LayoutManager): void;
