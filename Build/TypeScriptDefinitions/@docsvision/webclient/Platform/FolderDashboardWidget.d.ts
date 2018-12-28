import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { FolderDashboardWidgetImpl, FolderDashboardWidgetState } from "@docsvision/webclient/Platform/FolderDashboardWidgetImpl";
import { Panel, PanelParams } from "@docsvision/webclient/Platform/Panel";
/**
 * @internal
 * Содержит публичные свойства элемента управления [FolderDashboardWidget]{@link FolderDashboardWidget}.
 */
export declare class FolderDashboardWidgetParams extends PanelParams {
    /** Текст метки. */
    text: string;
    /** Стандартный CSS класс со стилями элемента управления */
    standardCssClass?: string;
    folderId?: string;
    folderInfo?: GenModels.FolderNode;
    folderUnreadCount?: number;
    color?: string;
    unreadCount?: number;
    forceVirtualFolderSearch?: boolean;
}
/** @internal */
export declare class FolderDashboardWidget extends Panel<FolderDashboardWidgetParams, FolderDashboardWidgetState> {
    constructor(props: FolderDashboardWidgetParams);
    createParams(): FolderDashboardWidgetParams;
    init(): void;
    deinit(): void;
    protected headerFolderInfo: GenModels.FolderNode;
    private textResourceKey;
    protected forceVirtualFolderSearch: string | boolean;
    onUnreadCountChanged: () => void;
    addUnreadCountRequest(): void;
    protected createImpl(): FolderDashboardWidgetImpl<Readonly<{
        children?: import("react").ReactNode;
    }> & Readonly<FolderDashboardWidgetParams>, FolderDashboardWidgetState>;
}
