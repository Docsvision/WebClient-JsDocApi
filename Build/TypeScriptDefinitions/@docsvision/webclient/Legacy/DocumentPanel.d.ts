/** @internal */
export declare class DocumentPanel {
    private static FileSettingsCssClass;
    private static FileLinkCssClass;
    private static FileDocumentLinkCssClass;
    private static DocumentUnLinkCssClass;
    private static FileIconCssClass;
    private static AdditionalFileCssClass;
    private static FileOperationCssClass;
    private static VersionCommentCssClass;
    private static Placeholder;
    private documentPanel;
    private cardId;
    private downloadContentUrl;
    private currentSettings;
    private traceProvider;
    constructor(documentPanelId: string, downloadContentUrl: string);
    private Initialize;
    private convertWebDavLinks;
    private initFilesHandlers;
    private readonly GetDocumentItems;
    private FileOperationWithoutDialog;
    private AddFileCommentEventHandler;
    private SettingEventHandler;
    private DetachDocumentFromTask;
    private ShowFileSettingsEventClick;
    private ShowFileSettings;
    private WrapperEventHandler;
    private SuppressEvents;
    private PreviewFileEventHandler;
    private FileDocumentEventHandler;
}
