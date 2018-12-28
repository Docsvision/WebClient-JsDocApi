import { FolderTree } from "@docsvision/webclient/Legacy/FolderTree";
/** @internal */
export declare class LinkControl {
    private linkControl;
    private static DeleteLinkCssClass;
    private static AddExistingCardCssClass;
    private static AddNewFileCssClass;
    private static AddNewCardCssClass;
    private static SelectCardDlgClass;
    private static SelectCardDlgWidth;
    private static FileLinkCssClass;
    private static Placeholder;
    private cardId;
    private isReportMode;
    private selectCardModal;
    private traceProvider;
    BeforeAddNewCardFunc: Function;
    BeforeAddExistedCardFunc: Function;
    static CommandExpandCssClass: string;
    constructor(rootElementId: string);
    IsReportMode: boolean;
    AddFileLink(documentIds: any): void;
    private Init;
    private initFilesHandlers;
    private InitAttachFileLink;
    private CommandAddExistingCard;
    private CommandAddNewCard;
    protected GetLayoutCardCreateLink(cardId: string, timestamp: string, cardTypeId: string, kindId: string): string;
    private AttachLink;
    private CommandDeleteLink;
    private DeleteLink;
    private RefreshLinks;
    private CommandExpandEventHandler;
    private PreviewFileEventHandler;
}
export declare class FolderTreeElement extends FolderTree {
    constructor();
    AfterOpenFolderFunction: Function;
    private AddOpenOverride;
    LoadTreeToContainer(container: HTMLElement): void;
}
