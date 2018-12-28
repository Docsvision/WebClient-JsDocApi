import { $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseNavigationMainMenuItem, BaseNavigationMainMenuItemParams } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItem";
import { FolderMainMenuItemImpl, FolderMainMenuItemState } from "@docsvision/webclient/Platform/FolderMainMenuItemImpl";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $ControlStore } from "@docsvision/webclient/System/LayoutServices";
import { IProxyControl } from "@docsvision/webclient/System/IProxyControl";
/**
 * Содержит публичные свойства элемента управления [FolderMainMenuItem]{@link FolderMainMenuItem}.
 */
export declare class FolderMainMenuItemParams extends BaseNavigationMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Информация о папке */
    folderInfo: GenModels.FolderNode;
    /** Цвет страницы */
    color?: string;
    /** Идентификатор папки */
    folderId?: string;
    /** Показывать ли подпапки */
    showSubfolders?: boolean;
    /** Показывать ли сам элемент меню или только его содержимое */
    showRoot?: boolean;
    /** Количество подуровней элемента, которые будут автоматически предзагружены */
    subfoldersPreloadLevel?: number;
    /** Компактное представление для подэлементов */
    compactChildren?: boolean;
    /** Показывать ли иконку */
    showIcon?: boolean;
    /** Показывать ли иконки подэлементов меню */
    showChildrenIcons?: boolean;
    /** */
    forceToggleIdent?: boolean;
    /** Раскрыт ли элемент меню */
    isExpanded?: boolean;
    /** Количество непросмотренных карточек в папке */
    unreadCount?: number;
    /** Принудительный поиск в виртуальной папке */
    forceVirtualFolderSearch?: boolean;
    services?: $LayoutFolderController & $ControlStore;
}
/**
 * Контрол для отображения ссылки на папку в списке элементов главной панели.
 */
export declare class FolderMainMenuItem extends BaseNavigationMainMenuItem<FolderMainMenuItemParams, FolderMainMenuItemState> implements IProxyControl {
    constructor(props: any);
    /**
     * Является ли контрол контролом для папки главного меню, таким образом их можно отличать от других.
     */
    readonly isFolderMainMenuItem: boolean;
    /** @internal */
    init(): void;
    /** @internal */
    deinit(): void;
    /** @internal */
    protected createParams(): FolderMainMenuItemParams;
    /** @internal */
    protected showSubfolders: string | boolean;
    /** @internal */
    protected showRoot: string | boolean;
    /** @internal */
    protected subfoldersPreloadLevel: string | number;
    /** @internal */
    protected expanded: string | boolean;
    /** @internal */
    protected compactChildren: string | boolean;
    /** @internal */
    protected showIcon: string | boolean;
    /** @internal */
    protected showChildrenIcons: string | boolean;
    /** @internal */
    protected forceToggleIdent: string | boolean;
    /** @internal */
    protected forceVirtualFolderSearch: string | boolean;
    /** @internal */
    protected folderInfo: GenModels.FolderNode;
    /**
     * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
     */
    readonly isProxyControl: boolean;
    /**
     * Отрисовка содержимого проксирующего элемента меню
     */
    renderProxyChildren(): React.ReactNode[];
    /**
     * Загрузка подпапок на указанное количество уровней
     * @param levelsCount Количество уровней для загрузки
     */
    loadSubfoldersDownTo(levelsCount: number): Promise<void>;
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected level: number | string;
    /** @internal */
    protected isConfiguredToHide: boolean;
    /** @internal */
    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
    /**
     * Подписывание на событие изменение счётчика содержимого для данной папки
     */
    subscribeToUnreadCount(): void;
    /**
     * Отписывание от события изменения счётчика содержимого для данной папки
     */
    unsubscribeFromUnreadCount(): void;
    /**
     * При изменении счётчика содержимого данной папки
     */
    onUnreadCountChanged(): void;
    /**
     * Запрос на пересчёт счётчика содержимого для данной папки
     */
    addUnreadCountRequest(): void;
    private generateControlName;
    /** @internal */
    protected createImpl(): FolderMainMenuItemImpl;
}
