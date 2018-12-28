import { FileListAttachedElements } from "@docsvision/webclient/BackOffice/FileListAttachElements";
import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { CommentFileParams } from "@docsvision/webclient/Platform/CommentFile";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { IBindingResult } from "@docsvision/webclient/System/IBindingResult";
import { RequestHelper } from "@docsvision/webclient/System/RequestHelper";
import { IValidationParams } from "@docsvision/webclient/System/IValidationParams";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
import React from "react";
/** @internal */
export interface CommentFileState extends BaseControlState, CommentFileParams {
    menuExpanded: boolean;
    saveHelper: RequestHelper;
    validationMessage: string;
    bindingInfo: IBindingResult<GenModels.CommonFileModel>;
    lastSelectedFile: File;
}
/** @internal */
export declare class CommentFileImpl extends BaseControlImpl<CommentFileParams, CommentFileState> {
    fileUploadAttach: FileListAttachedElements;
    constructor(props: CommentFileParams, state: CommentFileState);
    setValue(value: GenModels.CommonFileModel, forceUpdate?: boolean): JQueryDeferred<any>;
    protected setValueInternal(value: GenModels.CommonFileModel): JQueryDeferred<any>;
    value: GenModels.CommonFileModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected onDocumentClick: (e: MouseEvent) => void;
    getLinkUrl(cardId: string): string;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    openFilePreview: () => void;
    removeFile: () => void;
    onOpenMenuClick: () => Promise<void>;
    onDownloadMenuClick: () => Promise<void>;
    getDownloadLink(): string;
    onUploadMenuClick: () => void;
    onDeleteMenuClick: () => void;
    onTextClick: () => void;
    openFileSelectDialog(): Promise<void>;
    validate(params: IValidationParams): IValidationResult;
    onMenuClick: () => void;
    readonly hasValue: boolean;
    readonly isLoading: boolean;
    readonly isMenuAvailable: boolean;
    readonly isTextClickable: boolean;
    readonly isPreviewMenuAvailable: boolean;
    protected renderValidationMessage(): JSX.Element;
    protected readonly editAvailable: boolean;
    protected getCssClass(): string;
    protected getTextTabIndex(): 0 | -1;
    protected onTextKeyDown: (event: React.KeyboardEvent<any>) => void;
    protected onMenuKeyDown: (event: React.KeyboardEvent<any>) => void;
    protected initFileUpload(attach: FileListAttachedElements): void;
    protected onFilesAdded(attach: FileListAttachedElements, e: any, data: any): Promise<void>;
    setFile(file: File): Promise<void>;
    protected renderUploadForm(attach: FileListAttachedElements): JSX.Element;
    protected renderLabel(): JSX.Element;
    /**
     * Renders settings menu and its icon to open menu
     */
    protected renderSettingsMenu(): JSX.Element;
    /**
     * Renders label value
     */
    protected renderValue(): JSX.Element;
    renderControl(): JSX.Element;
}
