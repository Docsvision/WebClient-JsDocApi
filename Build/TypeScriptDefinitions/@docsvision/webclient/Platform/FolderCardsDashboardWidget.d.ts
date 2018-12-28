import { FolderCardsDashboardWidgetImpl, FolderCardsDashboardWidgetState } from "@docsvision/webclient/Platform/FolderCardsDashboardWidgetImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
import React from 'react';
/**
 * Содержит публичные свойства элемента управления [FolderCardsDashboardWidget]{@link FolderCardsDashboardWidget}.
 */
export declare class FolderCardsDashboardWidgetParams extends PanelParams {
    /** Текст заголовка. */
    header: string;
    /** Идентификатор папки, карточки которой будут показаны. */
    folderId: string;
    /** Идентификатор представления. Если не задан, то используется представление по умолчанию. */
    viewId?: string;
    /** Поисковый запрос. По умолчанию используется поисковый запрос, ассоциированный с папкой (если это поисковая папка). */
    searchId?: string;
    /** Столбец, по которому необходимо произвести сортировку. По умолчанию используется сортировка папки. */
    sortColumnName?: string;
    /** Направление сортировки - если true, то по убыванию, иначе по возрастанию. */
    sortDescending?: string;
    /** Колличество карточек которые будут отображены. По умолчанию 5. */
    cardsCount?: number;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
}
/**
 * @review
 */
export declare class FolderCardsDashboardWidget extends Panel<FolderCardsDashboardWidgetParams, FolderCardsDashboardWidgetState> {
    createParams(): FolderCardsDashboardWidgetParams;
    protected createImpl(): FolderCardsDashboardWidgetImpl<Readonly<{
        children?: React.ReactNode;
    }> & Readonly<FolderCardsDashboardWidgetParams>, FolderCardsDashboardWidgetState>;
}
