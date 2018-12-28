import { $LayoutController, $LayoutFolderController } from "@docsvision/webclient/Generated/DocsVision.WebClient.Controllers";
import { BaseMainMenuItem, BaseMainMenuItemParams } from "@docsvision/webclient/Platform/BaseMainMenuItem";
import { UserFoldersMainMenuItemImpl, UserFoldersMainMenuItemState } from "@docsvision/webclient/Platform/UserFoldersMainMenuItemImpl";
import { BaseControl, BaseControlParams, BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { $Layout } from "@docsvision/webclient/System/$Layout";
import { IProxyControl } from "@docsvision/webclient/System/IProxyControl";
/**
 * Содержит публичные свойства элемента управления [UserFoldersMainMenuItem]{@UserFolders UserFoldersMainMenuItem}.
 */
export declare class UserFoldersMainMenuItemParams extends BaseMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Показывать ли сам элемент меню или только его содержимое */
    showRoot?: boolean;
    /** Количество подуровней элемента, которые будут автоматически предзагружены */
    foldersPreloadLevel?: number;
    /** Компактное представление для папок */
    compactFolders?: boolean;
    /** Показывать ли иконки */
    showIcons?: boolean;
    /** Список папок */
    folders?: string[];
    /** Раскрыт ли элемент меню */
    isExpanded?: boolean;
    services?: $LayoutController & $LayoutFolderController & $Layout;
}
/**
 * Контрол для отображения папок в списке элементов главной панели.
 */
export declare class UserFoldersMainMenuItem extends BaseMainMenuItem<UserFoldersMainMenuItemParams, UserFoldersMainMenuItemState> implements IProxyControl {
    constructor(props: any);
    /** @internal */
    protected createParams(): UserFoldersMainMenuItemParams;
    /** @internal */
    protected showRoot: string | boolean;
    /** @internal */
    protected expanded: string | boolean;
    /**
     * Является ли элемент меню проксирующим, то есть видны только подэлементы, а сам данный элемент меню не виден
     */
    readonly isProxyControl: boolean;
    /**
     * Отрисовка содержимого проксирующего элемента меню
     */
    renderProxyChildren(): React.ReactNode[];
    /** @internal */
    protected registerChild(child: BaseControl<BaseControlParams, BaseControlState>): void;
    /** @internal */
    protected level: number | string;
    /**
     * Обновление списка пользовательских папок с сервера.
     */
    reload(): JQueryDeferred<{}>;
    /**
     * Отсоединить папки
     * @param folderIds Список идентификаторов отсоединяемых папок
     */
    detachFolders(folderIds: string[]): Promise<void>;
    /** @internal */
    protected createImpl(): UserFoldersMainMenuItemImpl;
}
