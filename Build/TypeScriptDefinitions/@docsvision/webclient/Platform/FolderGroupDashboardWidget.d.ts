import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { FolderGroupDashboardWidgetImpl, FolderGroupDashboardWidgetState } from "@docsvision/webclient/Platform/FolderGroupDashboardWidgetImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
/**
 * @internal
 * Содержит публичные свойства элемента управления [FolderGroupDashboardWidget]{@link FolderGroupDashboardWidget}.
 */
export declare class FolderGroupDashboardWidgetParams extends PanelParams {
    /** Текст метки. */
    text: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    headerFolderId?: string;
    headerFolderInfo?: GenModels.FolderNode;
    headerFolderUnreadCount?: number;
    color?: string;
    unreadCount?: number;
    forceVirtualFolderSearch?: boolean;
}
/** @internal */
export declare class FolderGroupDashboardWidget extends Panel<FolderGroupDashboardWidgetParams, FolderGroupDashboardWidgetState> {
    constructor(props: FolderGroupDashboardWidgetParams);
    createParams(): FolderGroupDashboardWidgetParams;
    init(): void;
    deinit(): void;
    protected headerFolderInfo: GenModels.FolderNode;
    private textResourceKey;
    protected forceVirtualFolderSearch: string | boolean;
    onUnreadCountChanged: () => void;
    addUnreadCountRequest(): void;
    protected createImpl(): FolderGroupDashboardWidgetImpl<Readonly<{
        children?: import("react").ReactNode;
    }> & Readonly<FolderGroupDashboardWidgetParams>, FolderGroupDashboardWidgetState>;
}
