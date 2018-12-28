import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseNavigationMainMenuItemImpl, BaseNavigationMainMenuItemState } from "@docsvision/webclient/Platform/BaseNavigationMainMenuItemImpl";
import { FolderMainMenuItemParams } from "@docsvision/webclient/Platform/FolderMainMenuItem";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface FolderMainMenuItemState extends FolderMainMenuItemParams, BaseNavigationMainMenuItemState {
    /**
     * Загрузка вместе с подэлементами до нужного уровня
     * @param levelCount Количество уровней
     */
    loadWithChildren(levelCount?: number): JQueryDeferred<GenModels.FolderNode>;
    /**
     * Генерирование имени контрола
     * @param folderId Идентификатор папки
     */
    generateControlName(folderId: string): string;
    loader: RequestHelper;
    controlNames: {
        [folderId: string]: string;
    };
}
/** @internal */
export declare type FolderMainMenuItemImplState = FolderMainMenuItemState;
/** @internal */
export declare class FolderMainMenuItemImpl extends BaseNavigationMainMenuItemImpl<FolderMainMenuItemParams, FolderMainMenuItemState> {
    constructor(props: FolderMainMenuItemParams, state: FolderMainMenuItemState);
    generateControlName(folderId: string): void;
    protected getAutoExpandLevelsCount: () => number;
    protected getChildrenAutoExpandLevelsCount: () => number;
    protected canAutoExpand: () => boolean;
    protected autoExpand(): Promise<void>;
    renderChildren(): React.ReactNode[];
    protected hasSubfolders(): boolean;
    loadChildren(levelsDown?: number): JQueryDeferred<GenModels.FolderNode>;
    onToggleClick(ev: React.MouseEvent<any>): void;
    toggleInternal(): Promise<void>;
    getNavigationHref(): string;
    onContentClick(): void;
    protected getIconClass(): string;
    protected getUnreadCount(): number;
    renderSelfContent(): JSX.Element;
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
