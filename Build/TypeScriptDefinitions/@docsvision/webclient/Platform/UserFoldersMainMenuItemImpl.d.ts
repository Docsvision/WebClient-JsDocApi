import { BaseMainMenuItemImpl, BaseMainMenuItemState } from "@docsvision/webclient/Platform/BaseMainMenuItemImpl";
import { UserFoldersMainMenuItemParams } from "@docsvision/webclient/Platform/UserFoldersMainMenuItem";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface UserFoldersMainMenuItemState extends UserFoldersMainMenuItemParams, BaseMainMenuItemState {
    /**
     * Отсоединить папки
     * @param folderIds Список идентификаторов отсоединяемых папок
     */
    detachFolders: (folderIds: string[]) => JQueryDeferred<{}>;
    detachHelper: RequestHelper;
}
/** @internal */
export declare type UserFoldersMainMenuItemImplState = UserFoldersMainMenuItemState;
/** @internal */
export declare class UserFoldersMainMenuItemImpl extends BaseMainMenuItemImpl<UserFoldersMainMenuItemParams, UserFoldersMainMenuItemState> {
    constructor(props: UserFoldersMainMenuItemParams, state: UserFoldersMainMenuItemState);
    protected onClick(event: React.MouseEvent<any>): void;
    onDetachClick(index: number): void;
    protected getChildrenAutoExpandLevelsCount: () => number;
    protected canAutoExpand: () => boolean;
    renderProxyChildren(): React.ReactNode[];
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
