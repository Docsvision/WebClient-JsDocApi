import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { LinkItem } from "@docsvision/webclient/BackOffice/LinkItem";
import { LoadingLinkItem } from "@docsvision/webclient/BackOffice/LoadingLinkItem";
import { ExistingCardLinkDialog } from "@docsvision/webclient/BackOffice/ExistingCardLinkDialog";
import { LinksParams } from "@docsvision/webclient/BackOffice/Links";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import React from "react";
/** @internal */
export interface LinksState extends LinksParams, BaseControlState {
    model: GenModels.LinksDataModel;
    bindingInfo: GenModels.SimpleBindingInfo;
    createLinkOperationBinding: string;
    addLinkOperationBinding: string;
    addUrlOperationBinding: string;
    addFileOperationBinding: string;
    addExistingCardLinkDialog: ExistingCardLinkDialog;
    loadingLinks: LoadingLinkItem[];
    totalLinksCount: number;
    linksLoaded: boolean;
    isAddUrlDialogShown: boolean;
    editOperationAllowed: boolean;
}
/** @internal */
export declare type LinksImplState = LinksState;
/** @internal */
export declare class LinksImpl extends BaseControlImpl<LinksParams, LinksState> {
    fileUploadAttach: FileListAttachedElements;
    requestHelper: RequestHelper;
    constructor(props: LinksParams, state: LinksState);
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected initFileUpload: (attach: FileListAttachedElements) => void;
    protected openFileSelectDialog(): Promise<void>;
    protected onFilesAdded(attach: FileListAttachedElements, e: any, data: any): Promise<void>;
    protected setFiles(files: File[]): Promise<void>;
    protected closeAllMenus(): void;
    model: GenModels.LinksDataModel;
    isExpanded: boolean;
    commandBarExpanded: boolean;
    loadLinksModel(model: GenModels.LinksDataModel): void;
    protected getCardCreateLink(cardTypeId: string, kindId: string, linkTypeId: string): string;
    protected onDocumentClick(ev: any): void;
    protected onLinkClick(linkItem: LinkItem): void;
    protected makeLinkUrl(url: string): string;
    onHeaderClick(): void;
    protected onCollapsed(): void;
    protected onExpanded(): void;
    onCommandBarClick(ev?: React.MouseEvent<any>): void;
    onAddNewFileClick: (ev?: React.MouseEvent<Element>) => void;
    onAddNewUrlClick: (ev?: React.MouseEvent<Element>) => void;
    addNewUrl: (url: string, linkType: string) => void;
    closeAddNewUrlDialog: () => void;
    onAddNewCardLinkClick(ev?: React.MouseEvent<any>): void;
    onAddExistingCardLinkClick(ev?: React.MouseEvent<any>): void;
    protected onViewFileMenuClick(linkItem: LinkItem): void;
    protected onFollowLinkClick(linkItem: LinkItem): void;
    onDeleteMenuClick(linkItem: LinkItem): void;
    protected onDeleteFileMenuClick(linkItem: LinkItem): void;
    protected onLinkMenuClick(linkItem: LinkItem): void;
    protected getLinkIconClass(linkItem: LinkItem): "dv-ico icon-spin loader-animate" | "dv-ico ico-dv-card" | "dv-ico ico-file" | "dv-ico ico-url";
    protected onDownloadFile(linkItem: LinkItem): void;
    protected getShowFilesForLinksTypesIds: () => string[];
    protected hideInfoPopover(linkItem: LinkItem): void;
    protected showInfoPopover(linkItem: LinkItem): void;
    protected onLinkInfoEdited(linkItem: LinkItem): void;
    protected createLinkItemKey: (linkItem: LinkItem) => string;
    protected renderFileUploadForm(attach: FileListAttachedElements): JSX.Element;
    protected getLinksCount(): number;
    protected renderHeader(): JSX.Element;
    protected renderLinksTable(): JSX.Element;
    protected renderLinksTableRow({ prevLink, link, nextLink }: {
        prevLink: LinkItem;
        link: LinkItem;
        nextLink: LinkItem;
    }, options: {
        kindColumnWidth: string;
        nameColumnWidth: string;
        typeColumnWidth: string;
        infoColumnWidth: string;
        settingsColumnWidth: string;
    }): JSX.Element;
    protected renderLinksTableLoadingRow(link: LoadingLinkItem, options: {
        kindColumnWidth: string;
        nameColumnWidth: string;
        typeColumnWidth: string;
        infoColumnWidth: string;
        settingsColumnWidth: string;
    }): JSX.Element;
    protected renderEasyLinksTable(): JSX.Element;
    protected renderEasyLinksTableRow(link: LinkItem, options: {
        nameColumnWidth: string;
        infoColumnWidth: string;
        linksCount: number;
    }): JSX.Element;
    protected renderEasyLinksTableLoadingRow(link: LoadingLinkItem, options: {
        nameColumnWidth: string;
        infoColumnWidth: string;
        linksCount: number;
    }): JSX.Element;
    protected renderLinkItemUnion({ prevLink, link, nextLink }: {
        prevLink: LinkItem;
        link: LinkItem;
        nextLink: LinkItem;
    }): JSX.Element;
    protected renderPlaceholders(): any[];
    protected getLoaderWidth(i: number): number;
    protected renderSettingsMenu(linkItem: LinkItem): JSX.Element;
    renderControl(): JSX.Element;
    openFilePreview(linkItem: LinkItem): void;
    getLinkUrl(linkItem: LinkItem): string;
}
