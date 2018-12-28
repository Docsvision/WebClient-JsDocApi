import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { FileListItem } from "@docsvision/webclient/BackOffice/FileListItem";
import { FileListControlParams } from "@docsvision/webclient/BackOffice/FileListControl";
import { FileListControlLogic } from "@docsvision/webclient/BackOffice/FileListControlLogic";
import { FileSign } from '@docsvision/webclient/BackOffice/FileSign';
import { IFileSignInfo } from "@docsvision/webclient/Legacy/IFileSingInfo";
import { BaseControlImpl, BaseControlImplState } from "@docsvision/webclient/System/BaseControlImpl";
import { IRealTimeCommunicationMessage } from "@docsvision/webclient/System/IRealTimeCommunicationMessage";
import React from "react";
/** @internal */
export interface FileListControlState extends BaseControlImplState, FileListControlParams {
    logic: FileListControlLogic;
    autoUpload: boolean;
    /** Загружены ли оставшиеся файлы в данный момент */
    isLeftFilesLoaded: boolean;
}
export declare type FileListImplState = FileListControlState;
export interface ICardChangedByWebDavMessage {
    OwnerCardId: string;
}
/** @internal */
export declare class FileListControlImpl extends BaseControlImpl<FileListControlParams, FileListControlState> {
    mainAttach: FileListAttachedElements;
    extraAttach: FileListAttachedElements;
    signButton: HTMLElement;
    viewSignButton: HTMLElement;
    fileSignLogic: FileSign;
    readonly logic: FileListControlLogic;
    constructor(props: FileListControlParams, state: FileListControlState);
    componentDidMount(): void;
    componentWillUnmount(): void;
    init(): void;
    protected onDocumentChangedByWebdav(msg: IRealTimeCommunicationMessage<ICardChangedByWebDavMessage>): void;
    protected getCssClass(): string;
    protected getFilesSignInfo(): IFileSignInfo[];
    extraFilesExpanded: boolean;
    fileCommandBarExpanded: boolean;
    /** @deprecated */
    isLeftFilesLoaded: boolean;
    /** @deprecated */
    isLeftFilesLoading: boolean;
    mainFilesExpanded: boolean;
    signCommandBarExpanded: boolean;
    renderUploadForm(attach: FileListAttachedElements, action: string, main: boolean, fileItem?: FileListItem): JSX.Element;
    protected renderEditModeFileList(): JSX.Element;
    protected onDropzoneClick(): void;
    protected renderEditMode(): JSX.Element;
    protected onDocumentClick(ev: any): void;
    onToggleTableClick(main: boolean): void;
    onToggleCommandBarClick(ev?: React.MouseEvent<any>): void;
    onAddClick(main: boolean, ev?: React.MouseEvent<any>): void;
    protected attachSignButton(element: HTMLElement): void;
    protected attachViewSignButton(element: HTMLElement): void;
    protected onSignButtonClick(ev: React.MouseEvent<any>): void;
    onToggleSignPanelClick(ev?: React.MouseEvent<any>): void;
    protected renderViewModeTitle(mainFiles: boolean): JSX.Element;
    protected renderViewModeCommandBar(): JSX.Element;
    protected renderViewModeSignPanel(): JSX.Element;
    protected renderViewModeFilesHeader(): JSX.Element;
    protected renderViewModeFiles(main: boolean): JSX.Element;
    protected renderPlaceholders(): any[];
    protected getLoaderWidth(i: number): number;
    protected renderViewModeMain(): JSX.Element;
    protected renderViewModeExtra(): JSX.Element;
    protected renderViewMode(): JSX.Element;
    renderControl(): JSX.Element;
}
