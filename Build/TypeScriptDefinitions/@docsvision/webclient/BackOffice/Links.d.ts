import { LinkItem } from "@docsvision/webclient/BackOffice/LinkItem";
import { ViewDisplayMode } from '@docsvision/webclient/BackOffice/ViewDisplayMode';
import { ILinkEventArgs } from "@docsvision/webclient/BackOffice/ILinkEventArgs";
import { LinksImpl, LinksState } from "@docsvision/webclient/BackOffice/LinksImpl";
import { $LayoutFileController, $LayoutLinksController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { $FileController } from "@docsvision/webclient/Legacy/FileController";
import { BaseControl, BaseControlParams } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { $EditOperationStore } from "@docsvision/webclient/System/LayoutServices";
import { BasicApiEvent, CancelableApiEvent } from "@docsvision/webclient/System/ApiEvent";
import { IEventArgs } from "@docsvision/webclient/System/IEventArgs";
/**
 * Публичные свойства для контрола {@link Links}.
 */
export declare class LinksParams extends BaseControlParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Список ссылок */
    links?: LinkItem[];
    /** Режим отображения для просмотра. */
    viewDisplayMode?: ViewDisplayMode;
    /** Доступно ли создание ссылок */
    createLinkAvailable?: boolean;
    /** Доступно ли добавление ссылок */
    addLinkAvailable?: boolean;
    /** Доступно ли добавление гиперссылок */
    addUrlAvailable?: boolean;
    /** Доступно ли добавление файлов */
    addFileAvailable?: boolean;
    /** Доступно ли изменение файлов */
    editFileAvailable?: boolean;
    /** Доступно ли удаление ссылок */
    deleteLinkAvailable?: boolean;
    /** Доступно ли изменение ссылок */
    editLinkAvailable?: boolean;
    /** Заголовок блока ссылок */
    header?: string;
    /** Отображать ли раскрытым */
    showOpened?: boolean;
    /** Хранить ли сильную ссылку */
    saveHardLink?: boolean;
    /** Доступно ли создание ссылок */
    createLinkEnabled?: boolean;
    /** Доступно ли добавление существующих ссылок */
    addLinkEnabled?: boolean;
    /** Доступно ли добавление гиперссылок */
    addUrlEnabled?: boolean;
    /** Доступно ли добавление файлов */
    addFileEnabled?: boolean;
    /** Раскрыт ли контрол */
    isExpanded?: boolean;
    /** Раскрыта ли командная панель */
    commandBarExpanded?: boolean;
    /** Типы ссылок при добавлении ссылки */
    addLinkLinkTypes?: GenModels.LinkTypeModel[];
    /** Типы ссылок при добавлении гиперссылки */
    addUrlLinkTypes?: GenModels.LinkTypeModel[];
    /** Типы ссылок при добавлении файла */
    addFileLinkTypes?: GenModels.LinkTypeModel[];
    /** Типы ссылок для которых нужно показывать файлы. */
    showFilesForLinksTypes?: GenModels.LinkTypeModel[];
    /** Виды карточек при создании ссылки */
    createLinkKinds?: GenModels.AllowedCardKind[];
    /** Типы ссылок при создании ссылки  */
    createLinkLinkTypes?: GenModels.LinkTypeModel[];
    /** Типы карточек при добавлении ссылки */
    addLinkTypes?: GenModels.CardNodeInfo[];
    /** Вид карточки при добавлении файла. */
    addFileKind?: GenModels.CardNodeInfo;
    /** Протокол по умолчанию */
    defaultProtocol: string;
    /** Событие возникает перед добавлением ссылки на существующую карточку. */
    linkAdding?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает перед удалением ссылки. */
    linkDeleting?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед удалением файла. */
    linkFileDeleting?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед скачиванием файла. */
    linkFileDownloading?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед добавлением ссылки на новую карточку. */
    linkCardCreating?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает перед открытием тултипа с информацией о карточке. */
    linkInfoOpening?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед закрытием тултипа с информацией о карточке. */
    linkInfoClosing?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед редактированием комментария к ссылке. */
    linkInfoEditing?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед открытием предпросмотра файла. */
    linkFilePreviewing?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие, возникающее перед открытием окна выбора файлов */
    linkFilesSelecting?: CancelableApiEvent<IEventArgs>;
    /** Событие, возникающее после открытия окна выбора файлов, но до загрузки файлов на сервер и установления значения контрола. */
    linkFilesSelected?: CancelableApiEvent<File[]>;
    /** Событие возникает перед открытием карточки. */
    linkCardOpening?: CancelableApiEvent<ILinkEventArgs>;
    /** Событие возникает перед сворачиванием контрола. */
    collapsing?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает перед разворачивании контрола. */
    expanding?: CancelableApiEvent<IEventArgs>;
    /** Событие возникает при добавлении ссылки на существующую карточку. */
    linkAdded?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при удалении ссылки. */
    linkDeleted?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при удалении файла. */
    linkFileDeleted?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при скачивании файла. */
    linkFileDownloaded?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при редактировании комментария к ссылке. */
    linkInfoEdited?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при открытии предпросмотра файла. */
    linkFilePreviewed?: BasicApiEvent<ILinkEventArgs>;
    /** Событие возникает при сворачивании контрола. */
    collapsed?: BasicApiEvent<IEventArgs>;
    /** Событие возникает при разворачивании контрола. */
    expanded?: BasicApiEvent<IEventArgs>;
    /** Сервисы */
    services: $FileController & $LayoutFileController & $LayoutLinksController & $EditOperationStore & $Layout;
}
/**
 * Представляет элемент управления Ссылки
 */
export declare class Links extends BaseControl<LinksParams, LinksState> {
    protected createParams(): LinksParams;
    private readonly linksImpl;
    init(): void;
    private addLinkEnabled;
    private addUrlEnabled;
    private addFileEnabled;
    private createLinkEnabled;
    private binding;
    private createLinkOperationBinding;
    private addLinkOperationBinding;
    private addUrlOperationBinding;
    private addFileOperationBinding;
    private removeLinkOperationBinding;
    private editLinkOperationBinding;
    private createLinkLinkTypes;
    private createLinkKinds;
    private addLinkLinkTypes;
    private addUrlLinkTypes;
    private addFileLinkTypes;
    private showFilesForLinksTypes;
    private addLinkTypes;
    private addFileKind;
    private showOpened;
    private model;
    private isExpanded;
    private commandBarExpanded;
    /** Открывает диалог для возможности добавления существующей карточки. */
    openAddExitingCardDialog(): void;
    /** Предоставляет доступ к хранилищу операций редактирования. */
    openAddNewCardDialog(): void;
    /** Открывает диалог для предпросмотра переданного файла. */
    openFilePreview(linkItem: LinkItem): void;
    /** Возвращает URL переданной ссылки. */
    getLinkUrl(linkItem: LinkItem): string;
    /** Удаляет переданную ссылку. */
    deleteLink(linkItem: LinkItem): void;
    /** @internal */
    protected createImpl(): LinksImpl;
}
