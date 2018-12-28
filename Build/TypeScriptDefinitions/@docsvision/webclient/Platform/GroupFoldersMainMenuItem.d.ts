import { GroupFoldersMainMenuItemState } from "@docsvision/webclient/Platform/GroupFoldersMainMenuItemImpl";
import { GroupMainMenuItem, GroupMainMenuItemParams } from '@docsvision/webclient/Platform/GroupMainMenuItem';
import { IProxyControl } from "@docsvision/webclient/System/IProxyControl";
/**
 * Содержит публичные свойства элемента управления [GroupFoldersMainMenuItem]{@GroupFolders GroupFoldersMainMenuItem}.
 */
export declare class GroupFoldersMainMenuItemParams extends GroupMainMenuItemParams {
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    /** Количество подуровней элемента, которые будут автоматически предзагружены */
    foldersPreloadLevel?: number;
    /** Компактное представление для папок */
    compactFolders?: boolean;
    /** Показывать ли иконки */
    showIcons?: boolean;
}
/**
 * Контрол для отображения папок группы/роли в списке элементов главной панели.
 */
export declare class GroupFoldersMainMenuItem extends GroupMainMenuItem<GroupFoldersMainMenuItemParams, GroupFoldersMainMenuItemState> implements IProxyControl {
    /** @internal */
    protected createParams(): GroupFoldersMainMenuItemParams;
    /** @internal */
    protected createImpl(): any;
}
