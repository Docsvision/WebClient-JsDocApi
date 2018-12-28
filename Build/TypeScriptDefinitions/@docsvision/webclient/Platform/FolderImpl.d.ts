import { GenModels } from "@docsvision/webclient/Generated/DocsVision.WebClient.Models";
import { ModalWindow } from "@docsvision/webclient/Legacy/ModalWindow";
import { FolderParams } from "@docsvision/webclient/Platform/Folder";
import { FolderModal } from "@docsvision/webclient/Platform/FolderModal";
import { BaseControlState } from "@docsvision/webclient/System/BaseControl";
import { BaseControlImpl } from "@docsvision/webclient/System/BaseControlImpl";
import { IDataChangedEventArgs } from "@docsvision/webclient/System/IDataChangedEventArgs";
import { IValidationParams } from "@docsvision/webclient/System/IValidationParams";
import { IValidationResult } from "@docsvision/webclient/System/IValidationResult";
/** @internal */
export interface FolderState extends FolderParams, BaseControlState {
    checkFolderForAvailable: (folderId: string) => JQueryDeferred<GenModels.CheckResult>;
    dialog: ModalWindow;
    validationMessage: string;
}
/** @internal */
export declare type FolderImplState = FolderState;
/** @internal */
export declare class FolderImpl extends BaseControlImpl<FolderParams, FolderState> {
    constructor(props: FolderParams, state: FolderState);
    componentDidMount(): void;
    show(): void;
    hide(): void;
    clear(): void;
    validate(params: IValidationParams): IValidationResult;
    protected handleDataChanged(eventArgs: IDataChangedEventArgs): void;
    protected renderValidationMessage(): JSX.Element;
    protected updateValidationMessage(): void;
    value: GenModels.FolderNode;
    changeFolder(newFolder: GenModels.FolderNode): void;
    protected onFolderSelected(controlInModal: FolderModal, window: ModalWindow): void;
    protected selectFolder(folderId: string): Promise<void>;
    protected getFolderInfo(folderId: string): JQueryDeferred<GenModels.FolderNode>;
    protected renderLabel(): JSX.Element;
    protected renderValue(): JSX.Element;
    protected renderClearButton(): JSX.Element;
    protected getCssClass(): string;
    renderControl(): JSX.Element;
}
